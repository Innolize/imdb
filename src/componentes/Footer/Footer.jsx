import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons';

const ContenedorFooter = styled.div`
    padding: 40px 0px 20px 0px;
    height: 320px;
    background-color: black;
`
const RedesSocialesIconos = styled(FontAwesomeIcon)`
    color: white;
    font-size: 25px;    
    margin-right: 30px;
    &:hover {
        cursor:pointer;
    }
`
const ContenedorCentrado = styled.div`
    display:flex;
    justify-content: center;
    padding: 15px 0px 15px 0px;
    width: 60%;
    margin: auto;
`
const LinkFooter = styled.a`
    color: white;
    font-size: 18px;
    font-weigth: 600;
    padding-right: 15px;
`
const IconoLinkExterno = styled(FontAwesomeIcon)`
    font-size: 15px;
`

const Footer = () => {
    return (
        <ContenedorFooter>
            <ContenedorCentrado>
                <RedesSocialesIconos icon={faFacebook} />
                <RedesSocialesIconos icon={faTwitter} />
                <RedesSocialesIconos icon={faInstagram} />
                <RedesSocialesIconos icon={faYoutube} />
                <RedesSocialesIconos icon={faTwitch} />
            </ContenedorCentrado>
            <ContenedorCentrado>
                <LinkFooter href="www.google.com">Get the INNOMDB App<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Help<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Site Index<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">INNOMDbPro<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Box Office Mojo<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">INNOMDb Developer<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
            </ContenedorCentrado>
            <ContenedorCentrado>
                <LinkFooter href="www.google.com">Press Room<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Advertising<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Jobs<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Conditions of Use<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Privacy Policy<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
                <LinkFooter href="www.google.com">Interest-Based Ads<IconoLinkExterno icon={faExternalLinkAlt} /></LinkFooter>
            </ContenedorCentrado>
            <ContenedorCentrado>
                <span>© 1990-2020 by INNOMDb.com, Inc.</span>
            </ContenedorCentrado>
        </ContenedorFooter>
    )
}

export default Footer