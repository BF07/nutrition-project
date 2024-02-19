import './aboutme.css'

import photo from '../../assets/aboutme-photo.jpg'

export default function Aboutme () {

    return (
      <>
        <div className="container">
          <div className="about-me-wrapper">
            <img className='about-img' src={photo} alt="photo de presentation" />
            <h2 className="about-title">À propos de moi</h2>
            <p className='about-text'>
                Bienvenue sur le site de Sandrine Coupart, votre experte en
                nutrition et diététique. Avec des années d'expérience dans le
                domaine de la nutrition, Sandrine est dédiée à vous aider à
                atteindre vos objectifs de santé et de bien-être grâce à une
                approche personnalisée et scientifiquement fondée. <br />
                <br />
                <span>Qui suis-je ?</span> <br />
                <br />
                Je suis Sandrine Coupart, et ma passion pour la nutrition a été le
                moteur de ma carrière. Mon parcours m'a conduit à me spécialiser
                dans le domaine de la nutrition et de la diététique, où j'ai
                acquis une expertise solide et une compréhension profonde des
                besoins nutritionnels individuels. <br />
                <br />
                <span>Mon Engagement envers Votre Santé</span> <br />
                <br />
                Mon métier ne se limite pas à une simple profession, c'est
                une véritable passion. Mon objectif ultime est de vous aider à
                atteindre un état de santé optimal et un bien-être durable. Pour
                ce faire, j'adopte une approche personnalisée qui prend en compte
                vos besoins spécifiques, votre mode de vie et vos objectifs de
                santé. <br />
                <br />
                <span>Une Approche Scientifiquement Fondée</span> <br />
                <br />
                Mon travail repose sur des bases scientifiques solides. Je m'engage à fournir des
                conseils nutritionnels fondés sur des preuves, en utilisant les
                dernières avancées en matière de recherche en nutrition. Mon
                objectif est de vous offrir des informations fiables et crédibles
                pour que vous puissiez prendre des décisions éclairées pour votre
                alimentation. <br />
                <br />
                <span>Services Personnalisés</span> <br />
                <br /> 
                Je propose une gamme de services personnalisés, que ce soit pour la gestion du poids,
                l'amélioration des performances sportives, la gestion de problèmes
                de santé spécifiques, ou simplement pour adopter une alimentation
                plus saine au quotidien. Chaque plan que je conçois est adapté à
                vos besoins uniques. <br />
                <br />
                <span>Soutien et Encouragement</span> <br />
                <br />
                Je comprends que le changement alimentaire peut être un défi. C'est pourquoi je suis
                là pour vous soutenir tout au long de votre parcours. Mon approche
                est axée sur le soutien, la motivation et la création d'un
                environnement propice à votre réussite.
            </p>
            <a href="" className='btn-about'>En savoir plus</a>
          </div>
        </div>
      </>
    );
}