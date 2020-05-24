// Converts String to DOM element
export default function createDOMElementFromString(template) {
    return new DOMParser()
        .parseFromString(template, 'text/html')
        .body.firstElementChild;
}
