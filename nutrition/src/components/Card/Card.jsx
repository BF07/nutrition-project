import './card.css'

export default function Card (props) {

    return (
        <>
            <section className="cards-section">
            <h2 className="title-cards-section">
                Réinventer votre bien-être, démarrer votre voyage avec vers une vie
                plus saine avec notre expertise en nutrition et diététique.
            </h2>
            <p className="paragraph-cards-section">
                Votre bien-être global dépend en grande partie de ce que vous mangez
                au quotidien. Une alimentation saine et équilibrée favorise une
                meilleure santé physique et mentale, vous permettant ainsi de vivre
                pleinement et de réaliser vos objectifs.
            </p>

            <div className="cards">
                <div className="card">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 512 512"
                    {...props}
                >
                    <path
                    fill="#ffffff"
                    stroke="#f8b4b4"
                    strokeWidth="30"
                    d="M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48m80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48m80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48M73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57a56.69 56.69 0 0 1-12.764-1.465c-2.912 9.62-6.176 19.165-9.84 28.51A87.458 87.458 0 0 0 384 375c48.155 0 87-38.845 87-87c0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37c2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05c2.738-2.373 5.79-6.186 8.428-10.58c3.1-5.17 5.448-11.177 6.955-16.37z"
                    ></path>
                </svg>
                <h3 className="title-card">
                    <a href="">Recettes</a>
                </h3>
                <p className="text-card">
                    Prenez goût à cuisiner avec nos recettes faciles et équilibrées
                    à retrouver sur notre <span>blog</span>.{" "}
                </p>
                <a className="card-more" href=''>...</a>
                </div>
                <div className="card">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    {...props}
                >
                    <path
                    fill="#ffffff"
                    stroke="#f8b4b4"
                    strokeWidth="1"
                    d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"
                    ></path>
                </svg>
                <h3 className="title-card">
                    <a href="">Calendrier - Menu</a>
                </h3>
                <p className="text-card">
                    Laissez vous guider par notre <span>menu diététique</span>{" "}
                    hebdomadaire mis à jour chaque semaine par votre nutritionniste.{" "}
                </p>
                <a className="card-more" href=''>...</a>
                </div>
                <div className="card">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                    {...props}
                >
                    <path
                    fill="#f8b4b4"
                    d="M216 76h-28V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v128a12 12 0 0 0 19.54 9.33l28.46-23V184a20 20 0 0 0 20 20h92.17l36.29 29.33A12 12 0 0 0 236 224V96a20 20 0 0 0-20-20M44 150.87V52h120v80H71.58a12 12 0 0 0-7.58 2.67Zm168 48l-20-16.2a12 12 0 0 0-7.54-2.67H92v-24h76a20 20 0 0 0 20-20v-36h24Z"
                    ></path>
                </svg>
                <h3 className="title-card">
                    <a href="">On en parle...</a>
                </h3>
                <p className="text-card">
                    Des questions ? Rejoignez nos <span>ateliers</span> de
                    prévention et d’information sur le <span>sport</span> et la{" "}
                    <span>nutrition</span>.{" "}
                </p>
                <a className="card-more" href=''>...</a>
                </div>
            </div>
            </section>
        </>
    );
}