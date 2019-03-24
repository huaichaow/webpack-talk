const widget = () => {
    const element = document.createElement("div");

    element.innerText = "Hello EPAM!";
    element.style.fontSize = "120px";
    element.style.color = "blue";

    return element;
}

export default widget;
