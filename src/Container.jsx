import React, { Component } from "react";
import axios from 'axios';
import SelectTheDate from "./component/select-the-date";
import SelectTheCurrency from "./component/select-the-currency";
import styled from "styled-components"

const StyledSelectedCurrency = styled.div`
  grid-column: 2/3;
`;

const StyledCurrencyRate = styled.div`
  grid-column: 3/4;
`;

export default class Container extends Component {
  state = {
    data: {},
    currencies: ["EUR", "USD", "GBP", "CAD", "AUD"],
    base: "USD",
    displayedCurrencies: [
      "Euro",
      "US Dollar",
      "British Pound",
      "Canadian Dollar",
      "Australian Dollar"
    ],
    date: new Date(),
    selectedDate: "",
    results: "",
    showCalendar: false
  };

  getAPIData() {
    const { selectedDate, base } = this.state;
    if (selectedDate && base) {
      // I want to get the data from exchange rates API
      axios 
        .get(`https://api.exchangeratesapi.io/history?start_at=${selectedDate}&end_at=${selectedDate}&base=${base}`)
        .then(({data})=>{
          this.setState({data})
        })
    }
  }

  handleChangeCalendar = date => {
    const selectedDate = new Date(date).toLocaleDateString().split("/").reverse().join("-")
    // this.setState({ selectedDate });
    this.setState(
      state => {
        console.log(state)
        state.selectedDate = selectedDate
        return state
      },
      () => {
        this.getAPIData();
      }
    );
    this.toggleShowCalendar();
  };

  toggleShowCalendar = () => {
    const { showCalendar } = this.state
    this.setState({ showCalendar: !showCalendar })
  }

  handleCurrencyChange = evt => {
    const { value } = evt.target;
    // this.setState({ base: value });
    this.setState(
      // 1
      state => {
        state.base = value
        return state
      },
      //  2
      () => {
        this.getAPIData();
      }

    );
  }

  renderData = () => {
    const { data, selectedDate } = this.state;
    console.log(data)
    return Object.keys(data.rates && data.rates[selectedDate] || {}).map( item => {
      return [
        <StyledSelectedCurrency>
          {item}
        </StyledSelectedCurrency>,
        <StyledCurrencyRate>{data.rates[selectedDate][item]}</StyledCurrencyRate>
      ]
    })
  }

  render() {

    const { currencies, base, date, results, selectedDate, showCalendar } = this.state;
    const selectTheDateProps = { 
      selectedDate,
      showCalendar,
      date,
      toggleShowCalendar: this.toggleShowCalendar,
      handleChangeCalendar: this.handleChangeCalendar
    } 
    const selectedCurrenciesProps = { base, currencies, handleCurrencyChange: this.handleCurrencyChange }

    return (
      <div>
        <div className="container">
          <div className="column-left">
            <SelectTheDate { ...selectTheDateProps } />
          </div>
          <div className="column-right">
            <SelectTheCurrency { ...selectedCurrenciesProps }/>
          </div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}
