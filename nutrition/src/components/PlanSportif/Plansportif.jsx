import '../PlanSportif/plansportif.css'

import sportImage from '../../assets/plan_sportif.webp'

export default function Plansportif () {

    return (
        <>
            <section className="plansportif-section">
            <img className="plansportif-img" src={sportImage} alt="" />
            <div className="plansportif-content">
                <h2 className="plansportif-title">
                Votre plan sportif personnalisé
                </h2>
                <p>
                Un suivi complet accès à la fois sur l’alimentation mais aussi sur
                une pratique sportive adaptée à vos besoins. Mon objectif, vous
                donner les clés pour un nouveau mode de vie !
                </p>
            </div>
            </section>
        </>
    );
}