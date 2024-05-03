import mycv from './cv-kimou.pdf';
import "../styles/about.css";

function About(){
    // const cvUrl = './'
    return(
        <div id='about'>
            <div className="about-me">
                <h2>A propos</h2>
                <h6>Qui suis-je</h6>
                <div className="paragraph-me">
                    <p>
                    Amoureux de l'informatique depuis le lycée, j'ai décidé de me lancer dans ce domaine après l'obtention de mon bac, en particulier dans la conception de logiciels. Mes débuts ont été périlleux, semés d'obstacles, mais je n'ai pas abandonné. J'ai établi des objectifs ambitieux pour mes premières années d'études. Actuellement en Licence 3 Informatique, j'ai développé plusieurs compétences en algorithmique et en technologie. Après avoir consolidé ces acquis, j'ai décidé de me tourner vers la data science pour la suite de mon parcours académique.
                    </p>
                </div>
                <div className="my-cv">
                    <a href={mycv} download>Télécharger mon cv</a>
                </div>
            </div>
        </div>
    )
}

export default About;