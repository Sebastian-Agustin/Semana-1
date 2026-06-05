//What are classes?
//Well, classes are constructor functions in js
//javascript used to be a language that is not taken seriously
//Since in other languages it was a little more rustic to program
//That's why 2016 javascript launched a way to write object-oriented code
//that's the class function. Classes are the Mas functions, or a kind of template or mold
//used to create multiple objects with the same properties (data)


class Products {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    
    formatProduct() {
        return `el producto ${this.name} tiene un valor de ${this.price}`
    }
    cambiarPrecio(nuevoPrecio){
        this.price = nuevoPrecio
    }
    changeName(newName){
        this.name = newName
    }

    sumIva(){
        this.price = 1.21 * this.price
    }

}