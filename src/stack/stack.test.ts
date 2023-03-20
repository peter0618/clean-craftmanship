import { Stack } from './stack';

describe('Stack Test', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('should be defined', () => {
    expect(stack).toBeDefined();
    expect(stack.getSize()).toEqual(0);
  });

  it('can push an element', () => {
    stack.push(0);
    expect(stack.getSize()).toEqual(1);
  });

  it('can pop an element', () => {
    stack.push(1);
    let pop = stack.pop();
    expect(pop).toEqual(1);
    expect(stack.getSize()).toEqual(0);
  });

  it('can push X and Y, and then pop Y and X', () => {
    stack.push(1);
    stack.push(2);

    let number1 = stack.pop();
    expect(number1).toEqual(2);
    expect(stack.getSize()).toEqual(1);

    let number2 = stack.pop();
    expect(number2).toEqual(1);
    expect(stack.getSize()).toEqual(0);
  });

  it('throws an error if call pop when stack is empty', () => {
    expect(() => stack.pop()).toThrowError('cannot pop when stack size is 0');
  });

  it('is not empty if it has data', () => {
    stack.push(0);
    expect(stack.isEmpty()).toEqual(false);
  });

  it('is empty if it has no data', () => {
    expect(stack.isEmpty()).toEqual(true);
  });

  it('can peek an element if it has data', () => {
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    expect(stack.getSize()).toEqual(1);
  });

  it('throws an error if one peek an element when it has no data', () => {
    expect(() => stack.peek()).toThrowError('cannot peek when stack is empty');
  });
});
