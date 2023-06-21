import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"






function _drawHouses() {
  const houses = AppState.houses
  let template = ''

  houses.forEach(house => template += house.HouseTemplate)

  setHTML('houseListings', template)
}


export class HousesController {
  constructor() {
    console.log('Home Controller works?')
    _drawHouses()
  }
}