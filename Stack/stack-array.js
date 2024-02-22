export default class Stack {
  constructor() {
    this.items = [];
  }

  //Adicionar elemento na pilha
  push(element) {
    this.items.push(element);
  }

  //remove elemento da pilha
  pop() {
    return this.items.pop();
  }

  //verificar o último elemento da pilha
  peek() {
    return this.items[this.items.length - 1];
  }

  //verificar se a pilha está vazia
  //true se for vazio e false se não estiver vazio
  isEmpty() {
    return this.items.length === 0;
  }

  //verificar o tamanho da pilha
  size() {
    return this.items.length;
  }

  //Limpar a pilha
  clear() {
    this.items = [];
  }
}
