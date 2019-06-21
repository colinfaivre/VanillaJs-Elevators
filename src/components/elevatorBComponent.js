import { elevatorB } from '../app'

export const elevatorBComponent = {
    elevatorBComponentElement: document.getElementById('right-nav'),
    kill: () => {
        elevatorBComponent.elevatorBComponentElement.innerHTML = ''
    },
    render: () => {
        elevatorBComponent.elevatorBComponentElement.innerHTML =
        `
            <div class="floor-number${elevatorB.position === 10 ? ' current-floor' : ''}">10</div>
            <div class="floor-number${elevatorB.position === 9 ? ' current-floor' : ''}">9</div>
            <div class="floor-number${elevatorB.position === 8 ? ' current-floor' : ''}">8</div>
            <div class="floor-number${elevatorB.position === 7 ? ' current-floor' : ''}">7</div>
            <div class="floor-number${elevatorB.position === 6 ? ' current-floor' : ''}">6</div>
            <div class="floor-number${elevatorB.position === 5 ? ' current-floor' : ''}">5</div>
            <div class="floor-number${elevatorB.position === 4 ? ' current-floor' : ''}">4</div>
            <div class="floor-number${elevatorB.position === 3 ? ' current-floor' : ''}">3</div>
            <div class="floor-number${elevatorB.position === 2 ? ' current-floor' : ''}">2</div>
            <div class="floor-number${elevatorB.position === 1 ? ' current-floor' : ''}">1</div>
            <div class="floor-number${elevatorB.position === 0 ? ' current-floor' : ''}">0</div>
            <div class="floor-number ghost-floor-number"></div>

        `
        // Elements
        // Event listeners
    }
}