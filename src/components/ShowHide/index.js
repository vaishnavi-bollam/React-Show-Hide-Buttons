// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isClickedFirst: true, isClickedLast: true}

  clickFirstName = () => {
    const {isClickedFirst} = this.state
    this.setState(prevState => ({
      isClickedFirst: !prevState.isClickedFirst,
    }))
  }

  clickLastName = () => {
    const {isClickedLast} = this.state
    this.setState(prevState => ({
      isClickedLast: !prevState.isClickedLast,
    }))
  }

  render() {
    const {isClickedFirst, isClickedLast} = this.state

    return (
      <div className="main-bg">
        <h1>Show/Hide</h1>
        <div>
          <button onClick={this.clickFirstName}>Show/Hide Firstname</button>
          {isClickedFirst && <p onClick={this.clickFirstName}>Joe</p>}
          {!isClickedFirst && null}

          <button onClick={this.clickLastName}>Show/Hide Lastname</button>
          {isClickedLast && <p onClick={this.clickFirstName}>Jonas</p>}
          {!isClickedLast && null}
        </div>
      </div>
    )
  }
}

export default ShowHide
