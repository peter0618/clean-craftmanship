import { Queue } from './queue';

describe('큐 테스트', () => {
  let queue: Queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('큐가 생성되어야 합니다.', () => {
    expect(queue).toBeDefined();
  });

  it('큐가 처음 생성되면 아무 데이터도 없어야 합니다.', () => {
    expect(queue.isEmpty()).toEqual(true);
  });

  it('큐에 데이터를 추가하면, 큐는 데이터가 비어있지 않습니다.', () => {
    queue.push(0);
    expect(queue.isEmpty()).toEqual(false);
  });

  it('큐에 데이터를 추가할 수 있으며, 추가되면 size 가 늘어납니다.', () => {
    queue.push(0);
    expect(queue.getSize()).toEqual(1);
    queue.push(1);
    expect(queue.getSize()).toEqual(2);
  });

  it('큐에 추가했던 데이터를 꺼낼 수 있으며, 꺼내면 size 가 줄어듭니다.', () => {
    queue.push(7);
    expect(queue.getSize()).toEqual(1);
    const number = queue.pop();
    expect(number).toEqual(7);
    expect(queue.getSize()).toEqual(0);
  });

  it('큐에 X 와 Y 를 추가하면, 꺼낼 때 X, Y 순으로 꺼낼 수 있습니다.(FIFO)', () => {
    queue.push(3);
    queue.push(9);
    const number1 = queue.pop();
    const number2 = queue.pop();
    expect(number1).toEqual(3);
    expect(number2).toEqual(9);
  });

  it('비어있는 큐에서 데이터를 꺼내려 하면, 에러를 반환합니다.', () => {
    expect(() => queue.pop()).toThrowError('cannot pop when it has no data');
  });

  it('큐에서 꺼낼 데이터를 제거하지 않고도 확인(peek)할 수 있습니다.', () => {
    queue.push(8);
    queue.push(9);
    expect(queue.peek()).toEqual(8);
    expect(queue.getSize()).toEqual(2);
    queue.pop();
    expect(queue.peek()).toEqual(9);
    expect(queue.getSize()).toEqual(1);
  });

  it('비어있는 큐에서 peek 하려 하면, 에러를 반환합니다.', () => {
    expect(() => queue.peek()).toThrowError('cannot peek when it has no data');
  });
});
