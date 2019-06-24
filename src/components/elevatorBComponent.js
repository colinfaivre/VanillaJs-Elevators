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
                <i class="material-icons">notifications</i>
                <span class="elevator-title">Elevator B</span>
                <i class="material-icons">notifications_off</i>
            </div>
            <div class="doors-state">Doors ${elevatorB.doors}</div>
            <div id="elevatorB-button-10" class="floor-number${elevatorB.position === 10 ? ' current-floor' : ''}">10</div>
            <div id="elevatorB-button-9" class="floor-number${elevatorB.position === 9 ? ' current-floor' : ''}">9</div>
            <div id="elevatorB-button-8" class="floor-number${elevatorB.position === 8 ? ' current-floor' : ''}">8</div>
            <div id="elevatorB-button-7" class="floor-number${elevatorB.position === 7 ? ' current-floor' : ''}">7</div>
            <div id="elevatorB-button-6" class="floor-number${elevatorB.position === 6 ? ' current-floor' : ''}">6</div>
            <div id="elevatorB-button-5" class="floor-number${elevatorB.position === 5 ? ' current-floor' : ''}">5</div>
            <div id="elevatorB-button-4" class="floor-number${elevatorB.position === 4 ? ' current-floor' : ''}">4</div>
            <div id="elevatorB-button-3" class="floor-number${elevatorB.position === 3 ? ' current-floor' : ''}">3</div>
            <div id="elevatorB-button-2" class="floor-number${elevatorB.position === 2 ? ' current-floor' : ''}">2</div>
            <div id="elevatorB-button-1" class="floor-number${elevatorB.position === 1 ? ' current-floor' : ''}">1</div>
            <div id="elevatorB-button-0" class="floor-number${elevatorB.position === 0 ? ' current-floor' : ''}">0</div>
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
    }
}