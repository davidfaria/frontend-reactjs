import React from 'react';

import PropTypes from 'prop-types';

import { Header } from '~/components/UI';

import { Wrapper, Main } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
