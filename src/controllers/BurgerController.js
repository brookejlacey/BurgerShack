import BaseController from "../utils/BaseController.js";
import { burgerService } from "../services/BurgerService.js";
import { logger } from "../utils/Logger.js";


export class BurgerController extends BaseController {
    constructor() {
        console.log('🍔 loaded');
        super('api/burgers')
        this.router
            .get('', this.getBurger)
            .get('/test', this.test)
            .get('/meat', this.getBurgerByMeat)
            .post('', this.createBurger)
            .delete('/:burgerId', this.deleteBurger)

        //...
    }
    test(request, response, next) {
        response.send('holy shit it worked')
    }

    getBurger(request, response, next) {
        try {
            const burgers = burgerService.getBurger()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    getBurgerByMeat(request, response, next) {
        try {
            if (request.params.meat == 'turkey') {
                response.send('🦃🍗🦃🍗')
            } else if (request.params.meat == 'beef') {
                response.send('🐄🐄🐄🐄🐄')
            } else {
                throw new Error(`${request.params.meat} is not a valid input`)
            }
        } catch (error) {
            next(error)
        }
    }

    createBurger(request, response, next) {
        try {
            const payload = request.body
            logger.log('request body', payload)
            const burger = burgerService.createBurger(payload)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    deleteBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const message = burgerService.deleteBurger(burgerId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}
