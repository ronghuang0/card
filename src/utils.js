// children is an array of elements
// returns: a DOM element
// should we use flow?
export const makeElement = (type, props, children) => {
  const el = document.createElement(type);
  Object.keys(props).forEach((prop) => {
    if (prop in el) { // making sure it is a valid DOM attribute
      el[prop] = props[prop];
    }
  });
  children.forEach((child) => {
    // do we need type checking?
    el.appendChild(child);
  });
  return el;
};


export const dog = '10';
