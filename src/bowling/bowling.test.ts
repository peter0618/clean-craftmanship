import { BowlingGame } from './bowling-game';

function rollMany(g: BowlingGame, n: number, pin: number) {
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
});
