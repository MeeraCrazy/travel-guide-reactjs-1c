import './index.css'
import {
  LocationCardContainer,
  HeadingDescriptionContainer,
  Heading,
  Description,
} from './styledComponents'

const LocationListItem = props => {
  const {locationDetails} = props
  const {name, description, imageUrl} = locationDetails

  return (
    <li className="location-list">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Description>{description}</Description>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>
  )
}

export default LocationListItem
