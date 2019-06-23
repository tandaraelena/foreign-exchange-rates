import React, { useRef } from 'react'
import {
  Select, 
  MenuItem,
  Paper
} from '@material-ui/core'

const SelectTheCurrency = ({ base, currencies, handleCurrencyChange }) => {
  const currencyLabel = useRef(null)
  return (
    <Paper >
      <span style={{ color: "grey", padding: "0 1rem"}}>Select currency</span>
        <Select
          value={base}
          onChange={handleCurrencyChange}
          style={{padding: "0.5rem",borderBottom: "none"}}
        >
          {currencies.map(currency => {
            return (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            )
          })}
        </Select>
    </Paper>
  )
}

export default SelectTheCurrency
