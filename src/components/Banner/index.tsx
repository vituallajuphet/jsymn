import React from 'react'
import bnrImage  from '../../assets/images/banner.jpg'
import styled from 'styled-components'

function Banner() {
  return (
    <StyledBanner>
        <div className="wrapper">
            <img src={bnrImage} alt="banner" />
        </div>
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
    height: 500px;
    overflow-y: hidden
`

export default Banner