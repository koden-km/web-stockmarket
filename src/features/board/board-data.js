import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../stocks/constants.js'

import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  STOCK_PLUS_ALPHA,
  STOCK_PLUS_OMEGA,
  TILE_TYPE_BROKER_FEE,
  TILE_TYPE_JOB,
  TILE_TYPE_SELL_ALL_STOCK,
  TILE_TYPE_START,
  TILE_TYPE_STOCK_MEETING_ENTRY,
  TILE_TYPE_STOCK_MEETING_MULTIPLIER,
  TILE_TYPE_STOCK_PURCHASE,
} from '../gameplay/constants.js'

let tileIndexGenerator = 0

// TODO(KM):
// - Linking cells could be tricky?
// - These might each need a `type` field so the `Board` component can render them?
//   Unless I do it in reverse where the components are rendered directly?
//   Probably still need something like this object for tracking position index state though?

export const board = [
  // # Jobs
  jobTile(0),
  jobTile(1),
  jobTile(2),
  jobTile(3),

  // # Board Ring
  // Going clockwise and starting top left when board laying with stock ticker
  // sideways Alcoa on left and Woolworths on right. See original game
  // screenshot "board full.jpg".
  // Directions (for arrows) are specified from perspective of tile text when
  // logically rotated to view tiles correct way up.eg. board is logically
  // rotated to view upside down and sideways tiles.

  // ## Top side
  brokerFeeTile(DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 20),
  sellAllStockTypeTile(ALPHA_3, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 5),
  stockTypeTile(OMEGA_4, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 4),
  stockTypeMeetingEntryTile(OMEGA_3, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 3), // Coles
  stockTypeTile(OMEGA_2, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 2),
  stockTypeTile(OMEGA_1, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 1),
  startTile(),
  stockTypeTile(ALPHA_1, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 1),
  stockTypeTile(ALPHA_2, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 2),
  stockTypeMeetingEntryTile(ALPHA_3, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 3), // Ampol
  stockTypeTile(ALPHA_4, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 4),
  sellAllStockTypeTile(OMEGA_3, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 5),

  // ## Right side
  brokerFeeTile(DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 20),
  sellAllStockTypeTile(OMEGA_1, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 5),
  stockTypeTile(ALPHA_2, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 4),
  stockTypeMeetingEntryTile(ALPHA_1, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 3), // Alcoa
  stockTypeTile(ALPHA_4, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 2),
  stockTypeTile(OMEGA_3, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 1),
  startTile(),
  stockTypeTile(ALPHA_3, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 1),
  stockTypeTile(OMEGA_4, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 2),
  stockTypeMeetingEntryTile(OMEGA_1, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 3), // Woolworths
  stockTypeTile(OMEGA_2, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 4),
  sellAllStockTypeTile(ALPHA_1, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 5),

  // ## Bottom side
  brokerFeeTile(DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 20),
  sellAllStockTypeTile(OMEGA_4, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 5),
  stockTypeTile(ALPHA_3, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 4),
  stockTypeMeetingEntryTile(OMEGA_4, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 3), // Western Mining
  stockTypeTile(OMEGA_4, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 2),
  stockTypeTile(OMEGA_2, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 1),
  startTile(),
  stockTypeTile(ALPHA_2, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 1),
  stockTypeTile(ALPHA_4, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 2),
  stockTypeMeetingEntryTile(ALPHA_4, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 3), // BHP
  stockTypeTile(OMEGA_3, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 4),
  sellAllStockTypeTile(OMEGA_4, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 5),

  // ## Left side
  brokerFeeTile(DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 20),
  sellAllStockTypeTile(ALPHA_2, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 5),
  stockTypeTile(OMEGA_1, DIRECTION_RIGHT, STOCK_PLUS_OMEGA * 4),
  stockTypeMeetingEntryTile(OMEGA_2, DIRECTION_RIGHT, STOCK_PLUS_ALPHA * 3), // Consolidated Press
  stockTypeTile(ALPHA_3, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 2),
  stockTypeTile(OMEGA_4, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 1),
  startTile(),
  stockTypeTile(ALPHA_4, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 1),
  stockTypeTile(OMEGA_3, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 2),
  stockTypeMeetingEntryTile(ALPHA_2, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 3), // Bank of NSW
  stockTypeTile(ALPHA_1, DIRECTION_LEFT, STOCK_PLUS_OMEGA * 4),
  sellAllStockTypeTile(OMEGA_2, DIRECTION_LEFT, STOCK_PLUS_ALPHA * 5),

  // # Stockholder Meeting paths

  // ## Top side meetings

  // ### Coles
  stockTypeMeetingMultiplierTile(OMEGA_3, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 1, DIRECTION_LEFT),

  // ### Ampol
  stockTypeMeetingMultiplierTile(OMEGA_3, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_3, 1, DIRECTION_RIGHT),

  // ## Right side meetings

  // ### Alcoa
  stockTypeMeetingMultiplierTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(ALPHA_1, 1, DIRECTION_LEFT),

  // ### Woolworths
  stockTypeMeetingMultiplierTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(OMEGA_1, 1, DIRECTION_RIGHT),

  // ## Bottom side meetings

  // ### Western Mining
  stockTypeMeetingMultiplierTile(OMEGA_4, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_4, 1, DIRECTION_LEFT),

  // ### BHP
  stockTypeMeetingMultiplierTile(ALPHA_4, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_4, 1, DIRECTION_RIGHT),

  // ## Left side meetings

  // ### Consolidated Press
  stockTypeMeetingMultiplierTile(OMEGA_2, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 1, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 3, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingMultiplierTile(OMEGA_2, 1, DIRECTION_LEFT),

  // ### Bank of NSW
  stockTypeMeetingMultiplierTile(ALPHA_2, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 1, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 3, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingMultiplierTile(ALPHA_2, 1, DIRECTION_RIGHT),
]

function jobTile (jobIndex) {
  const tile = newTileData(TILE_TYPE_JOB)
  // tile.hasBranch = true
  tile.jobIndex = jobIndex
  return tile
}

function startTile () {
  // Direction based on roll: odd=left / even=right)
  return newTileData(TILE_TYPE_START)
}

function brokerFeeTile (direction, priceIndexChange) {
  return newTileData(TILE_TYPE_BROKER_FEE, direction, priceIndexChange)
}

function sellAllStockTypeTile (stockType, direction, priceIndexChange) {
  const tile = newTileData(TILE_TYPE_SELL_ALL_STOCK, direction, priceIndexChange)
  tile.stockType = stockType
  return tile
}

function stockTypeTile (stockType, direction, priceIndexChange) {
  const tile = newTileData(TILE_TYPE_STOCK_PURCHASE, direction, priceIndexChange)
  tile.stockType = stockType
  return tile
}

function stockTypeMeetingEntryTile (stockType, direction, priceIndexChange) {
  const tile = newTileData(TILE_TYPE_STOCK_MEETING_ENTRY, direction, priceIndexChange)
  // tile.hasBranch = true
  tile.stockType = stockType
  // tile.stockPurchaseIsLimited = true
  return tile
}

function stockTypeMeetingMultiplierTile (stockType, multiplier, direction) {
  const tile = newTileData(TILE_TYPE_STOCK_MEETING_MULTIPLIER, direction)
  tile.stockType = stockType
  tile.stockMultiplier = multiplier
  return tile
}

function newTileData (tileType, moveDirection = undefined, priceIndexChange = undefined) {
  const tileIndex = tileIndexGenerator++

  const calculateNextTileIndex = (currentMovingDirection = undefined) => {
    if (currentMovingDirection === undefined && moveDirection === undefined) {
      return tileIndex
    }

    const direction = currentMovingDirection ?? moveDirection
    return direction === DIRECTION_LEFT ? tileIndex + 1 : tileIndex - 1
  }

  return {
    // All tile properties
    tileType, // TileType (constant)
    tileIndex,
    calculateNextTileIndex,

    // Common properties
    moveDirection, // DirectionType (constant left/right)
    // hasBranch: false, // bool, true if tile has a branch choice such as stock meeting entry or job
    priceIndexChange, // int, the price index change amount if a stock type tile or broker fee tile

    // Job tile properties
    jobIndex: undefined, // int, a value of 0, 1, 2 or 3 if a job type tile

    // Stock tile properties
    stockMultiplier: undefined, // int, a value of 1, 2 or 3 if a stock meeting multipler tile
    // stockPurchaseIsLimited: false, // bool, true if a stock meeting entry tile
    stockType: undefined, // int, stock type index if a stock type tile
  }
}
