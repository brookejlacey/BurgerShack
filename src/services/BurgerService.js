import { FakeDb } from "../models/FakeDb.js";

class BurgerService {
    deleteBurger(burgerId) {
        const indexToRemove = FakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (!FakeDb.burgers[indexToRemove]) { throw new Error(`Could not delete, no burger at id: ${burgerId}`) }
        FakeDb.burgers.splice(indexToRemove, 2)
        return `no burger 🍔`
    }

    createBurger(payload) {
        const burger = payload
        burger.id = FakeDb.burgers[FakeDb.burgers.length - 1].id + 1 //just this way for today
        FakeDb.burgers.push(burger)
        return burger
    }

    getBurger() {
        // return 'burgers are delicious'
        const burgers = FakeDb.burgers //usually a request to DB
        return burgers
    }
}


export const burgerService = new BurgerService()