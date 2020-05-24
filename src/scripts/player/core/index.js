import EventEmitter from '../../utils/event-emitter.js';

export default class PlayerCore extends EventEmitter {
    constructor($video) {
        super();
        this.$video = $video;
    }

    play() {
        this.$video.play();
    }

    stop() {
        this.$video.pause();
        this.$video.currentTime = 0;
    }
}
