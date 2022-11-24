import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeOptionId: countryAndCapitalsList[0].id}

  onSelectOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  getCountryName = () => {
    const {activeOptionId} = this.state
    const CapitalAndCountryList = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeOptionId,
    )
    return CapitalAndCountryList.country
  }

  render() {
    const {activeOptionId} = this.state
    const Country = this.getCountryName()
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <div>
              <select onChange={this.onSelectOption} value={activeOptionId}>
                {countryAndCapitalsList.map(eachItem => (
                  <option key={eachItem.id} value={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>is capital of which country?</p>
            </div>
          </div>
          <p className="res">{Country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
