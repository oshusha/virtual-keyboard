const rowKeys1 = [
    {
        class: ['Backquote'],
        eng: {
            shiftUp: '`',
            shiftDown: '~',
        },
        ru: {
            shiftUp: 'ё',
            shiftDown: 'Ё',
        },
    },
    {
        class: ['Digit1'],
        eng: {
            shiftUp: '1',
            shiftDown: '!',
        },
        ru: {
            shiftUp: '1',
            shiftDown: '!',
        },
    },
    {
        class: ['Digit2'],
        eng: {
            shiftUp: '2',
            shiftDown: '@',
        },
        ru: {
            shiftUp: '2',
            shiftDown: '"',
        },
    },
    {
        class: ['Digit3'],
        eng: {
            shiftUp: '3',
            shiftDown: '#',
        },
        ru: {
            shiftUp: '3',
            shiftDown: '№',
        },
    },
    {
        class: ['Digit4'],
        eng: {
            shiftUp: '4',
            shiftDown: '$',
        },
        ru: {
            shiftUp: '4',
            shiftDown: ';',
        },
    },
    {
        class: ['Digit5'],
        eng: {
            shiftUp: '5',
            shiftDown: '%',
        },
        ru: {
            shiftUp: '5',
            shiftDown: '%',
        },
    },
    {
        class: ['Digit6'],
        eng: {
            shiftUp: '6',
            shiftDown: '^',
        },
        ru: {
            shiftUp: '6',
            shiftDown: ':',
        },
    },
    {
        class: ['Digit7'],
        eng: {
            shiftUp: '7',
            shiftDown: '&',
        },
        ru: {
            shiftUp: '7',
            shiftDown: '?',
        },
    },
    {
        class: ['Digit8'],
        eng: {
            shiftUp: '8',
            shiftDown: '*',
        },
        ru: {
            shiftUp: '8',
            shiftDown: '*',
        },
    },
    {
        class: ['Digit9'],
        eng: {
            shiftUp: '9',
            shiftDown: '(',
        },
        ru: {
            shiftUp: '9',
            shiftDown: '(',
        },
    },
    {
        class: ['Digit0'],
        eng: {
            shiftUp: '0',
            shiftDown: ')',
        },
        ru: {
            shiftUp: '0',
            shiftDown: ')',
        },
    },
    {
        class: ['Minus'],
        eng: {
            shiftUp: '-',
            shiftDown: '_',
        },
        ru: {
            shiftUp: '-',
            shiftDown: '_',
        },
    },
    {
        class: ['Equal'],
        eng: {
            shiftUp: '=',
            shiftDown: '+',
        },
        ru: {
            shiftUp: '=',
            shiftDown: '+',
        },
    },
    {
        class: ['Backspace', 'accent'],
        eng: {
            shiftUp: 'Backspace',
            shiftDown: 'Backspace',
        },
        ru: {
            shiftUp: 'Backspace',
            shiftDown: 'Backspace',
        },
    },
];

const rowKeys2 = [
    {
        class: ['Tab', 'accent'],
        eng: {
            shiftUp: 'Tab',
            shiftDown: 'Tab',
        },
        ru: {
            shiftUp: 'Tab',
            shiftDown: 'Tab',
        },
    },
    {
        class: ['KeyQ'],
        eng: {
            shiftUp: 'q',
            shiftDown: 'Q',
        },
        ru: {
            shiftUp: 'й',
            shiftDown: 'Й',
        },
    },
    {
        class: ['KeyW'],
        eng: {
            shiftUp: 'w',
            shiftDown: 'W',
        },
        ru: {
            shiftUp: 'ц',
            shiftDown: 'Ц',
        },
    },
    {
        class: ['KeyE'],
        eng: {
            shiftUp: 'e',
            shiftDown: 'E',
        },
        ru: {
            shiftUp: 'у',
            shiftDown: 'У',
        },
    },
    {
        class: ['KeyR'],
        eng: {
            shiftUp: 'r',
            shiftDown: 'R',
        },
        ru: {
            shiftUp: 'к',
            shiftDown: 'К',
        },
    },
    {
        class: ['KeyT'],
        eng: {
            shiftUp: 't',
            shiftDown: 'T',
        },
        ru: {
            shiftUp: 'е',
            shiftDown: 'Е',
        },
    },
    {
        class: ['KeyY'],
        eng: {
            shiftUp: 'y',
            shiftDown: 'Y',
        },
        ru: {
            shiftUp: 'н',
            shiftDown: 'Н',
        },
    },
    {
        class: ['KeyU'],
        eng: {
            shiftUp: 'u',
            shiftDown: 'U',
        },
        ru: {
            shiftUp: 'г',
            shiftDown: 'Г',
        },
    },
    {
        class: ['KeyI'],
        eng: {
            shiftUp: 'i',
            shiftDown: 'I',
        },
        ru: {
            shiftUp: 'ш',
            shiftDown: 'Ш',
        },
    },
    {
        class: ['KeyO'],
        eng: {
            shiftUp: 'o',
            shiftDown: 'O',
        },
        ru: {
            shiftUp: 'щ',
            shiftDown: 'Щ',
        },
    },
    {
        class: ['KeyP'],
        eng: {
            shiftUp: 'p',
            shiftDown: 'P',
        },
        ru: {
            shiftUp: 'з',
            shiftDown: 'З',
        },
    },
    {
        class: ['BracketLeft'],
        eng: {
            shiftUp: '[',
            shiftDown: '{',
        },
        ru: {
            shiftUp: 'х',
            shiftDown: 'Х',
        },
    },
    {
        class: ['BracketRight'],
        eng: {
            shiftUp: ']',
            shiftDown: '}',
        },
        ru: {
            shiftUp: 'ъ',
            shiftDown: 'Ъ',
        },
    },
    {
        class: ['Delete', 'accent'],
        eng: {
            shiftUp: 'Delete',
            shiftDown: 'Delete',
        },
        ru: {
            shiftUp: 'Delete',
            shiftDown: 'Delete',
        },
    },
];

