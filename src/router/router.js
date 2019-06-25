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
        router.setCurrentRoute('my-page')
        elevatorAComponent.render()
        elevatorBComponent.render()
        myPage.render()
    }
}