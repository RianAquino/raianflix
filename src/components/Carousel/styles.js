import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: 200;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  font-weight: 400;
  padding: 5px 10px;
  text-align: top;
  color: var(--blackLighter);
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  width: 100%;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  li {
    margin-right: 16px;
  }

  ::-webkit-scrollbar {
    height: 6px;
    transition: .3s;
  }
  ::-webkit-scrollbar-track {
    background-color: #00000040; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.scrollbarColor};
  }
  ::-webkit-scrollbar-thumb:hover{
    background-color: ${props => props.scrollbarColor+"85"};
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 0 5% 16px 5%;
`;
