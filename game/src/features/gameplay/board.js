import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../stocks/constants.js'
import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../gameplay/constants.js'

let tileIndex = 0

// TODO(KM):
// - Linking cells could be tricky?
// - These might each need a `type` field so the `Board` component can render them?
//   Unless I do it in reverse where the components are rendered directly?
//   Probably still need something like this object for tracking position index state though?

export const board = [
  // --- Jobs ---
  jobTile(0),
  jobTile(1),
  jobTile(2),
  jobTile(3),

  // --- Board Ring ---
  // Going clockwise and starting top left when board laying with stock ticker
  // sideways Alcoa on left and Woolworths on right. See original game
  // screenshot "board full.jpg".
  // Directions (for arrows) are specified from perspective of tile text when
  // logically rotated to view tiles correct way up.eg. board is logically
  // rotated to view upside down and sideways tiles.

  // Top side
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

  // Right side
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

  // Bottom side
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

  // Left side
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

  // --- Stockholder Meeting paths ---

  // Top side meetings

  // ^ Coles
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_LEFT),

  // ^ Ampol
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_RIGHT),

  // Right side meetings

  // ^ Alcoa
  stockTypeMeetingTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(ALPHA_1, 1, DIRECTION_LEFT),

  // ^ Woolworths
  stockTypeMeetingTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_1, 1, DIRECTION_RIGHT),

  // Bottom side meetings

  // ^ Western Mining
  stockTypeMeetingTile(OMEGA_4, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_4, 1, DIRECTION_LEFT),

  // ^ BHP
  stockTypeMeetingTile(ALPHA_4, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_4, 1, DIRECTION_RIGHT),

  // Left side meetings

  // ^ Consolidated Press
  stockTypeMeetingTile(OMEGA_2, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_2, 1, DIRECTION_LEFT),

  // ^ Bank of NSW
  stockTypeMeetingTile(ALPHA_2, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(ALPHA_2, 1, DIRECTION_RIGHT),
]

function jobTile (jobIndex) {
  return {
    tileIndex: tileIndex++,
    jobIndex,
  }
}

function startTile () {
  return {
    tileIndex: tileIndex++,
    direction: 0, // DirectionType (odd=left/even=right)
  }
}

function brokerFeeTile (direction) {
  return {
    tileIndex: tileIndex++,
    direction, // DirectionType (left/right)
  }
}

function sellAllStockTypeTile (stockType, direction) {
  return {
    tileIndex: tileIndex++,
    stockType,
    direction, // DirectionType (left/right)
  }
}

function stockTypeTile (stockType, direction) {
  return {
    tileIndex: tileIndex++,
    stockType,
    direction, // DirectionType (left/right)
  }
}

function stockTypeMeetingEntryTile (stockType, direction) {
  return {
    tileIndex: tileIndex++,
    stockType,
    limit: 1,
    direction, // DirectionType (left/right)
  }
}

function stockTypeMeetingTile (stockType, multiplier, direction) {
  return {
    tileIndex: tileIndex++,
    stockType, // int, stock type index
    multiplier, // int, a value of 1, 2 or 3
    direction, // DirectionType (left/right)
  }
}
