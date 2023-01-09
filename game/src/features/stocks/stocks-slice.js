import {createSlice} from '@reduxjs/toolkit'

import {MODULE} from './constants.js'

// NOTE(KM): naming idea... colours as companies? eg. 'Blue Co.', 'Red Inc.', 'Green Way', 'Black and Son', ...

// prices for opposite Alpha/Omega stock are just reversed for same level
const prices = [
  [], // Alpha/Omega 1
  [], // Alpha/Omega 2
  [], // Alpha/Omega 3
  [], // Alpha/Omega 4
]

for (let i = 230; i >= 30; i -= 4) prices[0].push(i)
for (let i = 110; i >= 10; i -= 2) prices[1].push(i)
for (let i = 75; i >= 15; i--) prices[2].push(i)
for (let i = 42; i >= 18; i--) prices[3].push(i, i)

// array<StockState>
const initialState = [
  { // Alpha 1
    color: 'red',
    dividend: 4,
    name: 'Alcoa',
    prices: prices[0],
    basePrice: prices[0][prices[0].length - 1],
  },
  { // Alpha 2
    color: 'yellow',
    dividend: 3,
    name: 'Bank of NSW',
    prices: prices[1],
    basePrice: prices[1][prices[1].length - 1],
  },
  { // Alpha 3
    color: 'orange',
    dividend: 2,
    name: 'Ampol',
    prices: prices[2],
    basePrice: prices[2][prices[2].length - 1],
  },
  { // Alpha 4
    color: 'blue',
    dividend: 1,
    name: 'BHP',
    prices: prices[3],
    basePrice: prices[3][prices[3].length - 1],
  },
  { // Omega 4
    color: 'purple',
    dividend: 1,
    name: 'Western Mining',
    prices: [...prices[3]].reverse(),
    basePrice: prices[3][0],
  },
  { // Omega 3
    color: 'darkgreen',
    dividend: 2,
    name: 'Coles',
    prices: [...prices[2]].reverse(),
    basePrice: prices[2][0],
  },
  { // Omega 2
    color: 'green',
    dividend: 3,
    name: 'Cons. Press',
    prices: [...prices[1]].reverse(),
    basePrice: prices[1][0],
  },
  { // Omega 1
    color: 'brown',
    dividend: 4,
    name: 'Woolworths',
    prices: [...prices[0]].reverse(),
    basePrice: prices[0][0],
  },
]

export const stocksSlice = createSlice({
  name: MODULE,
  initialState,
  reducers: {
    rename: (state, action) => {
      const {color, index, name} = action.payload

      if (index < 0 || index > 8) return

      state[index].name = name
      state[index].color = color
    },
  },
})

export const {rename} = stocksSlice.actions

export default stocksSlice.reducer
