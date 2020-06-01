import React from 'react';
export default class Cell extends Component {

constructor(props) {
    super()
    this.state = {
        color: '#FFF'
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

 render() {
    return (
      <div className="cell">
        style={{backgroundColor: this.color}}
      </div>
    )
  }

}