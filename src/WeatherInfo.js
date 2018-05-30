import React, { Component } from 'react'
// import './RoverInfo.css'

const location = {
  london: 'uk',
  Indiana: 'usa',
  Seoul: 'korea'
}

class RoverInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
        }
        this.fetchRoverData(this.props)
    }
    componentWillMount = () => {
        this.fetchRoverData(this.props)
      }
    
      componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location;
        if (locationChanged) {
          this.fetchRoverData(nextProps);
        }
      }
    

      fetchRoverData = (props) => {
        //   debugger 
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.rover},${location[props.match.params.rover]}&appid=dd4b47469fab98efc9d89ea31c505dc3`)
        .then(response => response.json())
        .then(data => {
            // const rover = {
            //   name: data.main,
            // //   imageUrl: data.photos[0].img_src,
            // //   earthDate: data.photos[0].earth_date
            // }
            console.log(data)
            this.setState({data})
          })
            .catch((() => console.log('Well shucks')))
    }

    render() {
        const { rover } = this.state.data
        console.log(rover)
        return (
            <div className="places">
                {/* <img src={user.avatar_url} alt = ""/> */}
                {/* <h2>Humid: {rover.main[0]}</h2> */}
                {/* <h3>FOLLOWING: {user.main}</h3> */}

                {/* <h3>LOCATION: {user.location}</h3>
                <a href={user.html_url} > hello</a> */}
            </div>
        )
    }

}

export default RoverInfo