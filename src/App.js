import React, {Component} from 'react';
import './App.css';



class App extends Component {
  state = {
    count: 0
  }

  increase = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    });
  };

  

  render() {
    const likes = (this.state.count === 1) ? "Like" : "Likes"
    return (
      <div className="frame">
        <button onClick ={this.increase} className="button">{this.state.count} {likes}</button>
      </div>
    )
  };
}

export default App;
