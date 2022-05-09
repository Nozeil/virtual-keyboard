import ElementTemplate from './_insertElem';

const WRAPPER = new ElementTemplate('div', 'wrapper', document.body).appendElement();
const MAIN = new ElementTemplate('main', 'main', WRAPPER).appendElement();
const SECTION = new ElementTemplate('section', 'section', MAIN).appendElement();
new ElementTemplate('h1', 'section__title', SECTION).insertText('Virtual keyboard');
const FORM = new ElementTemplate('form', 'section__form form', SECTION).appendElement();
const TEXTAREA = new ElementTemplate('textarea', 'form__textarea', FORM).appendElement();
new ElementTemplate('p', 'section__info', SECTION).insertText('OS Windows. Switch language buttons: Left Ctr + Left Alt.');
const KEYBOARD = new ElementTemplate('div', 'section__keyboard keyboard', SECTION).appendElement();

const buttons = [];
let isLowerCase = true;

let currentLanguage = (localStorage.getItem('currentLanguage')) ? localStorage.getItem('currentLanguage') : 'RU';

let isCtrClicked = false;
let isAltLeftClicked = false;
let isShiftClicked = false;

const ROW_1 = [
  {
    code: 'Backquote', key: 'ё', enKey: '`', shiftEn: '~',
  },
  { code: 'Digit1', key: '1', shift: '!' },
  {
    code: 'Digit2', key: '2', shift: '"', shiftEn: '@',
  },
  {
    code: 'Digit3', key: '3', shift: '№', shiftEn: '#',
  },
  {
    code: 'Digit4', key: '4', shift: ';', shiftEn: '$',
  },
  {
    code: 'Digit5', key: '5', shift: '%', shiftEn: '%',
  },
  {
    code: 'Digit6', key: '6', shift: ':', shiftEn: '^',
  },
  {
    code: 'Digit7', key: '7', shift: '?', shiftEn: '&',
  },
  { code: 'Digit8', key: '8', shift: '*' },
  { code: 'Digit9', key: '9', shift: '(' },
  { code: 'Digit0', key: '0', shift: ')' },
  { code: 'Minus', key: '-', shift: '_' },
  { code: 'Equal', key: '=', shift: '+' },
  { code: 'Backspace', key: 'Backspace' },
];

const ROW_2 = [
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'й', enKey: 'q' },
  { code: 'KeyW', key: 'ц', enKey: 'w' },
  { code: 'KeyE', key: 'у', enKey: 'e' },
  { code: 'KeyR', key: 'к', enKey: 'r' },
  { code: 'KeyT', key: 'е', enKey: 't' },
  { code: 'KeyY', key: 'н', enKey: 'y' },
  { code: 'KeyU', key: 'г', enKey: 'u' },
  { code: 'KeyI', key: 'ш', enKey: 'i' },
  { code: 'KeyO', key: 'щ', enKey: 'o' },
  { code: 'KeyP', key: 'з', enKey: 'p' },
  {
    code: 'BracketLeft', key: 'х', enKey: '[', shiftEn: '{',
  },
  {
    code: 'BracketRight', key: 'ъ', enKey: ']', shiftEn: '}',
  },
  {
    code: 'Backslash', key: '\\', shift: '/', shiftEn: '|',
  },
  { code: 'Delete', key: 'Delete' },
];

const ROW_3 = [
  { code: 'CapsLock', key: 'CapsLock' },
  { code: 'KeyA', key: 'ф', enKey: 'a' },
  { code: 'KeyS', key: 'ы', enKey: 's' },
  { code: 'KeyD', key: 'в', enKey: 'd' },
  { code: 'KeyF', key: 'а', enKey: 'f' },
  { code: 'KeyG', key: 'п', enKey: 'g' },
  { code: 'KeyH', key: 'р', enKey: 'h' },
  { code: 'KeyJ', key: 'о', enKey: 'j' },
  { code: 'KeyK', key: 'л', enKey: 'k' },
  { code: 'KeyL', key: 'д', enKey: 'l' },
  {
    code: 'Semicolon', key: 'ж', enKey: ';', shiftEn: ':',
  },
  {
    code: 'Quote', key: 'э', enKey: "'", shiftEn: '"',
  },
  { code: 'Enter', key: 'Enter' },
];

const ROW_4 = [
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'я', enKey: 'z' },
  { code: 'KeyX', key: 'ч', enKey: 'x' },
  { code: 'KeyC', key: 'с', enKey: 'c' },
  { code: 'KeyV', key: 'м', enKey: 'v' },
  { code: 'KeyB', key: 'и', enKey: 'b' },
  { code: 'KeyN', key: 'т', enKey: 'n' },
  { code: 'KeyM', key: 'ь', enKey: 'm' },
  {
    code: 'Comma', key: 'б', enKey: ',', shiftEn: '<',
  },
  {
    code: 'Period', key: 'ю', enKey: '.', shiftEn: '>',
  },
  {
    code: 'Slash', key: '/', shift: ',', shiftEn: '?',
  },
  { code: 'ArrowUp', key: '↑' },
  { code: 'ShiftRight', key: 'Shift' },
];

