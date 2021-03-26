import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <div className="About-container">
        <p>
          Nablasol Digital Services Pvt. Ltd. is a Business Technology company,
          driven by the mission to build technology solutions to lead the
          digital transformation for businesses across sectors. We are masters
          of simplifying processes, improving collaboration and adding capacity.
        </p>
        <p>
          We work with businesses of all sizes, from Fortune 500 companies to
          small and medium-sized businesses across the world. A majority of our
          clients are medium-sized businesses who wish to be ahead in their
          industry before the competition overtakes them. Our biggest asset is
          our team. We have a very diverse team of professionals coming from
          different cultures and trained in a multitude of skill-sets.
        </p>
        <p>
          It comprises of people who have led organizations, been part of huge
          projects, studied at top universities in the USA and India, taught at
          schools, and juggled through various roles at once. Apart from the
          full-time employees, we retain some elite consultants who are industry
          leaders, researchers, educators and top professionals.
        </p>
        <p>
          We are boastful about providing high-quality solutions for our
          clients, which make an impact. The success of our clients is our
          primary focus in whatever we do. This client-centric approach has
          helped us earn huge accolades, which give us further motivation to
          exceed their expectations.
        </p>
      </div>
    </AboutContainer>
  );
};
const AboutContainer = styled.section`
  width: 90vw;
  margin-left: 100px;
  margin-top: 50px;
  background-color: pink;
  .About-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    color: darkmagenta;
  }
  @media (max-width:772px){
    width:80vw;
    margin:80px;
  }
`;

export default About;
