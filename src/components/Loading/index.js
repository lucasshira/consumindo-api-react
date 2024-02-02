import React from 'react';
import PropTypes from 'prop-types'; // importando biblioteca PropTypes para definir tipos de propriedades
import { Container, LoadingIndicator } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div className="main">
        <span>Carregando...</span>
      </div>
      <div className="loading">
        <LoadingIndicator />
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  // valor padrao
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
