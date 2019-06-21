import {router} from './router/router'
import Elevator from './Elevator'


export const elevatorA = new Elevator("A", (-1), 9, 0)
export const elevatorB = new Elevator("B", 0, 10, 0)

router.goToMyPage()

export const brain = {
    // When elevators are called from a floor, the brain calls the nearest Elevator
    callButtonWasPressed(callFloor, direction, destination) {
        if (Math.abs(elevatorA.position - callFloor) <= Math.abs(elevatorB.position - callFloor) || callFloor === (-1)) {
            elevatorA.call(callFloor, direction)
            // elevatorA.floorButtonPressed(destination)
        }
        else if (Math.abs(elevatorA.position - callFloor) > Math.abs(elevatorB.position - callFloor) || callFloor === 10) {
            elevatorB.call(callFloor, direction)
            // elevatorB.floorButtonPressed(destination)
        }
    }
}

// brain.callButtonWasPressed(9, "down", 3)
// brain.callButtonWasPressed(1, "up", 3)