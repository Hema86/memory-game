import React from 'react'
// import _ from 'lodash.hasin'

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

export default Memorycard
