import './style.scss'
import './index.html'
import './js/utils'
import {render} from './js/main'
import {sortTechnologies} from './js/utils'

render()

const titleBtns = document.querySelectorAll('.title-btn')

titleBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        if (window.innerWidth > 768) {
            if (!btn.classList.contains('hover-btn')) {
                btn.classList.add('hover-btn')
            }
        }
    })

    btn.addEventListener('mouseout', () => {
        if (btn.classList.contains('hover-btn')) {
            btn.classList.remove('hover-btn')
        }
    })
})

const tabsTechnologies = document.querySelectorAll('.main__tab-technologies li')

tabsTechnologies.forEach(tab => {
    tab.addEventListener('click', () => {
        tabsTechnologies.forEach(tabs => {
            tabs.classList.remove('active-tab')
        })

        tab.classList.add('active-tab')
        sortTechnologies(tab.dataset.type)
    })
})
