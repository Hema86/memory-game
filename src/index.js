import React from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          'id': 1,
          img: '../img/ember.svg'
        },
        {
          'id': 2,
          img: '../img/angular.svg'
        },
        {
          'id': 3,
          img: '../img/react.svg'
        },
        {
          'id': 4,
          img: '../img/backbone.svg'
        },
        {
          'id': 5,
          img: '../img/vue.svg'
        },
        {
          'id': 6,
          img: '../img/aurelia.svg'
        }
      ],
      activeItems: [],
      matchedItems: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (index) {
    let { activeItems, matchedItems, items } = this.state
    if (activeItems.length >= 2) {
      activeItems.length = 0
      activeItems.push(index)
    } else {
      activeItems.push(index)
      if (activeItems.length === 2) {
        if (items[activeItems[0]].id === items[activeItems[1]].id) {
          matchedItems.push(items[activeItems[0]].id)
        }
      }
    }
    this.setState({
      activeItems
    })
  }

  componentWillMount () {
    var { items } = this.state
    this.setState({
      items: items.concat(items.slice(0))
    })
  }

  render () {
    var { activeItems, matchedItems, items } = this.state
    return (
      <div className='Memory-game'>
        {items.map((item, i) => {
          return <Card
            index={i}
            item={item}
            active={activeItems.indexOf(i) !== -1}
            matched={matchedItems.indexOf(item.id) !== -1}
            handleClick={this.handleClick} />
        })}
      </div>
    )
  }
}

const Card = (props) => {
  return (

    <div className={`card ${props.active || props.matched ? 'active' : ''}`} onClick={props.handleClick.bind(this, props.index)}>
      <div className='flipper'>
        <div className='front'>
          <img src='../img/js-badge.svg' alt='front' />
        </div>
        <div className='back' onClick={(e) => { e.stopPropagation() }}>
          <img src={props.item.img} alt='back' />
        </div>
      </div>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
