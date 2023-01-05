import {useSelector as useReduxSelector} from 'react-redux'

import {MODULE} from './constants.js'

export const useStock = (index) => useSelector(state => state[index])
export const useStocks = () => useSelector(state => state)

function useSelector (selector) {
  return selector(useReduxSelector(state => state[MODULE]))
}
