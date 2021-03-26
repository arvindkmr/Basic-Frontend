import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> Arvind Baloda (Frontend Developer)</span>
        </h5>
        <h5> Task for Frontend developer Interview at NABLOSAL </h5>
    
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
 
      position: fixed;
      width:100%;
      bottom:0px;
      background: #222;

    span {
      color: hsl(22, 31%, 52%);
    }
    h5 {
      color: #fff;
      font-size: 1.25rem;
      margin: 0.1rem;
      font-weight: 400;
      line-height: 2;
    }
  

  @media (min-width: 772px) {
    flex-direction: row;
  }
`;

export default Footer;
