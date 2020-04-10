import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        //ninja.name
        //ninja['name'] thats how we doin
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSumbit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        /*const newNinja = 
        {
            name: this.state.name,
            age: this.state.age,
            belt: this.state.belt,
            id: null
        }*/
        this.props.addNinja({...this.state}); // if this.state without dots, pass REFERENCE to state!!! - here is copy, its safe
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="name">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>

    
        )
    }
}
export default AddNinja;