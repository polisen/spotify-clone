import styled from 'styled-components';

export default styled.hr<{ sm?: boolean }>`
  border: none;
  border-top: 2px solid;
  border-color: ${({ color }) => (color || '#444444')};
  width: calc(100% - 1.5em);
  margin: ${({ sm }) => (sm ? '1em 0 1em 0' : '2em 0 2em 0')};
`;
