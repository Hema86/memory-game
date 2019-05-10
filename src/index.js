import React from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          img: '../img/ember.svg'
        },
        {
          id: 2,
          img: '../img/angular.svg'
        },
        {
          id: 3,
          img: '../img/react.svg'
        },
        {
          id: 4,
          img: '../img/backbone.svg'
        },
        {
          id: 5,
          img: '../img/vue.svg'
        },
        {
          id: 6,
          img: '../img/aurelia.svg'
        }
      ],
      activeItems: [],
      matchedItems: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (index) {
    // console.log(index)
    let { activeItems, matchedItems, items } = this.state
    console.log('///' + activeItems)
    if (activeItems.length >= 2) {
      activeItems.length = 0
      activeItems.push(index)
    } else {
      activeItems.push(index)
      // console.log(activeItems)
      if (activeItems.length === 2) {
        if (items[activeItems[0]].id === items[activeItems[1]].id) {
          matchedItems.push(items[activeItems[0]].id)
          // console.log(matchedItems)
        }
      }
    }
    this.setState({
      activeItems
    })
    // console.log(activeItems)
    // console.log(matchedItems)
    console.log('act' + activeItems)
    console.log('matched' + matchedItems)
    console.log('----------------------------')
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
          // console.log(activeItems.indexOf(i))
          // console.log(matchedItems.indexOf(i))
          return <Card
            key={i}
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
        <div className='back' >
          <img src={props.item.img} alt='back' />
        </div>
      </div>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
