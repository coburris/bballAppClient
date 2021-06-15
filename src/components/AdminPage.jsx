import React, { Component } from 'react';
import Workout from './Workout'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            AdminPage
            <Workout/>
        </div> );
    }
}
 
export default AdminPage;