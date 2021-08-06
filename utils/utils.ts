export const rankings: string[] = ['AA', 'KK', 'QQ', 'AKs', 'JJ', 'AQs', 'KQs', 'AJs', 'KJs', 'TT', 'AKo', 'ATs', 'QJs', 'KTs', 'QTs', 'JTs', '99', 'AQo', 'A9s', 'KQo', '88', 'K9s', 'T9s', 'A8s', 'Q9s', 'J9s', 'AJo', 'A5s', '77', 'A7s', 'KJo', 'A4s', 'A3s', 'A6s', 'QJo', '66', 'K8s', 'T8s', 'A2s', '98s', 'J8s', 'ATo', 'Q8s', 'K7s', 'KTo', '55', 'JTo', '87s', 'QTo', '44', '33', '22', 'K6s', '97s', 'K5s', '76s', 'T7s', 'K4s', 'K3s', 'K2s', 'Q7s', '86s', '65s', 'J7s', '54s', 'Q6s', '75s', '96s', 'Q5s', '64s', 'Q4s', 'Q3s', 'T9o', 'T6s', 'Q2s', 'A9o', '53s', '85s', 'J6s', 'J9o', 'K9o', 'J5s', 'Q9o', '43s', '74s', 'J4s', 'J3s', '95s', 'J2s', '63s', 'A8o', '52s', 'T5s', '84s', 'T4s', 'T3s', '42s', 'T2s', '98o', 'T8o', 'A5o', 'A7o', '73s', 'A4o', '32s', '94s', '93s', 'J8o', 'A3o', '62s', '92s', 'K8o', 'A6o', '87o', 'Q8o', '83s', 'A2o', '82s', '97o', '72s', '76o', 'K7o', '65o', 'T7o', 'K6o', '86o', '54o', 'K5o', 'J7o', '75o', 'Q7o', 'K4o', 'K3o', '96o', 'K2o', '64o', 'Q6o', '53o', '85o', 'T6o', 'Q5o', '43o', 'Q4o', 'Q3o', '74o', 'Q2o', 'J6o', '63o', 'J5o', '95o', '52o', 'J4o', 'J3o', '42o', 'J2o', '84o', 'T5o', 'T4o', '32o', 'T3o', '73o', 'T2o', '62o', '94o', '93o', '92o', '83o', '82o', '72o',
];

export type RankType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K' | 'A';
export type SuitType = 'C' | 'D' | 'H' | 'S';
export type CardType = {rank: RankType, suit: SuitType}

export const deck: CardType[] = [
  {rank: '2', suit: 'C'},
  {rank: '2', suit: 'D'},
  {rank: '2', suit: 'H'},
  {rank: '2', suit: 'S'},
  {rank: '3', suit: 'C'},
  {rank: '3', suit: 'D'},
  {rank: '3', suit: 'H'},
  {rank: '3', suit: 'S'},
  {rank: '4', suit: 'C'},
  {rank: '4', suit: 'D'},
  {rank: '4', suit: 'H'},
  {rank: '4', suit: 'S'},
  {rank: '5', suit: 'C'},
  {rank: '5', suit: 'D'},
  {rank: '5', suit: 'H'},
  {rank: '5', suit: 'S'},
  {rank: '6', suit: 'C'},
  {rank: '6', suit: 'D'},
  {rank: '6', suit: 'H'},
  {rank: '6', suit: 'S'},
  {rank: '7', suit: 'C'},
  {rank: '7', suit: 'D'},
  {rank: '7', suit: 'H'},
  {rank: '7', suit: 'S'},
  {rank: '8', suit: 'C'},
  {rank: '8', suit: 'D'},
  {rank: '8', suit: 'H'},
  {rank: '8', suit: 'S'},
  {rank: '9', suit: 'C'},
  {rank: '9', suit: 'D'},
  {rank: '9', suit: 'H'},
  {rank: '9', suit: 'S'},
  {rank: 'T', suit: 'C'},
  {rank: 'T', suit: 'D'},
  {rank: 'T', suit: 'H'},
  {rank: 'T', suit: 'S'},
  {rank: 'J', suit: 'C'},
  {rank: 'J', suit: 'D'},
  {rank: 'J', suit: 'H'},
  {rank: 'J', suit: 'S'},
  {rank: 'Q', suit: 'C'},
  {rank: 'Q', suit: 'D'},
  {rank: 'Q', suit: 'H'},
  {rank: 'Q', suit: 'S'},
  {rank: 'K', suit: 'C'},
  {rank: 'K', suit: 'D'},
  {rank: 'K', suit: 'H'},
  {rank: 'K', suit: 'S'},
  {rank: 'A', suit: 'C'},
  {rank: 'A', suit: 'D'},
  {rank: 'A', suit: 'H'},
  {rank: 'A', suit: 'S'},
]

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomHand = () => {
  let card1 = deck[getRandomInt(0, 51)];
  let card2 = deck[getRandomInt(0, 51)];
  while (card1 === card2) {
    card1 = deck[getRandomInt(0, 51)];
    card2 = deck[getRandomInt(0, 51)];
  }
  return { card1, card2 };
}

const rankValue = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}

export const convertCardsToHand = (card1: CardType, card2: CardType) => {
  if (card1.rank === card2.rank) {
    return `${card1.rank}${card2.rank}`
  }
  let hand = ''
  if (rankValue[card1.rank] > rankValue[card2.rank]) {
    hand = `${card1.rank}${card2.rank}`
  } else {
    hand = `${card2.rank}${card1.rank}`
  }
  if (card1.suit === card2.suit) {
    hand += 's'
  } else {
    hand += 'o'
  }
  return hand
}

export const getHandRank = (hand: string) => {
  return rankings.indexOf(hand)
}

export const getHandPercentage = (handRank: number) => {
  return Math.round((1 - handRank / 169) * 100);
}