const rowKeys3 = [
    {
        class: ['CapsLock', 'accent'],
        eng: {
            shiftUp: 'CapsLock',
            shiftDown: 'CapsLock',
        },
        ru: {
            shiftUp: 'CapsLock',
            shiftDown: 'CapsLock',
        },
    },
    {
        class: ['KeyA'],
        eng: {
            shiftUp: 'a',
            shiftDown: 'A',
        },
        ru: {
            shiftUp: 'ф',
            shiftDown: 'Ф',
        },
    },
    {
        class: ['KeyS'],
        eng: {
            shiftUp: 's',
            shiftDown: 'S',
        },
        ru: {
            shiftUp: 'ы',
            shiftDown: 'Ы',
        },
    },
    {
        class: ['KeyD'],
        eng: {
            shiftUp: 'd',
            shiftDown: 'D',
        },
        ru: {
            shiftUp: 'в',
            shiftDown: 'В',
        },
    },
    {
        class: ['KeyF'],
        eng: {
            shiftUp: 'f',
            shiftDown: 'F',
        },
        ru: {
            shiftUp: 'а',
            shiftDown: 'А',
        },
    },
    {
        class: ['KeyG'],
        eng: {
            shiftUp: 'g',
            shiftDown: 'G',
        },
        ru: {
            shiftUp: 'п',
            shiftDown: 'П',
        },
    },
    {
        class: ['KeyH'],
        eng: {
            shiftUp: 'h',
            shiftDown: 'H',
        },
        ru: {
            shiftUp: 'р',
            shiftDown: 'Р',
        },
    },
    {
        class: ['KeyJ'],
        eng: {
            shiftUp: 'j',
            shiftDown: 'J',
        },
        ru: {
            shiftUp: 'о',
            shiftDown: 'О',
        },
    },
    {
        class: ['KeyK'],
        eng: {
            shiftUp: 'k',
            shiftDown: 'K',
        },
        ru: {
            shiftUp: 'л',
            shiftDown: 'Л',
        },
    },
    {
        class: ['KeyL'],
        eng: {
            shiftUp: 'l',
            shiftDown: 'L',
        },
        ru: {
            shiftUp: 'д',
            shiftDown: 'Д',
        },
    },
    {
        class: ['Semicolon'],
        eng: {
            shiftUp: ';',
            shiftDown: ':',
        },
        ru: {
            shiftUp: 'ж',
            shiftDown: 'Ж',
        },
    },
    {
        class: ['Quote'],
        eng: {
            shiftUp: "'",
            shiftDown: '"',
        },
        ru: {
            shiftUp: 'э',
            shiftDown: 'Э',
        },
    },
    {
        class: ['Enter', 'accent'],
        eng: {
            shiftUp: 'Enter',
            shiftDown: 'Enter',
        },
        ru: {
            shiftUp: 'Enter',
            shiftDown: 'Enter',
        },
    },
];

