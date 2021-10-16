import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

export const Background: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container colors={[theme.colors.background, theme.colors.black]}>
      {children}
    </Container>
  );
};
