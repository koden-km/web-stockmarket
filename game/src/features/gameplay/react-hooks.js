import {useSelector as useReduxSelector} from 'react-redux'

import {MODULE} from './constants.js'

export const useHasGameStarted = () => useSelector(state => state.currentPlayerIndex !== undefined)
export const useCurrentPlayerIndex = () => useSelector(state => state.currentPlayerIndex)
export const useCurrentPriceIndex = () => useSelector(state => state.currentPriceIndex)

function useSelector (selector) {
  return selector(useReduxSelector(state => state[MODULE]))
}