const ROW_5 = [
  { code: 'ControlLeft', key: 'Ctr' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: ' ' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ArrowLeft', key: '←' },
  { code: 'ArrowDown', key: '↓' },
  { code: 'ArrowRight', key: '→' },
  { code: 'ControlRight', key: 'Ctr' },
];

const BUTTONS_PROPERTIES = [].concat(ROW_1, ROW_2, ROW_3, ROW_4, ROW_5);

const [
  KEYBOARD_ROW_1,
  KEYBOARD_ROW_2,
  KEYBOARD_ROW_3,
  KEYBOARD_ROW_4,
  KEYBOARD_ROW_5,
] = [
  new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
  new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
  new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
  new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
  new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
];

ROW_1.forEach((item) => {
  const button = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_1).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'Backspace') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});

ROW_2.forEach((item) => {
  const button = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_2).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'Tab' || item.code === 'Delete') {
    button.classList.add('keyboard__button_special');
  }
  buttons.push(button);
});

ROW_3.forEach((item) => {
  const button = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_3).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'CapsLock' || item.code === 'Enter') {
    button.classList.add('keyboard__button_special');
  }
  buttons.push(button);
});

ROW_4.forEach((item) => {
  const button = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_4).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') {
    button.classList.add('keyboard__button_special');
  }
  buttons.push(button);
});

ROW_5.forEach((item) => {
  const button = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_5).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (
    item.code === 'ControlLeft' || item.code === 'ControlRight' || item.code === 'MetaLeft' || item.code === 'AltLeft' || item.code === 'AltRight'
  ) {
    button.classList.add('keyboard__button_special');
  }
  buttons.push(button);
});

KEYBOARD.addEventListener('click', (event) => {
  TEXTAREA.focus();
  if (event.target.classList.contains('keyboard__button')) {
    if (!event.target.classList.contains('keyboard__button_special')) {
      TEXTAREA.setRangeText(event.target.textContent, TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
    }

    if (event.target.classList.contains('Backspace') && TEXTAREA.selectionStart) {
      TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionStart);
    }

    if (event.target.classList.contains('Delete')) {
      TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionStart + 1);
    }

    if (event.target.classList.contains('Enter')) {
      TEXTAREA.setRangeText('\n', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
    }

    if (event.target.classList.contains('Tab')) {
      TEXTAREA.setRangeText('    ', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
    }

    if (event.target.classList.contains('ControlLeft')) {
      isCtrClicked = true;
    }

    if (event.target.classList.contains('CapsLock')) {
      buttons.forEach((item) => {
        if (!item.classList.contains('keyboard__button_special')) {
          const BUTTON = item;
          if (isLowerCase) {
            BUTTON.textContent = item.textContent.toUpperCase();
          } else {
            BUTTON.textContent = item.textContent.toLowerCase();
          }
        }
      });
      isLowerCase = !isLowerCase;
    }
  }
});

KEYBOARD.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
    buttons.forEach((item) => {
      const BUTTON = item;
      if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'RU') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (item.classList.contains(prop.code) && prop.shift) {
            BUTTON.textContent = prop.shift;
          }
        });
      } else if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'EN') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (item.classList.contains(prop.code) && prop.shiftEn) {
            BUTTON.textContent = prop.shiftEn;
          } else if (item.classList.contains(prop.code) && prop.shift) {
            BUTTON.textContent = prop.shift;
          }
        });
      }
    });

    if (!isShiftClicked) {
      isShiftClicked = true;
      buttons.forEach((item) => {
        if (!item.classList.contains('keyboard__button_special')) {
          const BUTTON = item;
          if (isLowerCase) {
            BUTTON.textContent = item.textContent.toUpperCase();
          } else {
            BUTTON.textContent = item.textContent.toLowerCase();
          }
        }
      });
      isLowerCase = !isLowerCase;
    }
  }
});

KEYBOARD.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
    isShiftClicked = false;
    buttons.forEach((item) => {
      const BUTTON = item;
      if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'RU') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (item.classList.contains(prop.code)) {
            BUTTON.textContent = prop.key;
          }
        });
      } else if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'EN') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          const IS_CONTAIN_CODE = BUTTON.classList.contains(prop.code);
          if (IS_CONTAIN_CODE && prop.shiftEn) {
            BUTTON.textContent = prop.enKey || prop.key;
          }
          if (IS_CONTAIN_CODE && prop.shift) {
            BUTTON.textContent = prop.enKey || prop.key;
          }
        });
      }
    });
    buttons.forEach((item) => {
      if (!item.classList.contains('keyboard__button_special')) {
        const BUTTON = item;
        if (isLowerCase) {
          BUTTON.textContent = item.textContent.toUpperCase();
        } else {
          BUTTON.textContent = item.textContent.toLowerCase();
        }
      }
    });
    isLowerCase = !isLowerCase;
  }
});

