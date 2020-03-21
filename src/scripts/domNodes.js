class DomNodes {
    constructor() {
        this.buttons = document.querySelectorAll('.buttons .button');
        this.texts = document.querySelectorAll('[class$="text"]');
        this.titles = document.querySelectorAll('[class$="title"]');
        this.svgs = document.querySelectorAll('svg');
    }
}

export default new DomNodes();