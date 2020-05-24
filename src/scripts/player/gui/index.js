import EventEmitter from '../../utils/event-emitter.js';

export default class PlayerGui extends EventEmitter {
    // Builder pattern
    build(Theme, $target) {
        new Theme()
            .createControls()
            .createProgress()
            .addButton('play', 'Play', () => {
                this.triggerEvent('click:play');
            })
            .addButton('stop', 'Stop', () => {
                this.triggerEvent('click:stop');
            })
            .render($target);
    }
}
