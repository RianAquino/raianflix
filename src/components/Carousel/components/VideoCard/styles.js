import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 4px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  height: 195px;
  width: 340px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  flex: 1;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
