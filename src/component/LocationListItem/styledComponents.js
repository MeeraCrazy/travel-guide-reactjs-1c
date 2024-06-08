import styled from 'styled-components'

export const LocationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow:
    0px 4px 8px 0 rgba(0, 0, 0, 0.02),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;s
`
export const HeadingDescriptionContainer = styled.div`
  padding: 10px;
`

export const Heading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: left;
`
export const Description = styled.p`
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.2;
  text-align: left;
`
