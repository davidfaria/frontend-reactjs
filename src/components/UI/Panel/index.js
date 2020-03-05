import styled from 'styled-components';

const Panel = styled.div`
  max-width: 1241px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export default Panel;
