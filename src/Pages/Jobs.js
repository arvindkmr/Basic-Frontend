import React from 'react';
import styled from 'styled-components';
const Jobs = () => {
  return (
    <JobsContainer>
      <div className="Container">
        <span className="content">Opening for frontend developer...</span>
        <span className="content">Apply soon here !!!</span>
        <button type="button" className="Btn-Jobs">
          {' '}
          <a href="https://www.nablasol.com/careers/"> Click here once</a>{' '}
        </button>
      </div>
    </JobsContainer>
  );
};
const JobsContainer = styled.main`
  .Container {
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    font-size: 1.9rem;
    line-height:6.9em;
    
    .Btn-Jobs {
      background: transparent;
      border: transparent;
      color: hsl(22, 31%, 52%);
      cursor: pointer;
      font-size: 1.9rem;
    }
  }
  @media (max-width:772px){
    .Container{
      flex-direction:column;
      font-size: 1.2rem;
      line-height:3rem;
    }
    .Btn-Jobs {
      background: transparent;
      border: transparent;
      color: hsl(22, 31%, 52%);
      cursor: pointer;
      font-size: 1.9rem;
    }
  }
`;

export default Jobs;
