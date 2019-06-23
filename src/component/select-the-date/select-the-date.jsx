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
        <StyledDateSelector>
          <InputBase
            style={{paddingLeft:"0.6rem"}}
            placeholder='Select the date'
            value={selectedDate}
          />
          <IconButton onClick={toggleShowCalendar}>
            <CalendarTodayIcon/>
          </IconButton>
        </StyledDateSelector>
      {showCalendar && <Calendar
        onChange={handleChangeCalendar}
        value={date}
      />}
    </Paper>
  )
}

export default SelectTheDate;
