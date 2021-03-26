import React from 'react';
import styled from 'styled-components';
import { boxes } from '../Utils/Constants';
const Middle = () => {
  return (
    <MiddleContainer>
      <article className="container">
        {boxes.map((item) => {
          const { id, heading, text } = item;
          return (
            <div className="box" key={id}>
              <h2>{heading}</h2>
              <p className="text">{text}</p>
            </div>
          );
        })}
      </article>
    </MiddleContainer>
  );
};

const MiddleContainer = styled.article`
  .container {
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .box {
    /* height: 200px; */
    width: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing:border-box;
    margin: 30px;
    position: relative;
    top: -80px;
    padding:10px;
    background-color: white;
    .text {
      font-size: 0.85rem;
    }
  }
  @media (max-width:772px){
.container{
    flex-direction:column;
}      
  }
`;

export default Middle;
