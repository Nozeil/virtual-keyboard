export default class ElementTemplate {
	constructor(name, className, parentElement) {
		this.name = name;
		this.className = className;
		this.parentElement = parentElement;
	}

	createElement(name, className) {
		const ELEMENT = document.createElement(name);
		ELEMENT.className = className;
		return ELEMENT;
	}

	appendElement() {
		const CREATED_ELEMENT = this.createElement(this.name, this.className);
		this.parentElement.append(CREATED_ELEMENT);
		return CREATED_ELEMENT;
	}

	insertText(text) {
		const ELEMENT = this.appendElement();
		ELEMENT.textContent = text;
		return ELEMENT;
	}
}