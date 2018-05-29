import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './Github.css'

class Github extends Component {
    state = {
        username: '',
    }
    handlechange = (ev) =>{
        this.setState({username: ev.target.value})
    }
    handelSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/github/${this.state.username}`)
        this.setState({username: ''})
    }

    render (){
        return (
            <div className="Github">
                <img className="logo"
                src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt ="Github"/>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange= {this.handlechange}/>
                    </div>
                    <div>
                        <button type="submit">
                        Look UP github user</button>
                    </div>
                </form>
                <Route path="/github/:username" render = {(props) => <h3>U searched for {props.match.params.username}</h3>}/>
                <Route exact path ="/github" render={()=> <h3>plz type username</h3>}/>
            </div>
        )
    }
}


export default Github