import VideoPlayableFactory from './videos/video-playable-factory.js';
import VideoReadonlyFactory from './videos/video-readonly-factory.js';
import VideoPaidFactory from './videos/video-paid-factory.js';

function main() {
    console.log('home page');

    // Generate videos - factory pattern
    const $target = document.querySelector('.video-list-container');

    // TODO (hub33k): move this code to video-generator.js
    Array.from({ length: 3 }).forEach((_, index) => {
        const imageId = index * 10;
        const film = {
            playable: Math.random() > 0.5,
            isPaid: Math.random() > 0.5,
            title: 'Random Title',
            thumb: `https://picsum.photos/id/${imageId}/300/150/`
        };

        // TODO (hub33k): implement strategy pattern
        let $v = null;
        if (film.playable) {
            $v = VideoPlayableFactory.create(film);
        } else if (film.isPaid) {
            $v = VideoPaidFactory.create(film);
        } else {
            $v = VideoReadonlyFactory.create(film);
        }
        $target.append($v);
    });
}

main();
