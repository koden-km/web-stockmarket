import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../stocks/constants.js'
import boardStyles from './Board.module.css'
import colorStyles from './Color.module.css'

export function jobTileClass (jobIndex) {
  return boardStyles[`Job${jobIndex}`]
}

export function meetingTileClass (tileIndex, stockType) {
  // Order below matches board anti-clockwise tile index order. Each offset is
  // by 9 tiles (number of meetings per stock).
  switch (stockType) {
    case OMEGA_1: return boardStyles[`MeetB${61 - tileIndex}`]
    case ALPHA_1: return boardStyles[`MeetB${70 - tileIndex}`]

    case ALPHA_3: return boardStyles[`MeetR${79 - tileIndex}`]
    case OMEGA_3: return boardStyles[`MeetR${88 - tileIndex}`]

    case ALPHA_2: return boardStyles[`MeetT${97 - tileIndex}`]
    case OMEGA_2: return boardStyles[`MeetT${106 - tileIndex}`]

    case ALPHA_4: return boardStyles[`MeetL${115 - tileIndex}`]
    case OMEGA_4: return boardStyles[`MeetL${124 - tileIndex}`]

    default: return undefined
  }
}

export function edgeTileClass (tileIndex) {
  return boardStyles[`Edge${tileIndex}`]
}

export function stockColorClass (color) {
  return colorStyles[`StockColor${color}`]
}
