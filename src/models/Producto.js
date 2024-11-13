import { v4 as uuid4 } from 'uuid';


class Product {
    #id
    #name
    #description
    #price
    #stock
    #visible

    constructor(name, description, price, stock) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#stock = stock;

    }
}