import ElementTemplate from './_insertElem';

const WRAPPER = new ElementTemplate('div', 'wrapper', document.body).appendElement();
const MAIN = new ElementTemplate('main', 'main', WRAPPER).appendElement();
const SECTION = new ElementTemplate('section', 'section', MAIN).appendElement();
new ElementTemplate('h1', 'section__title', SECTION).insertText('Virtual keyboard');
const FORM = new ElementTemplate('form', 'section__form form', SECTION).appendElement();
const TEXTAREA = new ElementTemplate('textarea', 'form__textarea', FORM).appendElement();
new ElementTemplate('p', 'section__info', SECTION).insertText('OS Windows. Switch language buttons: Win + space.');
const KEYBOARD = new ElementTemplate('div', 'section__keyboard keyboard', SECTION).appendElement();

let buttons = [];
let isLowerCase = true;

const ROW_1 = [
	{ code: 'Backquote', key: 'ё', enKey: '`' },
	{ code: 'Digit1', key: '1', shift: '!' },
	{ code: 'Digit2', key: '2', shift: '"', shiftEn: '@' },
	{ code: 'Digit3', key: '3', shift: '№', shiftEn: '#' },
	{ code: 'Digit4', key: '4', shift: ';', shiftEn: '$' },
	{ code: 'Digit5', key: '5', shift: '%', shiftEn: '%' },
	{ code: 'Digit6', key: '6', shift: ':', shiftEn: '^' },
	{ code: 'Digit7', key: '7', shift: '?', shiftEn: '&' },
	{ code: 'Digit8', key: '8', shift: '*' },
	{ code: 'Digit9', key: '9', shift: '(' },
	{ code: 'Digit0', key: '0', shift: ')' },
	{ code: 'Minus', key: '-', shift: '_' },
	{ code: 'Equal', key: '=', shift: '+' },
	{ code: 'Backspace', key: 'Backspace' }
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
	{ code: 'BracketLeft', key: 'х', enKey: '[', shiftEn: '{' },
	{ code: 'BracketRight', key: 'ъ', enKey: ']', shiftEn: '}' },
	{ code: 'Backslash', key: '\\', shift: '/', shiftEn: '|' },
	{ code: 'Delete', key: 'Delete' }
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
	{ code: 'Semicolon', key: 'ж', enKey: ';', shiftEn: ':' },
	{ code: 'Quote', key: 'э', enKey: "'", shiftEn: '"' },
	{ code: 'Enter', key: 'Enter' }
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
	{ code: 'Comma', key: 'б', enKey: ',', shiftEn: '<' },
	{ code: 'Period', key: 'ю', enKey: '.', shiftEn: '>' },
	{ code: 'Slash', key: '/', shift: ',', shiftEn: '?' },
	{ code: 'ArrowUp', key: '↑' },
	{ code: 'ShiftRight', key: 'Shift' }
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
	{ code: 'ControlRight', key: 'Ctr' }
];

const [
	KEYBOARD_ROW_1,
	KEYBOARD_ROW_2,
	KEYBOARD_ROW_3,
	KEYBOARD_ROW_4,
	KEYBOARD_ROW_5
] = [
		new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
		new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
		new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
		new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement(),
		new ElementTemplate('div', 'keyboard__row', KEYBOARD).appendElement()
	];


ROW_1.forEach(item => {
	const BUTTON = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_1).insertText(item.key);
	if (item.code === 'Backspace') {
		BUTTON.classList.add('keyboard__button_special');
	}
	buttons.push(BUTTON);
});

ROW_2.forEach(item => {
	const BUTTON = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_2).insertText(item.key);
	if (item.code === 'Tab' || item.code === 'Delete') {
		BUTTON.classList.add('keyboard__button_special');
	}
	buttons.push(BUTTON);
});

ROW_3.forEach(item => {
	const BUTTON = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_3).insertText(item.key);
	if (item.code === 'CapsLock' || item.code === 'Enter') {
		BUTTON.classList.add('keyboard__button_special');
	}
	buttons.push(BUTTON);
});

ROW_4.forEach(item => {
	const BUTTON = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_4).insertText(item.key);
	if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') {
		BUTTON.classList.add('keyboard__button_special');
	}
	buttons.push(BUTTON);
});

ROW_5.forEach(item => {
	const BUTTON = new ElementTemplate('button', `keyboard__button ${item.code}`, KEYBOARD_ROW_5).insertText(item.key);
	if (item.code === 'ControlLeft' || item.code === 'ControlRight' || item.code === 'MetaLeft' || item.code === 'AltLeft' || item.code === 'AltRight') {
		BUTTON.classList.add('keyboard__button_special');
	}
	buttons.push(BUTTON);
});

document.addEventListener('keydown', (event) => {

	if (event.code === 'CapsLock') {
		buttons.forEach(item => {
			if (!item.classList.contains('keyboard__button_special')) {
				item.textContent = (isLowerCase) ? item.textContent.toUpperCase() : item.textContent.toLowerCase();
			}
		});
		isLowerCase = !isLowerCase;
	}

	buttons.forEach(item => {
		if (item.classList.contains(event.code)) {
			item.classList.add('active-button');
		}
	});
	
});

document.addEventListener('keyup', (event) => {
	buttons.forEach(item => {
		if (item.classList.contains(event.code)) {
			item.classList.remove('active-button');
		}
	});
});