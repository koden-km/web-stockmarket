import {createSlice} from '@reduxjs/toolkit'

import {MODULE} from './constants.js'

const initialState = [
  {
    icon: '⭐️', // ⭐️ 🚓 🚔
    title: 'Police',
    dice1: 5,
    dice2: 9,
    salary: 100,
  },
  {
    icon: '🩺', // 💼 🚑 🩺
    title: 'Doctor',
    dice1: 4,
    dice2: 10,
    salary: 200,
  },
  {
    icon: '🤿', // ⛑️ 🤿
    title: 'Diver', // could use Fireman?
    dice1: 5,
    dice2: 9,
    salary: 300,
  },
  {
    icon: '⛏️', // ⛏️️️️ ⚒️
    title: 'Miner',
    dice1: 5,
    dice2: 9,
    salary: 400,
  },
]

export const jobsSlice = createSlice({
  name: MODULE,
  initialState,
  reducers: {
    rename: (state, action) => {
      const {icon, index, title} = action.payload

      if (index < 0 || index > 3) return

      state[index].icon = icon
      state[index].title = title
    },
  },
})

export const {rename} = jobsSlice.actions

export default jobsSlice.reducer
