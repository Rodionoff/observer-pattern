class Colors {
    constructor() {
        this.colors = {
            midnightblue: '#191970',
            darkcyan: '#008b8b',
            cornflowerblue: '#6495ed',
            white: '#ffffff'
        }
        this.colorNames = Object.keys(this.colors)
    }
    
    getColor(color) {
        return this.colors[color] ? this.colors[color] : 'lightpink'
    }

    getColorById(id) {
        return this.colors[this.colorNames[id]]
    }
}

export default new Colors();