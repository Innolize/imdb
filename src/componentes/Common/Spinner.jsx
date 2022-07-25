import React from "react";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";

const ContenedorSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height + "px" : "380px")};
`;

export const SpinnerPersonalizado = ({ height }) => (
  <ContenedorSpinner height={height}>
    <Spinner animation="border" role="status"></Spinner>
    <span className="sr-only">Loading...</span>
  </ContenedorSpinner>
);
