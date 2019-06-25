import { elevatorAComponent } from "./components/elevatorAComponent";
import { elevatorBComponent } from "./components/elevatorBComponent";

export default class Elevator {
    constructor(name, lowestFloor, highestFloor, position) {
        this.name = name
        this.lowestFloor = lowestFloor
        this.highestFloor = highestFloor
        this.position = position

        this.doors = "closed"
        this.travelDestination = 0
        this.travelDirection = "up"
        this.isTraveling = false
        this.travelDuration = 0
        this.travelDistance = 0
        this.destinationMemory = []
        this.emergency = false
    }

    // TODO : Move the destination and direction validation to the brain
    call(callFloor, callDirection) {
        if (this.isDestinationValid(callFloor) && this.isDirectionValid(callDirection, callFloor)) {
            this.goToFloor(callFloor)
        } else {
            this.showError('Invalid call')
        }
    }
    
    emergencyButtonWasPressed() {
        this.emergency = true
        elevatorAComponent.render()
        elevatorBComponent.render()

    }
    resetEmergency() {
        this.emergency = false
        elevatorAComponent.render()
        elevatorBComponent.render()
    }

    floorButtonPressed(callDestination) {
        this.goToFloor(callDestination)
    }

    async goToFloor(callFloor) {
        this.closeDoors()
        this.travelDestination = callFloor
        this.travelDirection = this.setTravelDirection(callFloor)
        this.isTraveling = true
        this.travelDistance = this.setTravelDistance(callFloor)

        this.getPosition()
        
        for(let travel = 0; travel < this.travelDistance; travel++ ) {
            await this.wait(1000)
            if (this.travelDirection === 'up') {
                if (this.emergency) {
                    this.destinationMemory = []
                    this.isTraveling = false
                    this.openDoors()
                    return
                }
                this.position++
            } else {
                if (this.emergency) {
                    this.destinationMemory = []
                    this.isTraveling = false
                    this.openDoors()
                    return
                }
                this.position--
            }
            this.getPosition()
            elevatorAComponent.render()
            elevatorBComponent.render()
        }
        
        this.isTraveling = false
        this.openDoors()
        if (this.destinationMemory.length !== 0) {
            await this.wait(3000)
            this.isTraveling === true
            this.closeDoors()
            var nextDestination = this.destinationMemory[0]
            this.destinationMemory.shift()
            this.goToFloor(nextDestination)
            this.isTraveling === false
            console.log("destinationMemory: ", this.destinationMemory)
        }
    }

    async wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

    setTravelDirection(callFloor) {
        if (callFloor > this.position) {
            return "up"
        } else {
            return "down"
        }
    }

    setTravelDistance(callFloor) {
        return Math.abs(this.position - callFloor)
    }

    getPosition() {
        console.log(this.position)
    }

    isDestinationValid(floorNumber) {
        if (floorNumber > this.highestFloor || floorNumber < this.lowestFloor) {
            return false
        } else {
            return true
        }
    }

    isDirectionValid(direction, floor) {
        if (floor === this.highestFloor && direction === 'up') {
            return false
        }
        if (floor === this.lowestFloor && direction === 'down') {
            return false
        }
        return true
    }

    openDoors() {
        this.doors = "opened"
        elevatorAComponent.render()
        elevatorBComponent.render()
    }

    closeDoors() {
        this.doors = "closed"
        elevatorAComponent.render()
        elevatorBComponent.render()
    }
    
    showError(message) {
        console.log(message)
    }

    isInMemory(floor) {
        console.log('IsInMemory Called')
        if (this.destinationMemory.includes(floor)) {
            return true
        } else {
            return false
        }
    }
}