import {useSelector as useReduxSelector} from 'react-redux'

import {MODULE} from './constants.js'

export const useJob = (index) => useSelector(state => state[index])
export const useJobs = () => useSelector(state => state)

function useSelector (selector) {
  return selector(useReduxSelector(state => state[MODULE]))
}
