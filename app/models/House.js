import { generateId } from "../utils/generateId.js"


export class House {
  constructor(data) {
    this.id = generateId()
    this.img = data.img
    this.price = data.price
    this.sqft = data.sqft
    this.beds = data.beds
    this.baths = data.baths
    this.address = data.address
    this.status = data.status
    this.description = data.description || "This beautiful Home is for sale!"
    this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
  }


  get HouseTemplate() {
    return `
    <div class="col-10 m-auto m-3">
      <section class="row bg-light elevation-5 home-border m-3" style="border-color: ${this.color};">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid listing-img"
            src="${this.img}"
            alt="${this.address} ${this.sqft}">
        </div>
        <div class="col-12 col-md-8 p-3">
          ${this.status}
          <h2>${this.price}</h2>
          <h3>${this.sqft} </h3>
          <h3>${this.beds} ${this.baths}</h3>
          <h2>${this.address}</h2>
          <p>${this.description}</p>
          <h5>${this.listingDate.toLocaleString()}</h5>
          <button onclick="app.HomesController.deleteHouse('${this.id}')" class="btn btn-danger mt-2">Remove House</button>
        </div>
      </section>
    </div>
    `
  }

  get statusBanner() {

    if (this.status) {
      return `
      <div class= text-center p-1">
        <p class="mb-0"> Active </p>
      </div>
      `
    }

    return ''
  }
}