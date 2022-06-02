import React from "react";
import './Login.css'
import Navbar from "./navbar_simple"
import {Link} from 'react-router-dom'

class Login extends React.Component {

   
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
 
    };

  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
 

  render() {
    const { username, password } = this.state;
    return (
        <div>
         <Navbar></Navbar>
    
        <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container">
                <label className="label">Usuário: </label>
                <input
                    type="text"
                    name="username"
                    className="input"
                    placeholder="usuário"
                    value={username}
                    onChange={this.handleChange} />
            </div>
            <div className="input-container">
                <label className="label">Senha: </label>
                <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="senha"
                    value={password}
                    onChange={this.handleChange} />
           
            </div>
            <button type="submit" id="login-btn">
            <Link to="/agendamento">Entrar</Link>
            </button>
        </form>
        </div>
        </div>

    );
  }
}

export default Login;
