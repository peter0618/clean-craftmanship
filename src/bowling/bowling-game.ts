export class BowlingGame {
  private totalScore = 0;

  roll(number: number) {
    this.totalScore += number;
  }

  score() {
    return this.totalScore;
  }
}
