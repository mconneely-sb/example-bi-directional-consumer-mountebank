export class Product {
  constructor({name, type}) {
    if (!name || !type) {
      throw Error("name and type are required properties")
    }
    this.name = name
    this.type = type
  }
}
