import React from 'react'
import Calendar from "react-calendar";
import { CalendarToday as CalendarTodayIcon } from '@material-ui/icons'
import { InputBase, Paper, IconButton, Typography } from '@material-ui/core'
import styled from 'styled-components'

const StyledDateSelector = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SelectTheDate = ({ selectedDate, showCalendar, date, toggleShowCalendar, handleChangeCalendar }) => {
  return (
    <Paper>
      <Typography variant="h5" component="h3">Select the date</Typography>
      <Typography variant="h5" component="div">
        
        <StyledDateSelector>
          <InputBase
            placeholder='Click the calendar icon'
            value={selectedDate}
          />
          <IconButton onClick={toggleShowCalendar}>
            <CalendarTodayIcon/>
          </IconButton>
        </StyledDateSelector>
      </Typography>
      {showCalendar && <Calendar
        onChange={handleChangeCalendar}
        value={date}
      />}
    </Paper>
  )
}

export default SelectTheDate;
