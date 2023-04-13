export class BowlingGame {
  // 보너스 점수를 계산하려면 roll 자체를 저장하는 것이 필요해보임.
  private rolls: number[] = [];

  roll(pin: number) {
    this.rolls.push(pin);
  }

  score() {
    let totalScore = 0;
    totalScore = this.calcBasicScore(totalScore);
    totalScore = this.calcAndAddSpareBonusScore(totalScore);

    return totalScore;
  }

  private calcAndAddSpareBonusScore(totalScore: number) {
    for (let j = 0; j < this.rolls.length; j += 2) {
      if (this.isTheLastFrame(j)) break; // 마지막 프레임에서는 보너스를 계산하지 않고 종료합니다.;
      if (this.isSpare(j)) {
        totalScore += this.rolls[j + 2];
      }
    }
    return totalScore;
  }

  private calcBasicScore(totalScore: number) {
    for (let i = 0; i < this.rolls.length; i++) {
      totalScore += this.rolls[i];
    }
    return totalScore;
  }

  private isTheLastFrame(j: number) {
    return j === 18;
  }

  private isSpare(j: number) {
    return this.rolls[j] + this.rolls[j + 1] === 10;
  }
}
