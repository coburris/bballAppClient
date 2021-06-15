import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
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
        console.log("form submitted");
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: this.state.username, password: this.state.password})

    })
    .then(response => response.json())
    .then(function (response) {
        console.log("res from login", response)
        // console.log(response.sessionToken);
        // let token = response.sessionToken;
        // localStorage.setItem('sessionToken', token);
    })
    .catch((err) => {
        console.log("login error", err)
    })
    }

    render() { 
        return ( <div>
            {/* <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            
            <button type="submit">Login</button>
            </form> */}

<Grid container component="main" height="100vh">
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} backgroundImage='../../public/images/4-Proven-Strategies-to-Increase-Your-Vertical-Jump-for-Basketball-STACK.jpg'
        backgroundRepeat='no-repeat'
        // theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
        backgroundSize='cover'
        backgroundPosition='center'/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div display="flex"
                    flexDirection="column" 
                    alignItems="center">
                        <Avatar >
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form 
            noValidate
            onSubmit={e => e.preventDefault()}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
                    </form>
                    </div>
                </Grid>
            </Grid>

        </div> );
    }
}
 
export default Login;