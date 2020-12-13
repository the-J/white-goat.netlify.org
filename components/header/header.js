import React from 'react'
import PropTypes from'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`

const StyledHeader = styled.h1`
  font-size: 4rem;
`

const Header = ({content}) => (
    <HeaderWrapper>
        <StyledHeader>{content}</StyledHeader>
    </HeaderWrapper>
)

Header.propTypes = {
    content: PropTypes.string.isRequired
}

export default Header
