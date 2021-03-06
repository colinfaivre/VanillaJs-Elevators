import { elevatorB, brain } from '../app'

export const elevatorBComponent = {
    elevatorBComponentElement: document.getElementById('right-nav'),
    kill: () => {
        elevatorBComponent.elevatorBComponentElement.innerHTML = ''
    },
    render: () => {
        elevatorBComponent.elevatorBComponentElement.innerHTML =
        `
            <div class="top">
                <i id="startB-emergency" class="material-icons emergency ${elevatorB.emergency ? '' : 'disabled'}">notifications</i>
                <span class="elevator-title">Elevator B</span>
                <i id="stopB-emergency" class="material-icons emergency ${elevatorB.emergency ? 'disabled' : ''}">notifications_off</i>
            </div>
            <div class="doors-state ${elevatorB.doors === 'opened' ? 'open-doors' : ''}">Doors ${elevatorB.doors}</div>
            <div id="elevatorB-button-10" class="floor-number${elevatorB.position === 10 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(10)}">10</div>
            <div id="elevatorB-button-9" class="floor-number${elevatorB.position === 9 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(9)}">9</div>
            <div id="elevatorB-button-8" class="floor-number${elevatorB.position === 8 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(8)}">8</div>
            <div id="elevatorB-button-7" class="floor-number${elevatorB.position === 7 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(7)}">7</div>
            <div id="elevatorB-button-6" class="floor-number${elevatorB.position === 6 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(6)}">6</div>
            <div id="elevatorB-button-5" class="floor-number${elevatorB.position === 5 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(5)}">5</div>
            <div id="elevatorB-button-4" class="floor-number${elevatorB.position === 4 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(4)}">4</div>
            <div id="elevatorB-button-3" class="floor-number${elevatorB.position === 3 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(3)}">3</div>
            <div id="elevatorB-button-2" class="floor-number${elevatorB.position === 2 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(2)}">2</div>
            <div id="elevatorB-button-1" class="floor-number${elevatorB.position === 1 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(1)}">1</div>
            <div id="elevatorB-button-0" class="floor-number${elevatorB.position === 0 ? ' current-floor' : ''} ${elevatorBComponent.buttonWasPressed(0)}">0</div>
            <div class="floor-number ghost-floor-number"></div>
        `
        // Elements
        const elevatorBButton10Element = document.getElementById('elevatorB-button-10')
        const elevatorBButton9Element = document.getElementById('elevatorB-button-9')
        const elevatorBButton8Element = document.getElementById('elevatorB-button-8')
        const elevatorBButton7Element = document.getElementById('elevatorB-button-7')
        const elevatorBButton6Element = document.getElementById('elevatorB-button-6')
        const elevatorBButton5Element = document.getElementById('elevatorB-button-5')
        const elevatorBButton4Element = document.getElementById('elevatorB-button-4')
        const elevatorBButton3Element = document.getElementById('elevatorB-button-3')
        const elevatorBButton2Element = document.getElementById('elevatorB-button-2')
        const elevatorBButton1Element = document.getElementById('elevatorB-button-1')
        const elevatorBButton0Element = document.getElementById('elevatorB-button-0')
        const startEmergencyButtonElement = document.getElementById('startB-emergency')
        const stopEmergencyButtonElement = document.getElementById('stopB-emergency')
        // Event listeners
        elevatorBButton10Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 10)
        })
        elevatorBButton9Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 9)
        })
        elevatorBButton8Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 8)
        })
        elevatorBButton7Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 7)
        })
        elevatorBButton6Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 6)
        })
        elevatorBButton5Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 5)
        })
        elevatorBButton4Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 4)
        })
        elevatorBButton3Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 3)
        })
        elevatorBButton2Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 2)
        })
        elevatorBButton1Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 1)
        })
        elevatorBButton0Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('B', 0)
        })
        startEmergencyButtonElement.addEventListener('click', () => {
            elevatorB.emergencyButtonWasPressed()
        })
        stopEmergencyButtonElement.addEventListener('click', () => {
            elevatorB.resetEmergency()
        })
    },
    buttonWasPressed(buttonNumber) {
        return (elevatorB.travelDestination === buttonNumber) || (elevatorB.destinationMemory.includes(buttonNumber)) ? 'destination' : ''
    }
}