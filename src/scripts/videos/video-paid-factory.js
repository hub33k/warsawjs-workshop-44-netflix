// Factory pattern

import VideoFactory from './video-factory.js';

export default class VideoPaidFactory extends VideoFactory {
    static template({ thumb, title }) {
        return `
            <div class="card mb-3">
                <a href="film.html">
                    <img
                        src="${thumb}"
                        class="card-img-top"
                        alt=""
                    />
                </a>
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="film.html">
                            [PAID] ${title}
                        </a>
                    </h5>
                </div>
            </div>
            `;
    }
}
