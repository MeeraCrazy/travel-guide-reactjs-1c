import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationListItem from '../LocationListItem'

import './index.css'

class Home extends Component {
  state = {locationList: [], isLoading: false}

  componentDidMount() {
    this.getLocationPackages()
  }

  getLocationPackages = async () => {
    this.setState({
      isLoading: true,
    })

    const apiUrl = `https://apis.ccbp.in/tg/packages`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachLocation => ({
        id: eachLocation.id,
        imageUrl: eachLocation.image_url,
        description: eachLocation.description,
        name: eachLocation.name,
      }))
      this.setState({locationList: updatedData, isLoading: false})
    }
  }

  renderLocationView = () => {
    const {locationList} = this.state

    return (
      <ul className="location-list">
        {locationList.map(eachList => (
          <LocationListItem key={eachList.id} locationDetails={eachList} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="location-container">
          {isLoading ? this.renderLoadingView() : this.renderLocationView()}
        </div>
      </div>
    )
  }
}

export default Home
