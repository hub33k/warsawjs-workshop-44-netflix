// Factory pattern

import createDOMElementFromString from '../utils/createDOMElementFromString.js';

export default class VideoFactory {
    static template(_film) {
        return '';
    }

    static create(film) {
        const compiledTemplate = this.template(film);
        return createDOMElementFromString(compiledTemplate);
    }
}
