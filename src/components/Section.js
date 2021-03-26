export default class Section {

  constructor({ items ,renderer }, containerSelector ){
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(item){
      this._renderer(item);
  }

  addItem(element){
    this._container.append(element);
  }
  prependItem(element){
    this._container.prepend(element);
  }
}
