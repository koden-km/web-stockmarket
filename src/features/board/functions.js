import styles from './Board.module.css'

export function stockColorClass (color) {
  return styles[`StockColor${color}`]
}
