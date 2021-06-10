import {render} from "./main";

export let browserLang = {
    lang: (window.navigator.language || navigator.userLanguage).slice(0, 2)
}

if (browserLang.lang !== 'ru') {
    browserLang.lang = 'en'
}

const inputLang = document.querySelector('.select')
const itemsLang = document.querySelectorAll('.select__item')

window.addEventListener('click', ev => {
    if (ev.target.dataset.type === 'input' || ev.target.dataset.type === 'value') {
        inputLang.classList.toggle('open')

    } else if (ev.target.dataset.type === 'item') {
        itemsLang.forEach(el => el.classList.remove('selected'))
        ev.target.classList.add('selected')
        inputLang.querySelector('[data-type="value"]').textContent = ev.target.dataset.value
        inputLang.classList.remove('open')
        browserLang.lang = ev.target.dataset.value
        render()

    } else if (ev.target.dataset.type === 'backdrop') {
        inputLang.classList.remove('open')
    }
})

itemsLang.forEach(item => {
    if (item.dataset.value === browserLang.lang) {
        item.classList.add('selected')
        inputLang.querySelector('[data-type="value"]').textContent = item.dataset.value
    }
})
