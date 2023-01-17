import {configureStore} from '@reduxjs/toolkit'

import {reducer} from './reducer.js'

// import {defaultGameplay} from '../features/gameplay/gameplay.js'
// import {defaultJobs} from '../features/jobs/jobs.js'
// import {defaultStocks} from '../features/stocks/stocks.js'

// const preloadedState = {
//   gameplay: defaultGameplay,
//   jobs: defaultJobs,
//   stocks: defaultStocks,
//   players: [],
// }

export const store = configureStore({
  reducer,
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: {
    maxAge: 500,
  },
  // preloadedState,
})
