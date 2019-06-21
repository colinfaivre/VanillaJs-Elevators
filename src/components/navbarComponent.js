export const navbarComponent = {
    navbarComponentElement: document.getElementById('top-nav'),
    kill: () => {
        navbarComponent.navbarComponentElement.innerHTML = ''
    },
    render: () => {
        navbarComponent.navbarComponentElement.innerHTML =
        `
            <div class="nav-left">
                Elevator Simulation
            </div>
        `
        // Elements
        // Event listeners
    }
}