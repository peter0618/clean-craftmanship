import { BowlingGame } from './bowling-game';

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
    for (let i = 0; i < 20; i++) {
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });

  it('중간 프레임에 spare 가 있는 경우', () => {
    g.roll(3);
    g.roll(7); // spare
    g.roll(5);
    for (let i = 0; i < 17; i++) {
      g.roll(0);
    }
    expect(g.score()).toEqual(20);
  });
});
