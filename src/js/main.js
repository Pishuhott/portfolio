import {titleContents, about} from './data-content';
import {browserLang} from "./utils";

function checkContentBtn(content) {
    let html = ''

    if (content !== '') {
        return html = `
               <div class="title-btn no-hover-btn">
                    <a href="${content}" target="_blank"><div>DEMO</div></a>
               </div>
        `
    } else {
        return html
    }
}

let toHTMLWorks = cont => {
    let lang = browserLang.lang
    return `
    <div class="main__work">
        <div class="main__work-img">
            <img src="${cont.img}" alt="${cont.title}">
        </div>
        <div class="main__work-title">
            <div class="work-title">
                <h3>${cont.title}</h3>
                <p>${cont.description[lang]}</p>
            </div>
            <div class="work-title-buttons">
                ${checkContentBtn(cont.urlDemo)}
                <div class="title-btn no-hover-btn">
                    <a href="${cont.urlGitHub}" target="_blank"><div>GITHUB</div></a>
                </div>
            </div>
        </div>
    </div>
`
}

export function render() {
    let lang = browserLang.lang
    const html = titleContents.map(toHTMLWorks).join('')
    document.querySelector('#main-content').innerHTML = `
    <div class="main__my-works">${about.myWorks[lang]}</div>
    ${html}
    <div class="main__abuot">${about.aboutMe[lang]}</div>
    `
}
