import {navbarComponent} from '../components/navbarComponent'
import {elevatorAComponent} from '../components/elevatorAComponent'
import {elevatorBComponent} from '../components/elevatorBComponent'
import {myPage} from '../pages/myPage'

export const router = {
    currentRoute: '',
    setCurrentRoute: (routeName) => {
        router.currentRoute = routeName
    },
    getCurrentRoute: () => {
        return router.currentRoute
    },
    goToMyPage: () => {
        // otherPage.kill()
        router.setCurrentRoute('my-page')
        navbarComponent.render()
        elevatorAComponent.render()
        elevatorBComponent.render()
        myPage.render()
    }
}