import React, { Component } from 'react';
import Signup from '../auth/Signup';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Signup/>
            </div>
         );
    }
}
 
export default AboutPage;