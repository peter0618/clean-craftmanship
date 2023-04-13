import { BowlingGame } from './bowling-game';

function rollMany(g: BowlingGame, n: number, pin: number): void {
  for (let i = 0; i < n; i++) {
    g.roll(pin);
  }
}

describe('bowling test', () => {
  let g: BowlingGame;

  beforeEach(() => {
    g = new BowlingGame();
  });

  it('has to be defined', () => {
    expect(g).toBeDefined();
  });

  it('can roll', () => {
    g.roll(0);
  });

  it('gutter game 의 결과 점수는 0 입니다.', () => {
    rollMany(g, 20, 0);
    expect(g.score()).toEqual(0);
  });

  it('중간 프레임에 spare 가 있는 경우', () => {
    g.roll(3);
    g.roll(7); // spare
    g.roll(5);
    rollMany(g, 17, 0);
    expect(g.score()).toEqual(20);
  });

  it('마지막 프레임에 spare 가 있는 경우', () => {
    rollMany(g, 18, 0);
    g.roll(3);
    g.roll(7); // spare
    g.roll(5);
    expect(g.score()).toEqual(15);
  });

  it('perfect game', () => {
    rollMany(g, 12, 10);
    expect(g.score()).toEqual(300);
  });

  it('strike with no bonus', () => {
    g.roll(10);
    rollMany(g, 18, 0);
    expect(g.score()).toEqual(10);
  });

  it('mixed case1', () => {
    // frame1
    g.roll(1);
    g.roll(4);

    // frame2
    g.roll(4);
    g.roll(5);

    // frame3
    g.roll(6);
    g.roll(4);

    // frame4
    g.roll(5);
    g.roll(5);

    // frame5
    g.roll(10);

    // frame6
    g.roll(0);
    g.roll(1);

    // frame7
    g.roll(7);
    g.roll(3);

    // frame8
    g.roll(6);
    g.roll(4);

    // frame9
    g.roll(10);

    // frame10
    g.roll(2);
    g.roll(8);
    g.roll(6);

    expect(g.score()).toEqual(133);
  });

  it('mixed case2', () => {
    // 참고: https://tootock.tistory.com/5

    // frame1
    g.roll(10);

    // frame2
    g.roll(10);

    // frame3
    g.roll(10);

    // frame4
    g.roll(7);
    g.roll(2);

    // frame5
    g.roll(8);
    g.roll(2);

    // frame6
    g.roll(0);
    g.roll(9);

    // frame7
    g.roll(10);

    // frame8
    g.roll(7);
    g.roll(3);

    // frame9
    g.roll(9);
    g.roll(0);

    // frame10
    g.roll(10);
    g.roll(10);
    g.roll(8);

    expect(g.score()).toEqual(180);
  });
});
