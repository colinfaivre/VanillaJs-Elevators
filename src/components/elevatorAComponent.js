import {elevatorA} from '../app'
export const elevatorAComponent = {
    elevatorAComponentElement: document.getElementById('left-nav'),
    kill: () => {
        elevatorAComponent.elevatorAComponentElement.innerHTML = ''
    },
    render: () => {
        elevatorAComponent.elevatorAComponentElement.innerHTML =
        `
            <div class="floor-number ghost-floor-number"></div>
            <div class="floor-number${elevatorA.position === 9 ? ' current-floor' : ''}">9</div>
            <div class="floor-number${elevatorA.position === 8 ? ' current-floor' : ''}">8</div>
            <div class="floor-number${elevatorA.position === 7 ? ' current-floor' : ''}">7</div>
            <div class="floor-number${elevatorA.position === 6 ? ' current-floor' : ''}">6</div>
            <div class="floor-number${elevatorA.position === 5 ? ' current-floor' : ''}">5</div>
            <div class="floor-number${elevatorA.position === 4 ? ' current-floor' : ''}">4</div>
            <div class="floor-number${elevatorA.position === 3 ? ' current-floor' : ''}">3</div>
            <div class="floor-number${elevatorA.position === 2 ? ' current-floor' : ''}">2</div>
            <div class="floor-number${elevatorA.position === 1 ? ' current-floor' : ''}">1</div>
            <div class="floor-number${elevatorA.position === 0 ? ' current-floor' : ''}">0</div>
            <div class="floor-number${elevatorA.position === (-1) ? ' current-floor' : ''}">-1</div>
        `
        // Elements
        // Event listeners

        // ${ elevatorA.position }
    }
}