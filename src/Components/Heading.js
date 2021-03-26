import React from 'react';
import styled from 'styled-components';
import img from '../Assets/white.png';
const Heading= () => {
  return (
    <MainSection>
      <section className="headline">
        <h1>
          I <img src={img} width="30px"  alt="Icon"/> Nablasol
        </h1>
        <h2> 
         DIGITIZE YOUR PRESENT, FOR A BETTER FUTURE ||||||
        </h2>
        <p>
We enable innovation that matters, through unmatched digital technologies giving you a competitive edge
 <br /> Learn by doing and you'll be a master in no time.
        </p>
        <center>
          <button className="mainbtn">Over to you</button>
        </center>
      </section>
    </MainSection>
  );
};

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
.headline{
  width: 100%;
  height: 50vh;
  min-height: 350px;
  background-color: #42d7f5;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
}
.mainbtn{
  width: 150px;
  height: 6vh;
  border-radius: 50px;
  background-color: #fc2c03;
  color: white;
  border: transparent;
}
`;

export default Heading;