const rowKeys4 = [
    {
        class: ['ShiftLeft', 'accent'],
        eng: {
            shiftUp: 'Shift',
            shiftDown: 'Shift',
        },
        ru: {
            shiftUp: 'Shift',
            shiftDown: 'Shift',
        },
    },
    {
        class: ['KeyZ'],
        eng: {
            shiftUp: 'z',
            shiftDown: 'Z',
        },
        ru: {
            shiftUp: 'я',
            shiftDown: 'Я',
        },
    },
    {
        class: ['KeyX'],
        eng: {
            shiftUp: 'x',
            shiftDown: 'X',
        },
        ru: {
            shiftUp: 'ч',
            shiftDown: 'Ч',
        },
    },
    {
        class: ['KeyC'],
        eng: {
            shiftUp: 'c',
            shiftDown: 'C',
        },
        ru: {
            shiftUp: 'с',
            shiftDown: 'С',
        },
    },
    {
        class: ['KeyV'],
        eng: {
            shiftUp: 'v',
            shiftDown: 'V',
        },
        ru: {
            shiftUp: 'м',
            shiftDown: 'М',
        },
    },
    {
        class: ['KeyB'],
        eng: {
            shiftUp: 'b',
            shiftDown: 'B',
        },
        ru: {
            shiftUp: 'и',
            shiftDown: 'И',
        },
    },
    {
        class: ['KeyN'],
        eng: {
            shiftUp: 'n',
            shiftDown: 'N',
        },
        ru: {
            shiftUp: 'т',
            shiftDown: 'Т',
        },
    },
    {
        class: ['KeyM'],
        eng: {
            shiftUp: 'm',
            shiftDown: 'M',
        },
        ru: {
            shiftUp: 'ь',
            shiftDown: 'Ь',
        },
    },
    {
        class: ['Comma'],
        eng: {
            shiftUp: ',',
            shiftDown: '<',
        },
        ru: {
            shiftUp: 'б',
            shiftDown: 'Б',
        },
    },
    {
        class: ['Period'],
        eng: {
            shiftUp: '.',
            shiftDown: '>',
        },
        ru: {
            shiftUp: 'ю',
            shiftDown: 'Ю',
        },
    },
    {
        class: ['Slash'],
        eng: {
            shiftUp: '/',
            shiftDown: '?',
        },
        ru: {
            shiftUp: '.',
            shiftDown: ',',
        },
    },
    {
        class: ['ArrowUp', 'accent'],
        eng: {
            shiftUp: '▲',
            shiftDown: '▲',
        },
        ru: {
            shiftUp: '▲',
            shiftDown: '▲',
        },
    },
    {
        class: ['ShiftRight', 'accent'],
        eng: {
            shiftUp: 'Shift',
            shiftDown: 'Shift',
        },
        ru: {
            shiftUp: 'Shift',
            shiftDown: 'Shift',
        },
    },
];

const rowKeys5 = [
    {
        class: ['ControlLeft', 'accent'],
        eng: {
            shiftUp: 'Ctrl',
            shiftDown: 'Ctrl',
        },
        ru: {
            shiftUp: 'Ctrl',
            shiftDown: 'Ctrl',
        },
    },
    {
        class: ['MetaLeft', 'accent'],
        eng: {
            shiftUp: 'Win',
            shiftDown: 'Win',
        },
        ru: {
            shiftUp: 'Win',
            shiftDown: 'Win',
        },
    },
    {
        class: ['AltLeft', 'accent'],
        eng: {
            shiftUp: 'Alt',
            shiftDown: 'Alt',
        },
        ru: {
            shiftUp: 'Alt',
            shiftDown: 'Alt',
        },
    },
    {
        class: ['Space', 'accent'],
        eng: {
            shiftUp: ' ',
            shiftDown: ' ',
        },
        ru: {
            shiftUp: ' ',
            shiftDown: ' ',
        },
    },
    {
        class: ['AltRight', 'accent'],
        eng: {
            shiftUp: 'Alt',
            shiftDown: 'Alt',
        },
        ru: {
            shiftUp: 'Alt',
            shiftDown: 'Alt',
        },
    },
    {
        class: ['ArrowLeft', 'accent'],
        eng: {
            shiftUp: '◄',
            shiftDown: '◄',
        },
        ru: {
            shiftUp: '◄',
            shiftDown: '◄',
        },
    },
    {
        class: ['ArrowDown', 'accent'],
        eng: {
            shiftUp: '▼',
            shiftDown: '▼',
        },
        ru: {
            shiftUp: '▼',
            shiftDown: '▼',
        },
    },
    {
        class: ['ArrowRight', 'accent'],
        eng: {
            shiftUp: '►',
            shiftDown: '►',
        },
        ru: {
            shiftUp: '►',
            shiftDown: '►',
        },
    },
    {
        class: ['ControlRight', 'accent'],
        eng: {
            shiftUp: 'Ctrl',
            shiftDown: 'Ctrl',
        },
        ru: {
            shiftUp: 'Ctrl',
            shiftDown: 'Ctrl',
        },
    },
];
