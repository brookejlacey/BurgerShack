import BaseController from "../utils/BaseController.js"

export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.meat = data.meat
    }
}



