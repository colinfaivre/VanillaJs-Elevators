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
    }

    // TODO : Move the destination and direction validation to the brain
    call(callFloor, callDirection) {
        if (this.isDestinationValid(callFloor) && this.isDirectionValid(callDirection, callFloor)) {
            console.log(`${this.name} was called from floor ${callFloor}`)
            this.goToFloor(callFloor)
        } else {
            this.showError('Invalid call')
        }
    }
    
    floorButtonPressed(callDestination) {
        console.log(`${callDestination }'s button was pressed in ${this.name}`)
        this.goToFloor(callDestination)
    }

    // TODO : Add setTimeOut in the loop with promise (to delay the elevator moves)
    async goToFloor(callFloor) {
        this.travelDestination = callFloor
        this.travelDirection = this.setTravelDirection(callFloor)
        this.isTraveling = true
        this.travelDistance = this.setTravelDistance(callFloor)

        console.log(`${this.name} is moving ${this.travelDirection} from ${this.position} to ${this.travelDestination}`)
        this.getPosition()

        
        
        for(let travel = 0; travel < this.travelDistance; travel++ ) {
            await this.wait(1000)
            if (this.travelDirection === 'up') {
                this.position++
            } else {
                this.position--
            }
            this.getPosition()
            elevatorAComponent.render()
            elevatorBComponent.render()
        }
        
        this.openDoors()
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
        console.log(`${this.name} doors are ${this.doors}`)
        elevatorAComponent.render()
        elevatorBComponent.render()
    }

    closeDoors() {
        this.doors = "closed"
        console.log(`${this.name} doors are ${this.doors}`)
        elevatorAComponent.render()
        elevatorBComponent.render()
    }
    
    showError(message) {
        console.log(message)
    }
}