import React from "react";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";

const ContenedorSpinner = styled.div`
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerPersonalizado = () => (
  <ContenedorSpinner>
    <Spinner animation="border" role="status"></Spinner>
    <span className="sr-only">Loading...</span>
  </ContenedorSpinner>
);
