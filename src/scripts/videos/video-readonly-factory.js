// Factory pattern

import VideoFactory from './video-factory.js';

// Videos that can not be playable (without link).
export default class VideoReadonlyFactory extends VideoFactory {
    static template({ thumb, title }) {
        return `
            <div class="card mb-3">
                <img
                    src="${thumb}"
                    class="card-img-top"
                    alt=""
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${title}
                    </h5>
                </div>
            </div>
            `;
    }
}
