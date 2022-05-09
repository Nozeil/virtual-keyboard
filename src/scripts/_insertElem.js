export default class ElementTemplate {
  constructor(name, className, parentElement) {
    this.name = name;
    this.className = className;
    this.parentElement = parentElement;
  }

  createElement() {
    const ELEMENT = document.createElement(this.name);
    ELEMENT.className = this.className;
    return ELEMENT;
  }

  appendElement() {
    const CREATED_ELEMENT = this.createElement();
    this.parentElement.append(CREATED_ELEMENT);
    return CREATED_ELEMENT;
  }

  insertText(text) {
    const ELEMENT = this.appendElement();
    ELEMENT.textContent = text;
    return ELEMENT;
  }
}
