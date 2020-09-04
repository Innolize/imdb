import React from 'react'
import Carrousel from './Carousel'
import ListaTrending from './ListaTrending'
import ListaPopular from './ListaPopular'
import ListaActoresMain from './ListaActoresMain'
import styled from '@emotion/styled'

const LayoutMain = styled.div`
  width:90%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1600px) {
    width: 60%;
  }
`
const Wrapper = styled.div`
  background-color: black;
`

const Mainpage = () => {
    return (
        <Wrapper>
            <LayoutMain>
                <Carrousel />
                <ListaTrending />
                <ListaPopular />
                <ListaActoresMain />
            </LayoutMain>
        </Wrapper>
    )
}

export default Mainpage