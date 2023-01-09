import React from 'react'
// import {useDispatch} from 'react-redux'

// import {buyStock} from '../gameplay/gameplay-slice.js'
// import {useCurrentPriceIndex} from '../gameplay/react-hooks.js'
import styles from './UI.module.css'

export default function Purchase (props) {
  // NOTE(KM): props or selector to get data?
  const {currentPriceIndex, limit, stock} = props
  // const currentPriceIndex = useSelector((state) => state.gameplay.currentPriceIndex)
  // const dispatch = useDispatch()

  const handleBuy = useCallback(() => {
    // TODO(KM): get form data to send in action...
    // dispatch(buyStock({quantity, stock, totalCost}))
  }, [])

  return <div className={styles.Purchase}>
    <h2>Buy</h2>
    <div>
      <input type='number' min='1' max={limit} step='1' value='1' required /><span class='validity' />
      <span className={styles.BuyStockName}>{stock.name}</span>
      at <span className={styles.BuyStockCostPerShare}>${stock.prices[currentPriceIndex]}</span> (per share)
    </div>
    <div>
      Total
    </div>
    <button aria-label='Buy' onClick={handleBuy}>Buy</button>
  </div>
}
