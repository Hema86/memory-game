import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='Memory-game'>
        <div class='memory-card' data-framework='aurelia'>
          {/* <img class='front-face' src='../img/aurelia.svg' alt='Aurelia' /> */}
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='aurelia'>
          <img class='front-face' src='./img/aurelia.svg' alt='Aurelia' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>

        <div class='memory-card' data-framework='vue'>
          <img class='front-face' src='./img/vue.svg' alt='Vue' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='vue'>
          <img class='front-face' src='./img/vue.svg' alt='Vue' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>

        <div class='memory-card' data-framework='angular'>
          <img class='front-face' src='./img/angular.svg' alt='Angular' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='angular'>
          <img class='front-face' src='./img/angular.svg' alt='Angular' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>

        <div class='memory-card' data-framework='ember'>
          <img class='front-face' src='./img/ember.svg' alt='Ember' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='ember'>
          <img class='front-face' src='./img/ember.svg' alt='Ember' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>

        <div class='memory-card' data-framework='backbone'>
          <img class='front-face' src='./img/backbone.svg' alt='Backbone' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='backbone'>
          <img class='front-face' src='./img/backbone.svg' alt='Backbone' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>

        <div class='memory-card' data-framework='react'>
          <img class='front-face' src='./img/react.svg' alt='React' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
        <div class='memory-card' data-framework='react'>
          <img class='front-face' src='./img/react.svg' alt='React' />
          <img class='back-face' src='../img/js-badge.svg' alt='JS Badge' />
        </div>
      </div>
    )
  }
}

export default App