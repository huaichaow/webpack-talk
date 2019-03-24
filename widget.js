import './common.css';

const widget = () => {
    const element = document.createElement("div");

    element.innerText = "Hello EPAM!";
    element.className = "widget";

    return element;
}

export default widget;
