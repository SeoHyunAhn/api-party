import React, {Component} from 'react'
import './Github.css'

class Github extends Component {
    state = {
        username: '',
    }
handlechange = (ev) =>{
    this.setState({username: ev.target.value})
}

    render (){
        return (
            <div className="Github">
                <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt ="Github"/>
                <form>
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
            </div>
        )
    }
}


export default Github