import React from 'react'
import ReactDOM from 'react-dom'
// import Memorycard from './App'
// import _ from 'lodash.hasin'
import './index.css'

// function App () {
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [{
        id: 1,
        name: '../img/aurelia.svg'
      },
      {
        id: 1,
        name: '../img/vue.svg'
      },
      {
        id: 1,
        name: '../img/angular.svg'

      },
      {
        id: 1,
        name: '../img/ember.svg'
      },
      {
        id: 1,
        name: '../img/backbone.svg'

      },
      {
        id: 1,
        name: '../img/react.svg'

      }],
      activeItems: [],
      matchedItems: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const card = this.state.images.map((image, i) =>
      <Memorycard item={image} />)
    return (
      <div className='Memory-game'>
        {card}
        {card}
      </div>
    )
  }
}

class Memorycard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: false }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    // console.log(e.target)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render () {
    // console.log(this.props).item
    return (
      <div onClick={this.handleClick} className='memory-card'>
        {this.state.isToggleOn
          ? <img className='back-face' src={this.props.item.name} alt='back' />
          // activeItems.push(this.props.item.name, indexOf('this.props.item.name'))
          : <img className='front-face' src='../img/js-badge.svg' alt='front' />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
