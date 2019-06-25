import {router} from './router/router'
import Elevator from './Elevator'
import { elevatorAComponent } from "./components/elevatorAComponent";
import { elevatorBComponent } from "./components/elevatorBComponent";


export const elevatorA = new Elevator("A", (-1), 9, 0)
export const elevatorB = new Elevator("B", 0, 10, 0)

router.goToMyPage()

export const brain = {
    // When elevators are called from a floor, the brain calls the nearest available elevator
    callButtonWasPressed(callFloor, direction) {
        if (Math.abs(elevatorA.position - callFloor) <= Math.abs(elevatorB.position - callFloor) || callFloor === (-1) || elevatorB.emergency === true) {
            elevatorA.call(callFloor, direction)
            elevatorAComponent.render()
        }
        else if (Math.abs(elevatorA.position - callFloor) > Math.abs(elevatorB.position - callFloor) || callFloor === 10 || elevatorA.emergency === true) {
            elevatorB.call(callFloor, direction)
            elevatorBComponent.render()
        }
    },

    elevatorButtonWasPressed(elevator, destination) {
        if (elevator === "A") {
            if (elevatorA.isTraveling || elevatorA.destinationMemory.length !== 0) {
                console.log('ElevatorA is already traveling')
                elevatorA.destinationMemory.push(destination)
                elevatorAComponent.render()
                console.log('ElevatorA memory :', elevatorA.destinationMemory)
            } else {
                elevatorA.goToFloor(destination)
                elevatorAComponent.render()
            }
        } else if (elevator === "B") {
            if (elevatorB.isTraveling || elevatorB.destinationMemory.length !== 0) {
                console.log('ElevatorB is already traveling')
                elevatorB.destinationMemory.push(destination)
                elevatorBComponent.render()
                console.log('ElevatorB memory :', elevatorB.destinationMemory)
            } else {
                elevatorB.goToFloor(destination)
                elevatorBComponent.render()
            }
        }
    }
}