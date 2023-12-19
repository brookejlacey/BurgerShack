import BaseController from "../utils/BaseController.js";
import { Burger } from "./Burger.js";


export const FakeDb = {
    burgers: [
        new Burger({
            name: 'Double Double 💕 Stopper',
            price: '99.99',
            id: '3',
            meat: 'turkey',
        })
    ]
}