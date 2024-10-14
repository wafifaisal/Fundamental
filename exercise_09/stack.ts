class stack{
    #maxsize : number = 0
    #container: number[] = []
    constructor(maxsize:number = 10){
        this.#maxsize = maxsize
    }
    #isFull(){
        return this.#container.length >= this.#maxsize

    }

    #isEmpty(){
        return this.#container.length === 0
    }


    push(element : number){
        if(this.#isFull()){
            console.log("Stack Overflow")
            return
        }
            this.#container.push(element)
        }

    pop(){
        if(this.#isEmpty()){
            console.log("Stack Underflow")
            return
        }
        this.#container.pop()
    }

    getElements(){
        return this.#container
    }

}

const stacking = new stack(2)
stacking.push(1)
stacking.push(2)
stacking.push(3)
console.log(stacking.getElements())

stacking.pop()
console.log(stacking.getElements())
