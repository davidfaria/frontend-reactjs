import styled from 'styled-components';

const HeaderBar = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  max-width: 1241px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export default HeaderBar;
