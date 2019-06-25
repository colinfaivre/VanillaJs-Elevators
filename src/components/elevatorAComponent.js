import {elevatorA, brain} from '../app'
export const elevatorAComponent = {
    elevatorAComponentElement: document.getElementById('left-nav'),
    kill: () => {
        elevatorAComponent.elevatorAComponentElement.innerHTML = ''
    },
    render: () => {
        elevatorAComponent.elevatorAComponentElement.innerHTML =
        `
            <div class="top">
                <i id="start-emergency" class="material-icons emergency ${elevatorA.emergency ? '' : 'disabled'}">notifications</i>
                <span class="elevator-title">Elevator A</span>
                <i id="stop-emergency" class="material-icons emergency ${elevatorA.emergency ? 'disabled' : ''}">notifications_off</i>
            </div>
            <div class="doors-state ${elevatorA.doors === 'opened' ? 'open-doors' : ''}">Doors ${elevatorA.doors}</div>
            <div class="floor-number ghost-floor-number"></div>
            <div id="elevatorA-button-9" class="floor-number${elevatorA.position === 9 ? ' current-floor' : ''}">9</div>
            <div id="elevatorA-button-8" class="floor-number${elevatorA.position === 8 ? ' current-floor' : ''}">8</div>
            <div id="elevatorA-button-7" class="floor-number${elevatorA.position === 7 ? ' current-floor' : ''}">7</div>
            <div id="elevatorA-button-6" class="floor-number${elevatorA.position === 6 ? ' current-floor' : ''}">6</div>
            <div id="elevatorA-button-5" class="floor-number${elevatorA.position === 5 ? ' current-floor' : ''}">5</div>
            <div id="elevatorA-button-4" class="floor-number${elevatorA.position === 4 ? ' current-floor' : ''}">4</div>
            <div id="elevatorA-button-3" class="floor-number${elevatorA.position === 3 ? ' current-floor' : ''}">3</div>
            <div id="elevatorA-button-2" class="floor-number${elevatorA.position === 2 ? ' current-floor' : ''}">2</div>
            <div id="elevatorA-button-1" class="floor-number${elevatorA.position === 1 ? ' current-floor' : ''}">1</div>
            <div id="elevatorA-button-0" class="floor-number${elevatorA.position === 0 ? ' current-floor' : ''}">0</div>
            <div id="elevatorA-button-m1" class="floor-number${elevatorA.position === (-1) ? ' current-floor' : ''}">-1</div>
        `
        // Elements
        const elevatorAButton9Element = document.getElementById('elevatorA-button-9')
        const elevatorAButton8Element = document.getElementById('elevatorA-button-8')
        const elevatorAButton7Element = document.getElementById('elevatorA-button-7')
        const elevatorAButton6Element = document.getElementById('elevatorA-button-6')
        const elevatorAButton5Element = document.getElementById('elevatorA-button-5')
        const elevatorAButton4Element = document.getElementById('elevatorA-button-4')
        const elevatorAButton3Element = document.getElementById('elevatorA-button-3')
        const elevatorAButton2Element = document.getElementById('elevatorA-button-2')
        const elevatorAButton1Element = document.getElementById('elevatorA-button-1')
        const elevatorAButton0Element = document.getElementById('elevatorA-button-0')
        const elevatorAButtonMinus1Element = document.getElementById('elevatorA-button-m1')
        const startEmergencyButtonElement = document.getElementById('start-emergency')
        const stopEmergencyButtonElement = document.getElementById('stop-emergency')
        // Event listeners
        elevatorAButton9Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 9)
        })
        elevatorAButton8Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 8)
        })
        elevatorAButton7Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 7)
        })
        elevatorAButton6Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 6)
        })
        elevatorAButton5Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 5)
        })
        elevatorAButton4Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 4)
        })
        elevatorAButton3Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 3)
        })
        elevatorAButton2Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 2)
        })
        elevatorAButton1Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 1)
        })
        elevatorAButton0Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', 0)
        })
        elevatorAButtonMinus1Element.addEventListener('click', () => {
            brain.elevatorButtonWasPressed('A', (-1))
        })
        startEmergencyButtonElement.addEventListener('click', () => {
            elevatorA.emergencyButtonWasPressed()
        })
        stopEmergencyButtonElement.addEventListener('click', () => {
            elevatorA.resetEmergency()
        })
    }
}