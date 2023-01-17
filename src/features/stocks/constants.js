export const MODULE = 'stocks'

// Stock type indices
export const ALPHA_1 = 0 // Alcoa
export const ALPHA_2 = 1 // Bank of NSW
export const ALPHA_3 = 2 // Ampol
export const ALPHA_4 = 3 // BHP
export const OMEGA_4 = 4 // Western Mining
export const OMEGA_3 = 5 // Coles
export const OMEGA_2 = 6 // Consolidated Press
export const OMEGA_1 = 7 // Woolworths

export const MAX_STOCK_TYPES = 8
export const MAX_PRICE_ENTRIES = 51 // an odd number so there is equal number of stock prices on either side
export const STARTING_STOCK_PRICE_INDEX = (MAX_PRICE_ENTRIES + 1) / 2 // start in the middle
