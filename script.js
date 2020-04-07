'use strict';


/*Рендеринг рядов клавиш и клавиатуры в целом*/
const createRow = rowKey => {
    const row = document.createElement('div');
    row.classList.add('content__row');

    for (let i = 0; i < rowKey.length; i++) {
        const key = document.createElement('div');
        key.className = 'content__key';
        key.classList.add(...rowKey[i].class);

        key.innerHTML = `
            <span class="ru hide"><span class="shift up hide">${rowKey[i].ru.shiftUp}</span>
            <span class="shift down hide">${rowKey[i].ru.shiftDown}</span></span>
            <span class="eng"><span class="shift up">${rowKey[i].eng.shiftUp}</span>
            <span class="shift down hide">${rowKey[i].eng.shiftDown}</span></span>`;
        row.appendChild(key);
    }
    return row;
};

const createKeyBoard = arrRows => {
    for (let i = 0; i < arrRows.length; i++) {
        document.querySelector('.content__keyboard').appendChild(createRow(arrRows[i]));
    }
};

function renderKeyboard() {
    const rows = [rowKeys1, rowKeys2, rowKeys3, rowKeys4, rowKeys5];

    const body = document.querySelector('body');
    body.classList.add('body');

    body.innerHTML = `
    <section class="wrapper">
      <div class="content">
          <h1 class="content__title">Virtual Keyboard. Try it Now!</h1>
          <p class="content__set">please, for EN/RU press ctrl+alt. created in the Linux.</p>          
          <textarea class="content__result-area" id="text" placeholder="Write here again!.." rows="10">
          </textarea>
          <section class="content__keyboard"></section>
       </div>   
    </section>
    `;

    createKeyBoard(rows);
}

renderKeyboard();

/*Функции-обработчики клавиш удаления введённого символа*/
const keyboard = document.querySelector('.content__keyboard');
const text = document.getElementById('text');
let stateShift = 'up';
let lang = 'eng';

function handlerKeyBackspace(str, iStart, iEnd) {
    let res = '';
    if (iStart === iEnd) {
        res = str.slice(0, iStart - 1) + str.slice(iStart + 1, str.length);
    } else {
        res = str.replace(str.slice(iStart, iEnd), '');
    }
    return res;
}

// function handlerKeyDelete(str, iStart, iEnd) {
//     let res = '';
//
//     if (iStart === iEnd) {
//         if (str.length === iStart) {
//             return str;
//         }
//         res = str.slice(0, iStart) + str.slice(iStart + 1, str.length);
//     } else {
//         res = str.replace(str.slice(iStart, iEnd), '');
//     }
//     return res;
// }


/*Функция-обработчик смены регистра клавиш*/
function caseToggle() {
    const keys = keyboard.querySelectorAll(`.${lang}`);
    for (let i = 0; i < keys.length; i++) {
        keys[i].querySelector('.up').classList.toggle('hide');
        keys[i].querySelector('.down').classList.toggle('hide');
    }

    if (stateShift === 'up') {
        stateShift = 'down';
    } else {
        stateShift = 'up';
    }
}


/*Функция-обработчик смены языка*/
function langToggle(currentCase) {
    let keys = keyboard.querySelectorAll(`.${lang}`);
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('hide');
        keys[i].querySelector(`.${currentCase}`).classList.toggle('hide');
    }
    if (lang === 'eng') {
        lang = 'ru';
        localStorage.setItem('lang', 'ru');
    } else {
        lang = 'eng';
        localStorage.setItem('lang', 'eng');
    }
    keys = keyboard.querySelectorAll(`.${lang}`);
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('hide');
        keys[i].querySelector(`.${currentCase}`).classList.toggle('hide');
    }
}

if (localStorage.lang === 'ru') {
    langToggle(stateShift);
}

function handlerKeyCapsLock(key) {
    if (stateShift === 'up') {
        key.classList.add('capslock_on');
    } else {
        key.classList.remove('capslock_on');
    }
    caseToggle();
}


/*Функция-обработчик клавиш перемещения*/
function handlerKeys(key, keyCode, keyValue) {
    switch (keyCode) {
        // case 'ArrowUp':
        //     text.value += '▲';
        //     break;
        // case 'ArrowDown':
        //     text.value += '▼';
        //     break;
        // case 'ArrowLeft':
        //     text.value += '◄';
        //     break;
        // case 'ArrowRight':
        //     text.value += '►';
        //     break;
        // case 'Delete':
        //     text.value = handlerKeyDelete(text.value, text.selectionStart, text.selectionEnd);
        //     break;

        case 'Backspace':
            text.value = handlerKeyBackspace(text.value, text.selectionStart, text.selectionEnd);
            break;
        case 'Tab':
            text.value += '    ';
            break;
        case 'Enter':
            text.value += '\n';
            break;
        case 'CapsLock':
            handlerKeyCapsLock(key);
            break;
        case 'ShiftLeft':
            caseToggle();
            break;
        case 'ShiftRight':
            caseToggle();
            break;
        case 'AltLeft':
        case 'AltRight':
        case 'ControlLeft':
        case 'ControlRight':
        case 'MetaLeft':
            break;
        default:
            text.value += keyValue;
            break;
    }
}


/*Функции-обработчики нажатий клавиш*/
const handlerKeyDown = event => {
    let key = null;
    text.focus();
    key = keyboard.getElementsByClassName(event.code)[0];
    if (!key) {
        event.preventDefault();
        return;
    }
    event.preventDefault();
    key.classList.add('animate');
    handlerKeys(key, event.code, key.querySelector(`.${lang} .${stateShift}`).textContent);

    if (event.ctrlKey && event.altKey) langToggle(stateShift);
};

const handlerKeyUp = event => {
    let key = null;
    text.focus();
    key = keyboard.getElementsByClassName(event.code)[0];
    if (!key) {
        event.preventDefault();
        return;
    }
    event.preventDefault();
    key.classList.remove('animate');
    switch (event.code) {
        case 'ShiftRight':
            caseToggle();
            break;
        case 'ShiftLeft':
            caseToggle();
            break;
        default:
            break;
    }
};


/*Функции-обработчики движений мыши*/
const handlerMouseUp = event => {
    if (event.target.tagName === 'SPAN') {
        const key = event.target.closest('div');
        key.classList.remove('animate');
        text.focus();
        handlerKeys(key, key.classList[1], event.target.textContent);
    }
};

const handlerMouseDown = event => {
    if (event.target.tagName === 'SPAN') {
        text.focus();
        const key = event.target.closest('div');
        key.classList.add('animate');

        switch (key.classList[1]) {
            case 'ShiftRight':
                caseToggle();
                break;
            case 'ShiftLeft':
                caseToggle();
                break;
            default:
                break;
        }
    }
};

const handlerMouseOut = event => {
    if (event.target.tagName === 'SPAN') {
        const key = event.target.closest('div');
        key.classList.remove('animate');
    }
};


/*Слушатели событий*/
document.addEventListener('keydown', handlerKeyDown);
document.addEventListener('keyup', handlerKeyUp);

keyboard.addEventListener('mousedown', handlerMouseDown);
keyboard.addEventListener('mouseup', handlerMouseUp);
keyboard.addEventListener('mouseout', handlerMouseOut);
