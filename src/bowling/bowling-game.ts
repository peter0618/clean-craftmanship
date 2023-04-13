export class BowlingGame {
  // 보너스 점수를 계산하려면 roll 자체를 저장하는 것이 필요해보임.
  private rolls: number[] = [];

  roll(pin: number) {
    this.rolls.push(pin);
  }

  score() {
    let totalScore = 0;

    // 기본 점수 합산
    for (let i = 0; i < this.rolls.length; i++) {
      totalScore += this.rolls[i];
    }

    // spare 보너스 점수 계산
    for (let j = 0; j < this.rolls.length; j += 2) {
      if (this.rolls[j] + this.rolls[j + 1] === 10) {
        // spare 이면
        totalScore += this.rolls[j + 2];
      }
    }

    return totalScore;
  }
}
