import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'

function App () {
  let state = {
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

  const card = state.images.map((image) =>
    <Memorygame img={image} />)
  return (
    <div className='Memory-game'>
      {card}
      {card}
    </div>
  )
}

function Memorygame (props) {
  return (
    <div class='memory-card'>
      <img class='back-face' />
      <img class={`front-face ${props.active ? 'flip' : ''}`} src={props.img.front} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
