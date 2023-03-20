export class Stack {
  size = 0;
  elements: number[] = [];

  push(number: number) {
    this.size++;
    this.elements = [...this.elements, number];
  }

  getSize(): number {
    return this.size;
  }

  pop(): number {
    if (this.size === 0) {
      throw Error('cannot pop when stack size is 0');
    }
    this.size--;
    const lastElement = this.elements[this.size];
    this.elements = this.elements.slice(0, this.size);
    return lastElement;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  peek(): number {
    if (this.size === 0) {
      throw new Error('cannot peek when stack is empty');
    }
    return this.elements[this.size - 1];
  }
}
