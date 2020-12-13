import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`

const ImageComponent = styled.img`
  height: auto;
  max-width: 250px;
  margin: 0 auto;
  
`

const Image = ({src}) => (
    <ImageWrapper>
        <ImageComponent src={src} alt={'Photo ' + src} />
    </ImageWrapper>
)

Image.propTypes = {
    src: PropTypes.string.isRequired
}

export default Image
