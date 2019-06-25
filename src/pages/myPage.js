import {brain} from '../app'

export const myPage = {
    myPageElement: document.getElementById('my-page'),

    kill: () => {
        myPage.myPageElement.innerHTML = ''
    },

    render: (myPageData) => {
        myPage.myPageElement.innerHTML = 
        `
            <div class="middle-top">Building</div>

            <div class="floor">
                Floor 10
                <div class="floor-right">
                    <div class="up-btn ghost-btn"></div>
                    <div class="down-btn" id="floor-10-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 9
                <div class="floor-right">
                    <div class="up-btn" id="floor-9-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-9-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 8
                <div class="floor-right">
                    <div class="up-btn" id="floor-8-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-8-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 7
                <div class="floor-right">
                    <div class="up-btn" id="floor-7-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-7-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 6
                <div class="floor-right">
                    <div class="up-btn" id="floor-6-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-6-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 5
                <div class="floor-right">
                    <div class="up-btn" id="floor-5-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-5-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 4
                <div class="floor-right">
                    <div class="up-btn" id="floor-4-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-4-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 3
                <div class="floor-right">
                    <div class="up-btn" id="floor-3-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-3-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 2
                <div class="floor-right">
                    <div class="up-btn" id="floor-2-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn" id="floor-2-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 1
                <div class="floor-right">
                   <div class="up-btn" id="floor-1-up"><i class="material-icons">keyboard_arrow_up</i></div>
                   <div class="down-btn" id="floor-1-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor 0
                <div class="floor-right">
                   <div class="up-btn" id="floor-0-up"><i class="material-icons">keyboard_arrow_up</i></div>
                   <div class="down-btn" id="floor-0-down"><i class="material-icons">keyboard_arrow_down</i></div>
                </div>
            </div>

            <div class="floor">
                Floor -1
                <div class="floor-right">
                    <div class="up-btn" id="floor-minus1-up"><i class="material-icons">keyboard_arrow_up</i></div>
                    <div class="down-btn ghost-btn"></div>
                </div>
            </div>
        `
        // INNER ELEMENTS
        // up buttons
        const floor0DownElement = document.getElementById('floor-0-down')
        const floor1DownElement = document.getElementById('floor-1-down')
        const floor2DownElement = document.getElementById('floor-2-down')
        const floor3DownElement = document.getElementById('floor-3-down')
        const floor4DownElement = document.getElementById('floor-4-down')
        const floor5DownElement = document.getElementById('floor-5-down')
        const floor6DownElement = document.getElementById('floor-6-down')
        const floor7DownElement = document.getElementById('floor-7-down')
        const floor8DownElement = document.getElementById('floor-8-down')
        const floor9DownElement = document.getElementById('floor-9-down')
        const floor10DownElement = document.getElementById('floor-10-down')
        // down buttons
        const floor0UpElement = document.getElementById('floor-0-up')
        const floor1UpElement = document.getElementById('floor-1-up')
        const floor2UpElement = document.getElementById('floor-2-up')
        const floor3UpElement = document.getElementById('floor-3-up')
        const floor4UpElement = document.getElementById('floor-4-up')
        const floor5UpElement = document.getElementById('floor-5-up')
        const floor6UpElement = document.getElementById('floor-6-up')
        const floor7UpElement = document.getElementById('floor-7-up')
        const floor8UpElement = document.getElementById('floor-8-up')
        const floor9UpElement = document.getElementById('floor-9-up')
        const floorMinusOneUpElement = document.getElementById('floor-minus1-up')

        // EVENT LISTENERS
        floor10DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(10, "down")
        })
        floor9DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(9, "down")
        })
        floor8DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(8, "down")
        })
        floor7DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(7, "down")
        })
        floor6DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(6, "down")
        })
        floor5DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(5, "down")
        })
        floor4DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(4, "down")
        })
        floor3DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(3, "down")
        })
        floor2DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(2, "down")
        })
        floor1DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(1, "down")
        })
        floor0DownElement.addEventListener('click', () => {
            brain.callButtonWasPressed(0, "down")
        })

        floor9UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(9, "up")
        })
        floor8UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(8, "up")
        })
        floor7UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(7, "up")
        })
        floor6UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(6, "up")
        })
        floor5UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(5, "up")
        })
        floor4UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(4, "up")
        })
        floor3UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(3, "up")
        })
        floor2UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(2, "up")
        })
        floor1UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(1, "up")
        })
        floor0UpElement.addEventListener('click', () => {
            brain.callButtonWasPressed(0, "up")
        })
        floorMinusOneUpElement.addEventListener('click', () => {
            brain.callButtonWasPressed((-1), "up")
        })

    },

    myPageInnerFunction: () => {
        console.log('function called successfully !')
    }
}