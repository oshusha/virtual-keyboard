'use strict';

const body = document.querySelector('body');
const keyboard = document.createElement('div');

function renderKeyboard() {
    const wrapper = document.createElement('div');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const resultArea = document.createElement('textarea');
    // const key = document.createElement('div');
    const set = document.createElement('p');

    body.appendChild(wrapper);
    wrapper.appendChild(content);
    content.appendChild(title);
    content.appendChild(resultArea);
    content.appendChild(keyboard);
    content.appendChild(set);

    title.textContent = 'Virtual Keyboard. Try it Now!';
    set.textContent = 'please, for EN/RU press alt+shift';

    body.classList.add('body');
    wrapper.classList.add('wrapper');
    content.classList.add('content');
    title.classList.add('content__title');
    resultArea.classList.add('content__result-area')
    keyboard.classList.add('content__keyboard');
    set.classList.add('content__set');
}

renderKeyboard();

let arrOfKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45,
    61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,
    92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
    122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

let arrOfKeysUp = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91,
    93, 92, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13,
    90, 88, 67, 86, 66, 78, 77, 44, 46, 47];

function  init() {
    let out = '';
    for (let i = 0; i < arrOfKeys.length; i++) {
        if(i == 13 || i == 26 || i == 38) {
            out += '<div class="clear-fix"></div>';
        }
        out += '<div class="content__key" data="'+arrOfKeys[i]+'">'+String.fromCharCode(arrOfKeys[i])+'</div>';
    }
    document.querySelector('.content__keyboard').innerHTML = out;
}

init();

document.onkeypress = function (event) {
    // console.log(event.code);
    // console.log(event.keyCode);
    document.querySelectorAll('div .content__keyboard .content__key').forEach(function (el) {
        el.classList.remove('content__key_active');
    })
    document.querySelector('div .content__keyboard .content__key[data="'+event.keyCode+'"]').classList.add('content__key_active');

}

document.querySelectorAll('div .content__keyboard .content__key').forEach(function (el) {
    el.onclick = function (event) {
        document.querySelectorAll('div .content__keyboard .content__key').forEach(function (el) {
            el.classList.remove('content__key_active');
        })
        // let code = this.getAttribute('data');
        // this.classList.add('content__key_active');
        // console.log(code);
        let code = this.textContent;
        this.classList.add('content__key_active');

        console.log(code);
    }
})

