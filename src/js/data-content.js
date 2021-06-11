export const about = {
    myWorks: {
        en: 'My works:',
        ru: 'Мои работы:',
    },
    aboutMe: {
        en: `
        <h2>A bit about myself</h2>
            <div class="main__about-me">
                <h3>Hi! My name is Sergey</h3>
                <ul>
                    <li>I am a novice front-end developer .</li>
                    <li>have skills in elastic and adaptive layout.</li>
                    <li>learning Node.js</li>
                    <li>completed the HTML code-basics training course <b>«HTML, CSS and JavaScript for beginners»</b></li>
                    <li>finishing <b>«The Rolling Scopes school»</b> training course (EPAM Systems).</li>
                    <li>completed a course of technical translation from English into Russian <b>(Milashevich method)</b>.</li>
                    <li>attending a course of conversational English (A2).</li>
                </ul>
            </div>
            
            <div class="main__skills">
                <h2>Key qualifications</h2>
                <ul >
                    <li>HTML5/CSS3</li>
                    <li>Less/Sass</li>
                    <li>BEM</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>Webpack</li>
                </ul>
            </div>
        `,
        ru: `
            <h2>Немного о себе</h2>
            <div class="main__about-me">
                <h3>Привет! Меня зовут Сергей</h3>
                <ul>
                    <li>Я начинающий front-end разработчик.</li>
                    <li>Владею навыками резиновой и адаптивной вёрстки.</li>
                    <li>Изучаю Node.js</li>
                    <li>Проходил курсы в HTML code-basics <b>«Для начинающих HTML, CSS и JavaScript»</b>.</li>
                    <li>Заканчиваю курсы от <b>«The Rolling Scopes school» (EPAM Systems)</b>.</li>
                    <li>Прошел курс технического перевода с английского на русский по методике <b>Милашевича</b>.</li>
                    <li>Посещаю курсы разговорного английского языка (A2).</li>
                </ul>
            </div>
            
            <div class="main__skills">
                <h2>Ключевые навыки</h2>
                <ul >
                    <li>HTML5/CSS3</li>
                    <li>Less/Sass</li>
                    <li>БЭМ</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>Webpack</li>
                </ul>
            </div>
        `
    }

}

const technologies = {
    en: {
        technology: 'technologies are used',
        sass: 'SASS preprocessor',
    },
    ru: {
        technology: 'Использованы технологии',
        sass: 'препроцессор SASS',
    },
    html: 'HTML5',
    css: 'CSS3',
    js: 'JavaScript',
    jQ: 'jQuery',
    nodeJS: 'Node.js',
    socketIO: 'Socket.io',
    api: 'API',
    webpack: 'Webpack',
}

