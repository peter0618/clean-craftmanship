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
});
