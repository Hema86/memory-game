import React from 'react'

class Memorycard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  render () {
    return (
      <div onClick={this.handleClick} class={`memory-card ${this.state.isToggleOn ? 'flip' : ''}`}>
        <img class='back-face' src={this.props.img.back} alt='back' />
        <img class='front-face' src={this.props.img.front} alt='front' />
      </div>
    )
  }
}

export default Memorycard
