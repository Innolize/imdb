import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const ContenedorFooter = styled.div`
  padding: 40px 0px 20px 0px;
  height: 320px;
  background-color: black;
`;
const RedesSocialesIconos = styled(FontAwesomeIcon)`
  color: white;
  font-size: 25px;
  margin-right: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const ContenedorCentrado = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  padding: 15px 0px 15px 0px;
  width: 60%;
  margin: auto;
  color:white;
`;
const LinkFooter = styled.a`
  color: white;
  font-size: 15px;
  font-weigth: 600;
  padding-right: 15px;
  display: inline-block;
`;
const IconoLinkExterno = styled(FontAwesomeIcon)`
  padding: 1px;
  font-size: 12px;
`;

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
        <LinkFooter href="/">
          Get the INNOMDB App
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Help
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Site Index
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          INNOMDbPro
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Box Office Mojo
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          INNOMDb Developer
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
      </ContenedorCentrado>
      <ContenedorCentrado>
        <LinkFooter href="/">
          Press Room
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Advertising
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Jobs
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Conditions of Use
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Privacy Policy
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
        <LinkFooter href="/">
          Interest-Based Ads
          <IconoLinkExterno icon={faExternalLinkAlt} />
        </LinkFooter>
      </ContenedorCentrado>
      <ContenedorCentrado>
        <span>© 1990-2020 by INNOMDb.com, Inc.</span>
      </ContenedorCentrado>
    </ContenedorFooter>
  );
};

export default Footer;
