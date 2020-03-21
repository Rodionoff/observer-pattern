class Colors {
    constructor() {
        this.colors = {
            darkcyan: 'darkcyan',
            midnightblue: 'midnightblue',
            cornflowerblue: 'cornflowerblue'
        }
    }
    
    getColor(color) {
        return this.colors[color] ? this.colors[color] : 'lightpink'
    }
}

export default new Colors();