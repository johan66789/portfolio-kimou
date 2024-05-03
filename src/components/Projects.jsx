import PictureCan from '../assets/can.png';
import PictureOtakuverse from '../assets/otakuverse.png';
import PictureSchool from '../assets/kimou-school.png';
import PortfolioPicture from '../assets/portfolio.png';

import '../styles/projects.css';
function Projects(){
    return(
        <div id="project">
            <h2>Mes Projets</h2>
            <div className="grid-project">
                <div className="projects">
                    <div className="picture-project">
                        <img src={PictureCan} alt="" />
                    </div>
                    <div className="title-project">
                        <h3>ALLCAN</h3>
                    </div>
                    <div className="describe">
                        <p>
                            ALLCAN est une plateforme web qui décrit l'historique des différentes CAN qui se sont déroulés au fil du temps.
                            J'ai utilisé PYTHON pour récupérer les données et JAVASCRIPT pour les affichés.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="picture-project">
                        <img src={PictureOtakuverse} alt="" />
                    </div>
                    <div className="title-project">
                        <h3>OTAKUVERSE</h3>
                    </div>
                    <div className="describe">
                        <p>
                            OtakuVerse est un site dynamique où les amateurs d'animés et de mangas se retrouvent pour partager leurs passions. <span style={{fontWeight:900}}>(la mise en ligne est pour bientôt)</span>.
                            J'ai utilisé PHP pour le backend et HTML CSS et JAVASCRIPT pour le front. Ici jAVASCRIPT joue un rôle très important avec sa capacité d'autamatiser les fonctionnalités.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="picture-project">
                        <img src={PictureSchool} alt="" />
                    </div>
                    <div className="title-project">
                        <h3>KIMOU SCHOOL</h3>
                    </div>
                    <div className="describe">
                        <p>
                        IUTEA SCHOOL est une plateforme web PHP permettant aux étudiants de pourvoir noter leurs profs.Cette plateforme dispose d'une partie administrer par un admin c'est lui qui est chargé d'enregistrer les étudiants et leurs fournis leurs mdp. Il est chargé aussi d'enregsitrer les profs.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="picture-project">
                        <img src={PortfolioPicture} alt="" />
                    </div>
                    <div className="title-project">
                        <h3>KIMOU PORTFOLIO</h3>
                    </div>
                    <div className="describe">
                        <p>
                            KIMOU PORTFOLIO est site web illustrant mon parcours de programmeur,mes objectifs,mescompétences et mes projets.Purement fait avec react js 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;