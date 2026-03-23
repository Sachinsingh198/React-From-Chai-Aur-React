function customRender(reactElement, container){
    /* const domElement = document.createElement((reactElement.type))
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
     */

    const domElements = document.createElement(reactElement.type)
    domElements.innerHTML = reactElement.children

    for (const prop in reactElement.props){
        if(prop == "children") continue;
        domElements.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElements)
}


const reactElement = {
    type: "a",
    props : {
        href : "https://google.com",
        target: "_blank",
    },
    children : "Click me to visit google",

}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)