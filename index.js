class Stack {
  #list = [];
  index = 0;
  
  // constructor(){
  //   this.list = [];
  //   this.index = 0;
  // }

  push(animal) {
    this.#list.push(animal);
  }

  pop(){
    if (this.#list.length === 0) return null;
    return this.#list.pop();
  }

  peek(){
    // return this.#list[#list.length - 1];
    return this.#list.at(-1);
  }

  get size(){
    return this.#list.length;
  }

}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.size);
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null


class Queue {
  #list = [];
  index = 0;

  enqueue(item){
    this.#list.push(item);
  }

  dequeue() {
    if(!this.hasNext()) return null;
    this.index++;
    this.#list[this.index - 1];
  }

  hasNext(){
    return !!(this.#list.length - this.index);
  }

  // get size() {
  //   return this.#list.length - this.#index;
  // }
}

[1,2].at(0);
