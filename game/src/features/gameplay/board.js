import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../stocks/constants.js'

import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
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
  brokerFeeTile(DIRECTION_RIGHT),
  sellAllStockTypeTile(ALPHA_3, DIRECTION_RIGHT),
  stockTypeTile(OMEGA_4, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(OMEGA_3, DIRECTION_RIGHT), // Coles
  stockTypeTile(OMEGA_2, DIRECTION_LEFT),
  stockTypeTile(OMEGA_1, DIRECTION_LEFT),
  startTile(),
  stockTypeTile(ALPHA_1, DIRECTION_LEFT),
  stockTypeTile(ALPHA_2, DIRECTION_LEFT),
  stockTypeMeetingEntryTile(ALPHA_3, DIRECTION_LEFT), // Ampol
  stockTypeTile(ALPHA_4, DIRECTION_LEFT),
  sellAllStockTypeTile(OMEGA_3, DIRECTION_LEFT),

  // ## Right side
  brokerFeeTile(DIRECTION_RIGHT),
  sellAllStockTypeTile(OMEGA_1, DIRECTION_RIGHT),
  stockTypeTile(ALPHA_2, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(ALPHA_1, DIRECTION_RIGHT), // Alcoa
  stockTypeTile(ALPHA_4, DIRECTION_LEFT),
  stockTypeTile(OMEGA_3, DIRECTION_LEFT),
  startTile(),
  stockTypeTile(ALPHA_3, DIRECTION_LEFT),
  stockTypeTile(OMEGA_4, DIRECTION_LEFT),
  stockTypeMeetingEntryTile(OMEGA_1, DIRECTION_LEFT), // Woolworths
  stockTypeTile(OMEGA_2, DIRECTION_LEFT),
  sellAllStockTypeTile(ALPHA_1, DIRECTION_LEFT),

  // ## Bottom side
  brokerFeeTile(DIRECTION_RIGHT),
  sellAllStockTypeTile(OMEGA_4, DIRECTION_RIGHT),
  stockTypeTile(ALPHA_3, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(OMEGA_4, DIRECTION_RIGHT), // Western Mining
  stockTypeTile(OMEGA_4, DIRECTION_LEFT),
  stockTypeTile(OMEGA_2, DIRECTION_LEFT),
  startTile(),
  stockTypeTile(ALPHA_2, DIRECTION_LEFT),
  stockTypeTile(ALPHA_4, DIRECTION_LEFT),
  stockTypeMeetingEntryTile(ALPHA_4, DIRECTION_LEFT), // BHP
  stockTypeTile(OMEGA_3, DIRECTION_LEFT),
  sellAllStockTypeTile(OMEGA_4, DIRECTION_LEFT),

  // ## Left side
  brokerFeeTile(DIRECTION_RIGHT),
  sellAllStockTypeTile(ALPHA_2, DIRECTION_RIGHT),
  stockTypeTile(OMEGA_1, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(OMEGA_2, DIRECTION_RIGHT), // Consolidated Press
  stockTypeTile(ALPHA_3, DIRECTION_LEFT),
  stockTypeTile(OMEGA_4, DIRECTION_LEFT),
  startTile(),
  stockTypeTile(ALPHA_4, DIRECTION_LEFT),
  stockTypeTile(OMEGA_3, DIRECTION_LEFT),
  stockTypeMeetingEntryTile(ALPHA_2, DIRECTION_LEFT), // Bank of NSW
  stockTypeTile(ALPHA_1, DIRECTION_LEFT),
  sellAllStockTypeTile(OMEGA_2, DIRECTION_LEFT),

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

function brokerFeeTile (direction) {
  return newTileData(TILE_TYPE_BROKER_FEE, direction)
}

function sellAllStockTypeTile (stockType, direction) {
  const tile = newTileData(TILE_TYPE_SELL_ALL_STOCK, direction)
  tile.stockType = stockType
  return tile
}

function stockTypeTile (stockType, direction) {
  const tile = newTileData(TILE_TYPE_STOCK_PURCHASE, direction)
  tile.stockType = stockType
  return tile
}

function stockTypeMeetingEntryTile (stockType, direction) {
  const tile = newTileData(TILE_TYPE_STOCK_MEETING_ENTRY, direction)
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

function newTileData (tileType, tileDirection = undefined) {
  const tileIndex = tileIndexGenerator++

  const calculateNextTileIndex = (currentMovingDirection = undefined) => {
    if (currentMovingDirection === undefined && tileDirection === undefined) {
      return tileIndex
    }

    const direction = currentMovingDirection ?? tileDirection
    return direction === DIRECTION_LEFT ? tileIndex + 1 : tileIndex - 1
  }

  return {
    // All tile properties
    tileType, // TileType (constant)
    tileIndex,
    calculateNextTileIndex,

    // Common properties
    tileDirection, // DirectionType (constant left/right)
    // hasBranch: false, // bool, true if tile has a branch choice such as stock meeting entry or job

    // Job tile properties
    jobIndex: undefined, // int, a value of 0, 1, 2 or 3 if a job type tile

    // Stock tile properties
    stockMultiplier: undefined, // int, a value of 1, 2 or 3 if a stock meeting multipler tile
    // stockPurchaseIsLimited: false, // bool, true if a stock meeting entry tile
    stockType: undefined, // int, stock type index if a stock type tile
  }
}
