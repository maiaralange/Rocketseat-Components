import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
