import Str from './str'

export default class Manager {
    constructor(app) {
        this.app = app
        this.customCreators = {}
        this.drivers = {}
    }

    getDefaultDriver() {
        return null
    }

    driver(driver = null) {
        driver = driver ? driver : this.getDefaultDriver()

        if (!driver) {
            return null
        }

        if (!(driver in this.drivers)) {
            this.drivers[driver] = this.createDriver(driver)
        }

        return this.drivers[driver]
    }

    createDriver(driver) {
        if (driver in this.customCreators) {
            return this.callCustomCreator(driver)
        }
        else {
            const method = 'create' + Str.studly(driver) + 'Driver'

            if (this[method]) {
                return this[method]()
            }
        }
        return null
    }

    callCustomCreator(driver) {
        return this.customCreators[driver](this.app)
    }

    extend(driver, callback) {
        this.customCreators[driver] = callback
        return this
    }

    getDrivers() {
        return this.drivers
    }

    __call(method, ...params) {
        const driver = this.driver()
        return driver && method in driver ? driver[method](...params) : null
    }
}