export const titleContents = [
    {
        id: 1,
        title: 'Simple Singolo',
        description: {
            en: `Simple Singolo is a website page designed according to the layout.
                <br>
                <b>Getting the basics of page layout.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Simple Singolo – это страница сайта, созданная согласно макету.
                <br>
                <b>Получение основ верстания страниц.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.ru.sass}, ${technologies.js}.
                `
        },
        img: './assets/images/singolo.png',
        urlDemo: 'https://pishuhott.github.io/simple-singolo',
        urlGitHub: 'https://github.com/Pishuhott/singolo',
    },
    {
        id: 2,
        title: 'Dynamic Landing Page',
        description: {
            en: `Dynamic Landing Page is an app showing the current time, the name of the user and his/her tasks for 
                the current day. The background image changes depending on the time of the day.
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Dynamic Landing Page – приложение, показывающее текущее время, имя пользователя, 
                его задачи на текущий день. Фоновое изображение меняется в зависимости от времени суток.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/dynamic.png',
        urlDemo: 'https://pishuhott.github.io/dynamic-landing-page/',
        urlGitHub: 'https://github.com/Pishuhott/landing',
    },
    {
        id: 3,
        title: 'Calculator',
        description: {
            en: `Calculator is an application that performs simple math operations..
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Calculator – это приложение выполняющeе простые математические операции.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, 
                ${technologies.js}.
                `
        },
        img: './assets/images/calc.png',
        urlDemo: 'https://pishuhott.github.io/calculator',
        urlGitHub: 'https://github.com/Pishuhott/calculator',
    },
    {
        id: 4,
        title: 'Meditation',
        description: {
            en: `Meditation is an app for relaxation and meditation.
                <br>
                <b>Basics of working with video, audio, timers.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Meditation – приложение для релаксации и медитации.
                <br>
                <b>Основы работы с видео, аудио, таймерами.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/meditation.png',
        urlDemo: 'https://pishuhott.github.io/meditation',
        urlGitHub: 'https://github.com/Pishuhott/meditation',
    },
    {
        id: 5,
        title: 'Drum Kit',
        description: {
            en: `Drum Kit is a musical app that allows one to play sounds by pressing keys on the keyboard.
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Drum Kit – это музыкальное приложение, в котором, нажимая на клавиши на клавиатуре, 
                можно проигрывать звуки.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/drum-kit.png',
        urlDemo: 'https://pishuhott.github.io/drum-kit',
        urlGitHub: 'https://github.com/Pishuhott/drum-kit',
    },
    {
        id: 6,
        title: 'CSS Variables and JS',
        description: {
            en: `A photo editor that allows you to edit an image by applying various properties and filters.
                <br>
                <b>Basics of working with images.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Фоторедактор, позволяющий редактировать изображение, применяя к нему различные свойства и фильтры. 
                <br>
                <b>Основы работы с изображениями.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/variables.png',
        urlDemo: 'https://pishuhott.github.io/css-variables-and-js/',
        urlGitHub: 'https://github.com/Pishuhott/photo-editor',
    },
    {
        id: 7,
        title: 'Flex Panel Gallery',
        description: {
            en: `Image slider in JavaScript.
                <br>
                <b>Consolidation of knowledge about the flexboxes.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Слайдер изображений на JavaScript.
                <br>
                <b>Закрепления знания про флексбоксы.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/flex-panel.png',
        urlDemo: 'https://pishuhott.github.io/flex-panel-gallery',
        urlGitHub: 'https://github.com/Pishuhott/flex-panel-gallery',
    },
    {
        id: 8,
        title: 'Fun with HTML5 Canvas ',
        description: {
            en: `Canvas on which you can draw lines, thickness and color of which are changing while you are drawing. 
                <br>
                <b>The basics of working with canvas.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Канвас, на котором можно рисовать линии, толщина и цвет которых изменяются в процессе рисования. 
                <br>
                <b>Основы работы с использованием canvas.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/canvas.png',
        urlDemo: 'https://pishuhott.github.io/fun-with-html5-canvas/',
        urlGitHub: 'https://github.com/Pishuhott/mini.Paint',
    },
    {
        id: 9,
        title: 'Custom Video Player',
        description: {
            en: `Creation of a custom video player with a modified interface.
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Создание кастомного видеоплеера с измененным интерфейсом.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/video-player.png',
        urlDemo: 'https://pishuhott.github.io/custom-video-player',
        urlGitHub: 'https://github.com/Pishuhott/custom-video-player',
    },
    {
        id: 10,
        title: 'Video Speed Controller',
        description: {
            en: `Speed control for video playback. You can speed up or slow down the video playback 
                 speed by moving the slider.
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Регулятор скорости воспроизведения видео. Перемещая ползунок, можно ускорять или 
                 замедлять скорость воспроизведения видео.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
            `
        },
        img: './assets/images/speed-controller.png',
        urlDemo: 'https://pishuhott.github.io/video-speed-controller',
        urlGitHub: 'https://github.com/Pishuhott/video-speed-controller',
    },
    {
        id: 11,
        title: 'Whack-A-Mole',
        description: {
            en: `The game to check the speed of one’s reaction: you have to click on targets and earn points.
                <br>
                <b>The basics of creating of the games.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Игра на скорость реакции, в которой нужно кликать по целям и зарабатывать баллы.
                <br>
                <b>Основы создания игр.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
                `
        },
        img: './assets/images/whack-a-mole.png',
        urlDemo: 'https://pishuhott.github.io/whack-a-mole',
        urlGitHub: 'https://github.com/Pishuhott/whack-a-mole',
    },
    {
        id: 12,
        title: 'Virtual Keyboard',
        description: {
            en: `By clicking on the text field, you will get a virtual keyboard at the bottom of the screen. 
                <br>
                <b>Basics of work with DOM.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Кликнув по текстовому полю, вы получите виртуальную клавиатуру в нижней части экрана.
                <br>
                <b>Основы работы с DOM.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
            `
        },
        img: './assets/images/virtual-keyboard.png',
        urlDemo: 'https://pishuhott.github.io/virtual-keyboard',
        urlGitHub: 'https://github.com/Pishuhott/virtual-keyboard',
    },
    {
        id: 13,
        title: 'Raindrops',
        description: {
            en: `Raindrops is a math simulator app that allows you to consolidate the skills in arithmetic 
                operations: addition, subtraction, multiplication and division. During the exercise, you can choose 
                arithmetic operations and the difficulty level of the equations.
                <br><br>
                ${technologies.html}, ${technologies.en.sass} and ${technologies.js} ${technologies.en.technology}.
                `,

            ru: `Raindrops – это приложение - тренажёр по математике, позволяющee закрепить навыки 
                арифметических действий: сложения, вычитания, умножения и деления. В ходе упражнения можно выбирать 
                арифметические действия и уровень сложности уравнений.
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}.
            `
        },
        img: './assets/images/raindrops.png',
        urlDemo: 'https://pishuhott.github.io/raindrops',
        urlGitHub: 'https://github.com/Pishuhott/raindrops',
    },
    {
        id: 14,
        title: 'Fancy weather',
        description: {
            en: `Fancy weather is an app showing the weather forecast for three days.
                <br>
                <b>Basics of work with API.</b>
                <br><br>
                ${technologies.html}, ${technologies.en.sass}, ${technologies.js} and ${technologies.api}, 
                ${technologies.webpack} ${technologies.en.technology}.
                `,

            ru: `Fancy weather – приложение прогноза погоды на три дня.
                <br>
                <b>Основы работы с API.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.ru.sass}, ${technologies.js}, 
                ${technologies.api}, ${technologies.webpack}.
            `
        },
        img: './assets/images/weather.png',
        urlDemo: 'https://sergey-fancy-weather.netlify.app',
        urlGitHub: 'https://github.com/Pishuhott/fancy-weather',
    },
    {
        id: 15,
        title: 'Chat on socket.io',
        description: {
            en: `The chat application for sending / receiving messages in real time, 
                that has a client and server part of the code.
                <br>
                <b>Basics of work with Socket.</b>
                <br><br>
                ${technologies.html}, ${technologies.css}, ${technologies.js}, ${technologies.jQ}, 
                ${technologies.nodeJS} and ${technologies.socketIO} ${technologies.en.technology}.
                `,

            ru: `Приложение-чат для отправки / получения сообщений в режиме реального времени, 
                в котором есть клиентская и серверная часть кода.
                <br>
                <b>Основы работы с Socket.</b>
                <br><br>
                ${technologies.ru.technology} ${technologies.html}, ${technologies.css}, ${technologies.js}, 
                ${technologies.jQ}, ${technologies.nodeJS}, ${technologies.socketIO}.
            `
        },
        img: './assets/images/chat.png',
        urlDemo: '',
        urlGitHub: 'https://github.com/Pishuhott/chat-on-socket',
    },
]
