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

// TODO(KM):
// - Need to setup styling and grid layout areas?
// - Idea: Try build a horizontal board that just kind of scrolls infinitely
//   left/right as if there are no corners to turn...

export default function Board () {
  return <div className={styles.Board}>
    <StockTicker />

    {board.map(tile => {
      const {tileType, tileIndex} = tile

      switch (tileType) {
        case TILE_TYPE_JOB: {
          return <Job key={tileIndex} jobIndex={tile.jobIndex} />
        }

        case TILE_TYPE_BROKER_FEE: {
          const {moveDirection, priceIndexChange} = tile
          return <BrokerFee key={tileIndex} moveDirection={moveDirection} priceIndexChange={priceIndexChange} />
        }

        case TILE_TYPE_START: {
          return <Start key={tileIndex} />
        }

        case TILE_TYPE_SELL_ALL_STOCK: {
          const {moveDirection, priceIndexChange, stockType} = tile
          return <SellAllStock
            key={tileIndex}
            moveDirection={moveDirection}
            priceIndexChange={priceIndexChange}
            stockType={stockType}
          />
        }

        case TILE_TYPE_STOCK_PURCHASE: {
          const {moveDirection, priceIndexChange, stockType} = tile
          return <StockOption
            key={tileIndex}
            moveDirection={moveDirection}
            priceIndexChange={priceIndexChange}
            stockType={stockType}
          />
        }

        case TILE_TYPE_STOCK_MEETING_ENTRY: {
          const {moveDirection, priceIndexChange, stockType} = tile
          return <StockOption
            key={tileIndex}
            moveDirection={moveDirection}
            priceIndexChange={priceIndexChange}
            stockType={stockType}
            isMeetingEntry={true}
          />
        }

        case TILE_TYPE_STOCK_MEETING_MULTIPLIER: {
          const {stockMultiplier} = tile
          return <StockMeeting key={tileIndex} multiplier={stockMultiplier} />
        }

        default: return null
      }
    })}
  </div>
}
