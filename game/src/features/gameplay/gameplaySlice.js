import {createSlice} from '@reduxjs/toolkit'

import {MAX_PRICE_ENTRIES, MAX_STOCK_TYPES} from '../stocks/constants.js'
import {MODULE} from './constants.js'


// Turn state machine needs to handle these rules:
// ===============================================
// * SYSTEM (check win condition, eg. time limit or current player has ~$100k in cash+stock)
// * PLAYER (if start/continue working)
//   - player choose Job type (technically all workers are allowed to change any time before dice roll)
// * PLAYER (if start trading. must start if has more than $1k cash on their turn)
//   - player choose Start location
// * PLAYER (if continue trading)
//   - allow player to Sell some stock at current prices
// * PLAYER
//   - roll dice
// * SYSTEM
//   - pay workers if job numbers come up
// * PLAYER (if trading)
//   - choose Move location
// * SYSTEM (if player moved on Buy Stock tile)
//   - move ticker
//   - pay player Dividend
//   - allow player to Buy stock (with potential limit)
// * SYSTEM (if player moved on Sell All Stock tile)
//   - move ticker
//   - pay player minimum share price for all stock shares
//   - take all player shares in stock
// * SYSTEM (if player moved in stock meeting)
//   - give player Shares
// * SYSTEM (if player moved on Broker Fee tile)
//   - set player Fee at $10 per share for all shares
// * SYSTEM (if player moved on Start tile)
//   - set player Fee at $100
// * SYSTEM (if player has Fee to be paid)
//   - while player does not have enough cash, player must sell some stock at lowest price
//   - if player has enough cash, take Fee amount from player cash, else they are bankrupt and must go back to work
// * SYSTEM (end player turn)
//   - reset turn state
//   - set next player turn


// const initPlayerState = {
//   name: 'New Player',
//   cash: 500, // int, normally zero, but 500 speeds up startup without affecting job amounts
//   stocks: [], // array<int>, eg. stocks[stockType] = shareCount
//   boardTileIndex: undefined, // int, includes jobs and shareholder meetings
// }

// const initTurnState = {
//   // mustSellAll: false, // bool
//   hasMoved: false, // bool
//   hasSold: false, // bool
//   hasPurchased: false, // bool
// }

const initialState = {
  currentPlayerIndex: undefined, // int
  currentPriceIndex: undefined,  // int
  players: [], // array<PlayerState>
  turn: undefined, // TurnState
}

export const gameplaySlice = createSlice({
  name: MODULE,
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.players.push(newPlayerState(state.players.length))
    },

    changePlayerName: (state, action) => {
      const {oldName, newName} = action.payload
      const playerToRename = state.players.find(player => player.name === oldName)
      const newNameInUse = state.players.find(player => player.name === newName)

      if (playerToRename && !newNameInUse) playerToRename.name = newName
    },

    startNewGame: (state, action) => {
      const {initialPlayers, startingPriceIndex} = action.payload

      if (initialPlayers.length <= 0) return // the game needs more players (at least 1)

      state.currentPlayerIndex = 0
      state.currentPriceIndex = startingPriceIndex
      state.players = initialPlayers
      state.turn = newTurnState()
    },

    endTurn: (state, action) => {
      const playerCount = state.players.length

      state.currentPlayerIndex++
      if (state.currentPlayerIndex >= playerCount) state.currentPlayerIndex = 0

      state.turn = newTurnState()
    },

    movePlayer: (state, action) => {
      const {newIndex} = action.payload
      const turn = state.turn
      const player = state.players[state.currentPlayerIndex]

      if (turn.hasMoved) return // has already moved this turn

      player.boardTileIndex = newIndex
      turn.hasMoved = true

      // TODO(KM): check and/or set if must sell all?
    },

    sellStock: (state, action) => {
      const {quantity, stock, totalCost} = action.payload
      const turn = state.turn
      const player = state.players[state.currentPlayerIndex]

      if (turn.hasMoved) return // has already moved this turn
      if (player.stocks[stock] < quantity) return // does not have enough stock

      // TODO(KM): check if must sell all?

      player.cash += totalCost
      player.stocks[stock] -= quantity
      turn.hasSold = true
    },

    buyStock: (state, action) => {
      const {quantity, stock, totalCost} = action.payload
      const turn = state.turn
      const player = state.players[state.currentPlayerIndex]

      if (!turn.hasMoved) return // hasn't yet moved this turn
      if (turn.hasPurchased) return // already purchased this turn
      if (player.cash < totalCost) return // insufficient funds

      // TODO(KM): check tile purchase limit?
      // TODO(KM): check if a purchase tile?

      player.cash -= totalCost
      player.stocks[stock] += quantity
      turn.hasPurchased = true
    },

    changeStockPriceIndex: (state, action) => {
      const {changeAmount} = action.payload

      state.currentPriceIndex = calculateNextPriceIndex(state.currentPriceIndex, changeAmount)
    },
  },
})

export const {
  addPlayer,
  buyStock,
  changePlayerName,
  endTurn,
  movePlayer,
  sellStock,
  startNewGame,
} = gameplaySlice.actions

export default gameplaySlice.reducer

function newPlayerState (playerCount) {
  return {
    name: `Player ${playerCount + 1}`, // string
    cash: 500, // int, normally zero, but 500 speeds up startup without affecting job amounts
    stocks: Array(MAX_STOCK_TYPES).fill(0), // array<int>, eg. stocks[stockType] = shareCount
    boardTileIndex: 0, // int, includes jobs and shareholder meetings
  }
}

function newTurnState () {
  return {
    hasMoved: false, // bool
    hasPurchased: false, // bool
    hasSold: false, // bool
    // mustSellAll: false, // bool  // I think this is handled in view logic side?
  }
}

function calculateNextPriceIndex (currentPriceIndex, changeAmount) {
  const maxIndex = MAX_PRICE_ENTRIES - 1 // one less than max becuase index is zero based
  const newIndex = currentPriceIndex + changeAmount

  // Handle bouncing off end and reversing the remaining count
  if (newIndex < 0) return Math.abs(newIndex)
  if (newIndex >= maxIndex) return maxIndex - (newIndex - maxIndex)

  return newIndex
}
