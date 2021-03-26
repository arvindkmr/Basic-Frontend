import React, { useState } from 'react';
import Data from '../Utils/Constants';
import { Link } from 'react-router-dom';
import Logo from '../Assets/images.png';
import { FaBars } from 'react-icons/fa';
import Styled from 'styled-components';

const NavBar = () => {
  const [value, setvalue] = useState(false);
  return (
    <NavContainer>
      <div className="Nav-Center">
        <div className="Nav-Header">
          <Link to="/">
            <img src={Logo} alt="Logo is Loading" />
          </Link>
          <button
            type="button"
            className="Nav-Toggle"
            onClick={() => {
              setvalue(!value);
            }}
          >
            <FaBars />
          </button>
        </div>
        {value && (
          <ul className="Side-Links">
            {Data.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        )}
        <ul className="Nav-Links">
          {Data.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = Styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  .Nav-Center{
      width:90vw;
      margin:auto;
     
  }
  .Nav-Header{
    display:flex;
    align-items:center;
    justify-content: space-between;
    img{
        width:50px;
   } }
    .Nav-Toggle {
    background: transparent;
    border: transparent;
    color:  hsl(22, 31%, 52%);
    cursor: pointer;
    svg {
      font-size: 2.5rem;
    }
}
.Nav-Links{
    display:none
}
.Side-Links{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    padding: 10px;
}

@media (min-width:772px){
  .Nav-Toggle{
    display:none
  }
  .Nav-Header{
    justify-content:center;
  }
  .Nav-Center {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }
  .Nav-Links{
    display:flex;
    justify-content : center;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: hsl(209, 34%, 30%);
      font-size: 1.4rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid hsl(22, 31%, 67%);
      }}
    }
    
    .Side-Links{
        display:none;
    }
  }
  `;

export default NavBar;
