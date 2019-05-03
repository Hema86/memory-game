import React from 'react'
import ReactDOM from 'react-dom'
import Memorycard from './App'
import './index.css'

// function App () {
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [
        {
          front: '../img/js-badge.svg',
          back: '../img/aurelia.svg'
        },
        {
          front: '../img/js-badge.svg',
          back: '../img/vue.svg'
        },
        {
          front: '../img/js-badge.svg',
          back: '../img/angular.svg'
        },
        {
          front: '../img/js-badge.svg',
          back: '../img/ember.svg'
        },
        {
          front: '../img/js-badge.svg',
          back: '../img/backbone.svg'
        },
        {
          front: '../img/js-badge.svg',
          back: '../img/react.svg'
        }
      ],
      activeItems: [],
      matchedItems: []
    }
  }
  render () {
    const card = this.state.images.map((image) =>
      <Memorycard img={image} />)
    return (
      <div className='Memory-game'>
        {card}
        {card}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