document.addEventListener('keydown', (event) => {
  if (document.activeElement !== TEXTAREA) {
    buttons.forEach((item) => {
      if (!item.classList.contains('keyboard__button_special') && item.classList.contains(event.code)) {
        TEXTAREA.setRangeText(item.textContent, TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
      }
    });
  } else {
    event.preventDefault();
    buttons.forEach((item) => {
      if (!item.classList.contains('keyboard__button_special') && item.classList.contains(event.code)) {
        TEXTAREA.setRangeText(item.textContent, TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
      }
    });
  }

  if (event.code === 'Backspace' && TEXTAREA.selectionStart) {
    TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionStart);
  }

  if (event.code === 'Delete') {
    TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionStart + 1);
  }

  if (event.code === 'Enter') {
    TEXTAREA.setRangeText('\n', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
  }

  if (event.code === 'Tab') {
    TEXTAREA.setRangeText('    ', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
  }

  if (event.code === 'ControlLeft') {
    isCtrClicked = true;
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    buttons.forEach((item) => {
      const BUTTON = item;
      if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'RU') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (item.classList.contains(prop.code) && prop.shift) {
            BUTTON.textContent = prop.shift;
          }
        });
      } else if (!item.classList.contains('keyboard__button_special') && currentLanguage === 'EN') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (item.classList.contains(prop.code) && prop.shiftEn) {
            BUTTON.textContent = prop.shiftEn;
          } else if (item.classList.contains(prop.code) && prop.shift) {
            BUTTON.textContent = prop.shift;
          }
        });
      }
    });

    if (!isShiftClicked) {
      isShiftClicked = true;
      buttons.forEach((item) => {
        if (!item.classList.contains('keyboard__button_special')) {
          const BUTTON = item;
          if (isLowerCase) {
            BUTTON.textContent = item.textContent.toUpperCase();
          } else {
            BUTTON.textContent = item.textContent.toLowerCase();
          }
        }
      });
      isLowerCase = !isLowerCase;
    }
  }

  if (event.code === 'AltLeft') {
    isAltLeftClicked = true;
    if (isCtrClicked && isAltLeftClicked && currentLanguage === 'RU') {
      buttons.forEach((item) => {
        const BUTTON = item;
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (BUTTON.textContent.toLowerCase() === prop.key && prop.enKey) {
            BUTTON.textContent = (isLowerCase) ? prop.enKey : prop.enKey.toUpperCase();
          }
        });
      });
      currentLanguage = 'EN';
    } else if (isCtrClicked && isAltLeftClicked && currentLanguage === 'EN') {
      buttons.forEach((item) => {
        const BUTTON = item;
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (BUTTON.textContent.toLowerCase() === prop.enKey) {
            BUTTON.textContent = (isLowerCase) ? prop.key : prop.key.toUpperCase();
          }
        });
      });
      currentLanguage = 'RU';
    }
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }

  if (event.code === 'CapsLock') {
    buttons.forEach((item) => {
      if (!item.classList.contains('keyboard__button_special')) {
        const BUTTON = item;
        if (isLowerCase) {
          BUTTON.textContent = item.textContent.toUpperCase();
        } else {
          BUTTON.textContent = item.textContent.toLowerCase();
        }
      }
    });
    isLowerCase = !isLowerCase;
  }

  buttons.forEach((item) => {
    if (item.classList.contains(event.code)) {
      item.classList.add('active-button');
    }
  });
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftClicked = false;
    buttons.forEach((item) => {
      const BUTTON = item;
      if (!BUTTON.classList.contains('keyboard__button_special') && currentLanguage === 'RU') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          if (BUTTON.classList.contains(prop.code)) {
            BUTTON.textContent = prop.key;
          }
        });
      } else if (!BUTTON.classList.contains('keyboard__button_special') && currentLanguage === 'EN') {
        BUTTONS_PROPERTIES.forEach((prop) => {
          const IS_CONTAIN_CODE = BUTTON.classList.contains(prop.code);
          if (IS_CONTAIN_CODE && prop.shiftEn) {
            BUTTON.textContent = prop.enKey || prop.key;
          }
          if (IS_CONTAIN_CODE && prop.shift) {
            BUTTON.textContent = prop.enKey || prop.key;
          }
        });
      }
    });
    buttons.forEach((item) => {
      if (!item.classList.contains('keyboard__button_special')) {
        const BUTTON = item;
        if (isLowerCase) {
          BUTTON.textContent = item.textContent.toUpperCase();
        } else {
          BUTTON.textContent = item.textContent.toLowerCase();
        }
      }
    });
    isLowerCase = !isLowerCase;
  }

  if (event.code === 'ControlLeft') {
    isCtrClicked = false;
  }
  if (event.code === 'AltLeft') {
    isAltLeftClicked = false;
  }

  buttons.forEach((item) => {
    if (item.classList.contains(event.code)) {
      item.classList.remove('active-button');
    }
  });
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('currentLanguage', currentLanguage);
});
