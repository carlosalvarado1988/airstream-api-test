
import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: {
              user: '',
              pass: '',
              isLogged: false
            }
          }
    }

    render() {
        return (
            <div>
                <section className="row">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input 
                     name="username" 
                     type="text" 
                     className="form-control" 
                    id="username" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                     name="password" 
                     type="password" 
                     className="form-control" 
                     id="password" />
                </div>
                </section>
                <div className="col-md-12">
                    <div className=" form-group">
                        <button 
                         id="login-button" 
                         type="submit" 
                         className="btn btn-large">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Login
