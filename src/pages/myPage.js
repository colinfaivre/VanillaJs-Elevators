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
                    <button id="floor-10-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 9
                <div class="floor-right">
                    <button id="floor-9-up">UP</button>
                    <button id="floor-9-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 8
                <div class="floor-right">
                    <button id="floor-8-up">UP</button>
                    <button id="floor-8-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 7
                <div class="floor-right">
                    <button id="floor-7-up">UP</button>
                    <button id="floor-7-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 6
                <div class="floor-right">
                    <button id="floor-6-up">UP</button>
                    <button id="floor-6-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 5
                <div class="floor-right">
                    <button id="floor-5-up">UP</button>
                    <button id="floor-5-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 4
                <div class="floor-right">
                    <button id="floor-4-up">UP</button>
                    <button id="floor-4-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 3
                <div class="floor-right">
                    <button id="floor-3-up">UP</button>
                    <button id="floor-3-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 2
                <div class="floor-right">
                    <button id="floor-2-up">UP</button>
                    <button id="floor-2-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 1
                <div class="floor-right">
                   <button id="floor-1-up">UP</button>
                   <button id="floor-1-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor 0
                <div class="floor-right">
                   <button id="floor-0-up">UP</button>
                   <button id="floor-0-down">DOWN</button>
                </div>
            </div>

            <div class="floor">
                Floor -1
                <div class="floor-right">
                    <button id="floor-minus1-up">UP</button>
                </div>
            </div>
        `
        // Inner elements
        // const myPageInnerElement = document.getElementById('my-page-inner-element')
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
        const floorMinusOneUpElement = document.getElementById('floor-minus1-up')

        // Event listeners
        // myPageInnerElement.addEventListener('click', myPage.myPageInnerFunction)
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
    },

    myPageInnerFunction: () => {
        console.log('function called successfully !')
    }
}