const createElement = (tag, attr) => {
    const elem = document.createElement(tag);
    Object.assign(elem, attr);
    return elem;
};

export default createElement;