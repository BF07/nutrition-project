import { useState } from 'react'
import './navbar.css'

import logo from '../../assets/logo_SC.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Navbar () {

    const [burger, setBurger] = useState('');

    const toggleBurger = () => {
        setBurger(!burger)
    };

    const sideBarStyle = () => {
        if (burger) {
            return {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                transition: 'left 400ms ease 0s',
                position: 'absolute',
                top: '60px',
                left: '0',
                zIndex: '100',
                backgroundColor: '#ffffff',
                width: '320px',
                borderBottomLeftRadius: '20%',
                borderBottomRightRadius: '20%',
                paddingBottom: '20px'
            }
        }
        return {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            transition: 'left 400ms ease 0s',
            position: 'absolute',
            top: '60px',
            left: '-100%',
            backgroundColor: '#ffffff',
            width: '320px',
            borderBottomLeftRadius: '20%',
            borderBottomRightRadius: '20%',
            paddingBottom: '20px'
        }
    }

    return (
      <>
        <header>
          <nav className="navbar-mobile">
            <div className="hamburger-icon" onClick={toggleBurger}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            <div style={sideBarStyle()}>
              <a href="">Accueil</a>
              <a href="">À Propos</a>
              <a href="">Mes Recettes Minceurs</a>
              <a href="">Mes Plans Sportifs</a>
              <a href="">Mon Calendrier</a>
              <a href="">Ateliers de Prévention et d'Information</a>
              <a href="">Contact</a>
            </div>

            <img className="logo" src={logo} alt="logo-SandrineCoupart" />

            <div className="connexion">
              <div className="dot dot1"></div>
              <div className="dot dot2"></div>
              <div className="dot dot3"></div>
            </div>
          </nav>
          <nav className="desktop">
            <div className="navbar-desktop">
              <img className="logo" src={logo} alt="SandrineCoupart" />

              <div className="navbar-contact">
                <p className="adress">
                  <span>
                    Cabinet Sandrine Coupart - Diététicienne / Nutritionniste
                  </span>
                  <br />
                  28 Rue Joseph Pasteur, 97400 Saint-Denis
                </p>
                <div className="phone">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#f8b4b4", paddingRight: "5px" }}
                  />
                  <p>06 06 06 06 06</p>
                </div>
                <button className="rdv-button">
                  Prendre rendez-vous en ligne
                </button>
              </div>
              <FontAwesomeIcon className='user-icon' icon={faUser} style={{ color: "#f8b4b4" }} />
            </div>
            <div className="border">
              <div className="border-line"></div>
            </div>
            <div className="nav-items">
              <a href="">Accueil</a>
              <a href="">À Propos</a>
              <a href="">Mes Recettes Minceurs</a>
              <a href="">Mes Plans Sportifs</a>
              <a href="">Mon Calendrier</a>
              <a href="">Ateliers de Prévention et d'Information</a>
              <a href="">Contact</a>
            </div>
          </nav>
        </header>
      </>
    );
}