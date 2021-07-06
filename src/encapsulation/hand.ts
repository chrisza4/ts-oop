import { Card } from './card'
import { ComparisonResult, Rank, HandPower } from './handPower'
import PatternMatcher from './utils/patternMatcher'

type StraightResult = {
  straight: boolean
  highs: number[]
}

export class CardFrequency {
  private cardFrequencyMap: { [key: number]: number }
  constructor(cards: Card[]) {
    const cardFrequencyMap = {}
    for (const card of cards) {
      cardFrequencyMap[card.number] = (cardFrequencyMap[card.number] || 0) + 1
    }
    this.cardFrequencyMap = cardFrequencyMap
  }

  cardFrequencySorted(): number[] {
    return Object.values(this.cardFrequencyMap).sort().reverse()
  }

  private getCardValues() {
    return Object.keys(this.cardFrequencyMap).map((a) => parseInt(a))
  }

  cardValueSortedByFrequency(): number[] {
    return this.getCardValues().sort((b, a) => {
      if (this.cardFrequencyMap[a] < this.cardFrequencyMap[b]) return -1
      if (this.cardFrequencyMap[a] > this.cardFrequencyMap[b]) return 1
      if (a < b) return -1
      if (b > a) return 1
      return 0
    })
  }

  isFrequencyMatch(pattern: number[]): boolean {
    return new PatternMatcher(
      this.cardFrequencySorted(),
      pattern
    ).isSamePattern()
  }
}

export class Hand {
  private cards: Card[]

  constructor(cards: Card[]) {
    this.cards = cards
  }

  private isStraight(highs: number[]): StraightResult {
    function isBackwardConsequtive(cardValues: number[]): boolean {
      for (let index = 0; index < cardValues.length - 1; index++) {
        const thisCardValue = cardValues[index]
        const nextCardValue = cardValues[index + 1]
        if (thisCardValue - 1 !== nextCardValue) {
          return false
        }
      }
      return true
    }

    if (highs.length !== 5) {
      return { straight: false, highs }
    }
    if (isBackwardConsequtive(highs)) {
      return { straight: true, highs }
    }
    const highsAceFirst = highs
      .map((h) => (h === 14 ? 1 : h))
      .sort()
      .reverse()
    if (isBackwardConsequtive(highsAceFirst)) {
      return { straight: true, highs: highsAceFirst }
    }
    return { straight: false, highs }
  }

  private isFlush(): boolean {
    return new Set(this.cards.map((c) => c.suits)).size === 1
  }

  public compareWith(anotherHand: Hand): ComparisonResult {
    return this.power().compareWith(anotherHand.power())
  }

  public power(): HandPower {
    const cardFrequency = new CardFrequency(this.cards)
    const initialHighs = cardFrequency.cardValueSortedByFrequency()
    const flush = this.isFlush()
    const { straight, highs } = this.isStraight(initialHighs)

    if (straight && flush) {
      return new HandPower(Rank.StraightFlush, highs)
    }
    if (cardFrequency.isFrequencyMatch([4, 1])) {
      return new HandPower(Rank.FourOfAKind, highs)
    }
    if (cardFrequency.isFrequencyMatch([3, 2])) {
      return new HandPower(Rank.FullHouse, highs)
    }
    if (flush) {
      return new HandPower(Rank.Flush, highs)
    }
    if (straight) {
      return new HandPower(Rank.Straight, highs)
    }
    if (cardFrequency.isFrequencyMatch([3, 1, 1])) {
      return new HandPower(Rank.ThreeOfAKind, highs)
    }
    if (cardFrequency.isFrequencyMatch([2, 2, 1])) {
      return new HandPower(Rank.TwoPairs, highs)
    }
    if (cardFrequency.isFrequencyMatch([2, 1, 1, 1])) {
      return new HandPower(Rank.OnePair, highs)
    }
    if (cardFrequency.isFrequencyMatch([1, 1, 1, 1, 1])) {
      return new HandPower(Rank.Nothing, highs)
    }
    throw Error(
      `Unexpected pattern ${JSON.stringify(
        cardFrequency.cardFrequencySorted(),
        null,
        2
      )}`
    )
  }
}
