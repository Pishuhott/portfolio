import './style.scss'
import './index.html'
import './js/utils'
import {render} from './js/main'

render()

const titleBtns = document.querySelectorAll('.title-btn')

    titleBtns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            if (window.innerWidth > 768) {
                if (!btn.classList.contains('hover-btn')) {
                    btn.classList.remove('no-hover-btn')
                    btn.classList.add('hover-btn')
                }
            }
        })

        btn.addEventListener('mouseout', () => {
            if (btn.classList.contains('hover-btn')) {
                btn.classList.remove('hover-btn')
                btn.classList.add('no-hover-btn')
            }
        })
    })
