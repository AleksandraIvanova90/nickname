
export default class Validator {
    constructor (name) {
        this.name = name;
    }
    validateUsername () {
        return (/^[a-zA-Z]+[a-zA-Z0-9_-]*[a-zA-Z]+$/.test(this.name) && !(/\d{4,}/.test(this.name)));

    }
}