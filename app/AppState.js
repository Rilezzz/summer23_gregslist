import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Car.js').Car[]} */
  cars = loadState('cars', [Car])


  houses = [new House({ img: "https://photos.zillowstatic.com/fp/ef65680242ed3a732c384c99eb6bc891-cc_ft_1536.webp", price: "$450,000", sqft: "3,876 sqft", beds: "Beds: 2", baths: "Baths: 2", address: "1234 West Subdivision St. Meridian, ID 83646", status: "active", description: '' })]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
