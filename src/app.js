import {router} from './router/router'
import Elevator from './Elevator'


export const elevatorA = new Elevator("A", (-1), 9, 0)
export const elevatorB = new Elevator("B", 0, 10, 0)

router.goToMyPage()

export const brain = {
    // When elevators are called from a floor, the brain calls the nearest Elevator
    callButtonWasPressed(callFloor, direction, destination) {
        if (Math.abs(elevatorA.position - callFloor) <= Math.abs(elevatorB.position - callFloor) || callFloor === (-1) || elevatorB.emergency === true) {
            elevatorA.call(callFloor, direction)
            // elevatorA.floorButtonPressed(destination)
        }
        else if (Math.abs(elevatorA.position - callFloor) > Math.abs(elevatorB.position - callFloor) || callFloor === 10 || elevatorA.emergency === true) {
            elevatorB.call(callFloor, direction)
            // elevatorB.floorButtonPressed(destination)
        }
    },

    elevatorButtonWasPressed(elevator, destination) {
        if (elevator === "A") {
            if (elevatorA.isTraveling || elevatorA.destinationMemory.length !== 0) {
                console.log('ElevatorA is already traveling')
                elevatorA.destinationMemory.push(destination)
                console.log('ElevatorA memory :', elevatorA.destinationMemory)
            } else {
                elevatorA.goToFloor(destination)
            }
        } else if (elevator === "B") {
            if (elevatorB.isTraveling || elevatorB.destinationMemory.length !== 0) {
                console.log('ElevatorB is already traveling')
                elevatorB.destinationMemory.push(destination)
                console.log('ElevatorB memory :', elevatorB.destinationMemory)
            } else {
                elevatorB.goToFloor(destination)
            }
        }
    }
}