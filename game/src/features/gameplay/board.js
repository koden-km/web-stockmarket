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
  // (starting top left when board laying with stock ticker sideways Alcoa on left and Woolworths on right)

  // Top side
  brokerFeeTile(DIRECTION_LEFT),
  sellAllStockTypeTile(ALPHA_3, DIRECTION_LEFT),
  stockTypeTile(OMEGA_4, DIRECTION_LEFT),
  stockTypeMeetingEntryTile(OMEGA_3, DIRECTION_LEFT), // Coles
  stockTypeTile(OMEGA_2, DIRECTION_RIGHT),
  stockTypeTile(OMEGA_1, DIRECTION_RIGHT),
  startTile(),
  stockTypeTile(ALPHA_1, DIRECTION_RIGHT),
  stockTypeTile(ALPHA_2, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(ALPHA_3, DIRECTION_RIGHT), // Ampol
  stockTypeTile(ALPHA_4, DIRECTION_RIGHT),
  sellAllStockTypeTile(OMEGA_3, DIRECTION_RIGHT),

  // Right side
  brokerFeeTile(DIRECTION_RIGHT),
  sellAllStockTypeTile(OMEGA_1, DIRECTION_RIGHT),
  stockTypeTile(ALPHA_2, DIRECTION_RIGHT),
  stockTypeMeetingEntryTile(ALPHA_1, DIRECTION_RIGHT), // Alcoa
  // TODO(KM): fill this in...

  // Bottom side
  // TODO(KM): fill this in...

  // Left side
  // TODO(KM): fill this in...

  // --- Stockholder Meeting paths ---

  // Top side

  // ^ Coles
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_RIGHT),
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_RIGHT),

  // ^ Ampol
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 3, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 2, DIRECTION_LEFT),
  stockTypeMeetingTile(OMEGA_3, 1, DIRECTION_LEFT),

  // TODO(KM): fill these in
  // ^ Alcoa
  // ^ Woolworths
  // ^ Western Mining
  // ^ BHP
  // ^ Consolidated Press
  // ^ Bank of NSW
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
