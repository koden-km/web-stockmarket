import React from 'react'

import {
  TILE_TYPE_BROKER_FEE,
  TILE_TYPE_JOB,
  TILE_TYPE_SELL_ALL_STOCK,
  TILE_TYPE_START,
  TILE_TYPE_STOCK_MEETING_ENTRY,
  TILE_TYPE_STOCK_MEETING_MULTIPLIER,
  TILE_TYPE_STOCK_PURCHASE,
} from '../gameplay/constants.js'

import Job from './internal/jobs/Job.js'
import BrokerFee from './internal/tiles/BrokerFee.js'
import SellAllStock from './internal/tiles/SellAllStock.js'
import Start from './internal/tiles/Start.js'
import StockMeeting from './internal/tiles/StockMeeting.js'
import StockOption from './internal/tiles/StockOption.js'
import StockTicker from './internal/stock-ticker/StockTicker.js'
import styles from './Board.module.css'
import {board} from './board-data.js'

export default function Board () {
  return <div className={styles.Board}>
    <StockTicker />

    {board.map(tile => {
      const {tileType, tileIndex} = tile

      switch (tileType) {
        case TILE_TYPE_JOB: return <Job key={tileIndex} tile={tile} />
        case TILE_TYPE_BROKER_FEE: return <BrokerFee key={tileIndex} tile={tile} />
        case TILE_TYPE_START: return <Start key={tileIndex} tile={tile} />
        case TILE_TYPE_SELL_ALL_STOCK: return <SellAllStock key={tileIndex} tile={tile} />
        case TILE_TYPE_STOCK_PURCHASE: return <StockOption key={tileIndex} tile={tile} />
        case TILE_TYPE_STOCK_MEETING_ENTRY: return <StockOption key={tileIndex} isMeetingEntry={true} tile={tile} />
        case TILE_TYPE_STOCK_MEETING_MULTIPLIER: return <StockMeeting key={tileIndex} tile={tile} />
        default: return null
      }
    })}
  </div>
}
