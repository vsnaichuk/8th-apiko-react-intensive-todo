class React {

  createElement = (el, props = {}, children = []) => {
    const anElement = document.createElement(el);

    Array.isArray(children)
      ? children.forEach(child => this._appendTo(anElement, props, child))
      : this._appendTo(anElement, props, children);

    return anElement;
  }

  render = (el, container) => {
    container.appendChild(el);
  }

  _appendTo = (el, props, child) => {
    typeof child !== "object"
      ? el.innerHTML += child
      : el.appendChild(child);

    if (props) {
      this._setAttributes(el, props)
    }
  }

  _setAttributes = (el, attr) => {
    Object.keys(attr)
      .forEach(name => {
        if(typeof attr[name] === "object") {

          Object.keys(attr[name])
            .forEach(deepAttr => {
              el[name][deepAttr] = attr[name][deepAttr]
            })

        } else {
          el[name] = attr[name];
        }
      })
  }
}

export default new React();
