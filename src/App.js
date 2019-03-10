import React, { Component } from 'react';
import './App.css';
import Color from 'color';
const GREY = '#E8E8E8'


class App extends Component {
  state = {
    color: '#E8E8E8'
  }
  render() {
    return (
      <div className="App">
        <div className='panel-container' 
          onMouseLeave={() => this.setState({ color: GREY })}>
          {
            [
              { id: 1, section: 'about', color: '#69cef4' },
              { id: 2, section: 'profile', color: '#92cea5' },
              { id: 3, section: 'title', color: '#e50b0b' },
              { id: 4, section: 'life', color: '#e21493' },
              { id: 5, section: 'experience', color: '#bfe214' },
              { id: 6, section: 'work', color: '#f93abf' },
              { id: 7, section: 'hobbies', color: '#11d684' },
            ].map(item => {
              const clr = Color(this.state.color)
                .darken(.1 * item.id)
                .saturate(0.5) 
              return <div 
                style={{
                  color: clr.negate().blacken(1).hex(),
                  backgroundColor: clr.hex()
                }}
                key={item.id} 
                onMouseEnter={() => this.setState({ color: item.color })}
                className='panel'
              >{item.section}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
