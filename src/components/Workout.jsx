import React, { Component } from 'react';

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            exercise: "",
            duration: "",
            reps: "",
            sets: "",
            intensity: "",
            notes: "",
            owner: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('form submitted');
        event.preventDefault();
        fetch("http://localhost:3000/workout/create", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionToken')
            }),
            body: JSON.stringify({
                exercise: this.state.exercise,
                duration: this.state.duration,
                reps: this.state.reps,
                sets: this.state.sets,
                intensity: this.state.intensity,
                notes: this.state.notes,
                owner: this.state.owner
            })
        })
        .then(body => body.json())
        .then(function (body) {
            console.log(body)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() { 
        return ( <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="exercise" placeholder="Exercise" value={this.state.exercise} onChange={this.handleChange} required />
                <input type="text" name="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleChange} required />
                <input type="number" name="reps" placeholder="Reps" value={this.state.reps} onChange={this.handleChange} required />
                <input type="number" name="sets" placeholder="Sets" value={this.state.sets} onChange={this.handleChange} required />
                <input type="number" name="intensity" placeholder="Intensity" value={this.state.intensity} onChange={this.handleChange} required />
                <input type="text" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleChange} required />

            <button type="submit">Create Workout</button>
            </form>
        </div> );
    }
}
 
export default Workout;