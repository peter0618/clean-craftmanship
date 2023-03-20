export class Queue {
  size = 0;
  data: number[] = [];

  isEmpty(): boolean {
    return this.size === 0;
  }

  push(number: number) {
    this.size++;
    this.data = [...this.data, number];
  }

  getSize(): number {
    return this.size;
  }

  pop(): number {
    if (this.size === 0) {
      throw new Error('cannot pop when it has no data');
    }
    this.size--;
    const [theFirstOne, ...rest] = this.data;
    this.data = [...rest];
    return theFirstOne;
  }

  peek() {
    if (this.size === 0) {
      throw new Error('cannot peek when it has no data');
    }
    return this.data[0];
  }
}
