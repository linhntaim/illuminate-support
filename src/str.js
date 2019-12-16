class Str {
    constructor() {
        this.studlyCache = {}
    }

    ucWords(str, delimiters = '\\s\\t\\r\\n\\f\\v') {
        return str.replace(new RegExp('(^(.)|[' + delimiters + ']+(.))', 'g'), $1 => $1.toUpperCase())
    }

    studly(value) {
        const key = value

        if (this.studlyCache.hasOwnProperty(key)) {
            return this.studlyCache[key]
        }

        value = this.ucWords(value.replace(/-|_/g, ' '))

        return this.studlyCache[key] = value.replace(/\s+/g, '', value)
    }
}

export default new Str()