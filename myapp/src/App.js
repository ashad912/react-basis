import React, { Component } from 'react'; 
//import gives pos to avoid using ex. React.Component
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 0},
      {name: 'Yoshi', age: 21, belt: 'green', id: 1},
      {name: 'Crystal', age: 25, belt: 'pink', id: 2 }
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja.id)
    //console.log(ninja)
    //console.log(this.state.ninjas.length);
    ninja.id = this.state.ninjas.length;
    //console.log(ninja)
    //ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja] //spread operator and extra element
    
    this.setState({
      ninjas: ninjas //reassing state, without editing outside of state
    })

  }
  deleteNinja = (id) => {
      console.log(id)
      let ninjas = this.state.ninjas.filter (ninja =>{
        return ninja.id !== id; //returning param "ninja" if condition after "return" is true
        // if(ninja.id !== id){ //ALTERNATIVE
        //   return ninja;
        // }else {
        //   return null;
        // }
      })
      this.setState({
        ninjas: ninjas
      })

  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome! :)</p>
        {/* <Ninjas name="Ryu" age="25" belt='black'/> {/*Using nested compon*/}
        {/*<Ninjas name="Yoshi" age="30" belt='green'/>*/}

        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja} /> {/*addNinja is supposed func in AddNinja Component; this.addNinja
        is func in App.js, which is passed to */}
        
        
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
