class Colors {
    constructor() {
        this.colors = {
            darkcyan: 'darkcyan',
            midnightblue: 'midnightblue',
            cornflowerblue: 'cornflowerblue'
        }
        this.colorNames = Object.keys(this.colors)
    }
    
    getColor(color) {
        return this.colors[color] ? this.colors[color] : 'lightpink'
    }

    getRandomColor() {
        const index = parseInt(Math.random() * this.colorNames.length);
        const randomName = this.colorNames[index];
        return this.colors[randomName]
    }
}

export default new Colors();