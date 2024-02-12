import { useState } from 'react'
import './navbar.css'

import logo from '../../assets/logo_SC.png'

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
                backgroundColor: '#ffffff',
                width: '320px',
                borderBottomRadius: '20%'
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
            borderBottomRadius: '20%'
        }
    }

    return <>
        <header>
            <nav className="navbar">
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

                <img src={logo} alt="logo-SandrineCoupart" />

                <div className="connexion">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                </div>
            </nav>
        </header>
    </>
}