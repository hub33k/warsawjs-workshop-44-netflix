// Builder pattern

// NOTE (hub33k): Every chained method should return `this`.

export default class DefaultTheme {
    constructor() {
        this.$el = document.createElement('div');
    }

    createControls() {
        // TODO (hub33k): wrap all controls within this div
        const $controls = document.createElement('div');
        $controls.classList.add('controls');

        this.$el.appendChild($controls);

        return this;
    }

    createProgress() {
        const $progress = document.createElement('div');
        const $progressBar = document.createElement('div');

        $progress.classList.add('progress', 'bg-white', 'mb-2');
        $progressBar.classList.add('progress-bar', 'bg-success');
        $progressBar.style.width = '0%';

        $progress.appendChild($progressBar);

        this.$el.appendChild($progress);

        return this;
    }

    addButton(name, label, callback) {
        const $button = document.createElement('button');

        $button.classList.add('btn', 'btn-outline-primary', 'mr-2', name);
        $button.textContent = label;
        $button.addEventListener('click', callback);

        this.$el.appendChild($button);

        return this;
    }

    render(target) {
        target.append(this.$el);

        return this.$el;
    }
}
