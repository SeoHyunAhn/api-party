import React, { Component } from 'react'

class GithubUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
        this.fetchuserData(this.props)
    }
    componentWillReceiveProps(nextProps) {
        // this.fetchuserData()
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchuserData()
        }
    }

    fetchuserData = (props) => {
        fetch(`https://api.github.com/users/${props.match.params.username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
            .catch((() => console.log('Well shucks')))
    }

    render() {
        const { user } = this.state
        return (
            <div className="GithubUser">
                {/* <img src={user.avatar_url} alt = ""/> */}
                <h2>LOGIN: {user.login}</h2>
                <h3>FOLLOWERS: {user.followers}</h3>
                <h3>FOLLOWING: {user.following}</h3>

                <h3>LOCATION: {user.location}</h3>
                <a href={user.html_url} > hello</a>
            </div>
        )
    }
}

export default GithubUser