import React, { useRef } from 'react'
import {
  FormControl, 
  Select, 
  InputLabel, 
  OutlinedInput, 
  MenuItem,
  Paper,
  Typography,
} from '@material-ui/core'

const SelectTheCurrency = ({ base, currencies, handleCurrencyChange }) => {
  const currencyLabel = useRef(null)
  return (
    <Paper>
      <Typography variant="h5" component="h3">Select the currency</Typography>
      <Typography component="div">
        <Select
          value={base}
          onChange={handleCurrencyChange}
          input={<OutlinedInput name="" id="currency"/>}
        >
          {currencies.map(currency => {
            return (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            )
          })}
        </Select>

      </Typography>
    </Paper>
  )
}

export default SelectTheCurrency
