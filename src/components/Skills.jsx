import '../styles/skills.css';
function Skills(){
    return(
        <div id='skills'>
            <section className="skills-container">
                <h2>Mes compétences</h2>
                <div className="skill-content">
                    <div className="frontend">
                        <div><span>HTML5</span> <div className='skill-bar'><span className='skill-progress'>90%</span></div></div>
                        <div><span>CSS</span> <div className='skill-bar'><span className='skill-progress'>80%</span></div></div>
                        <div><span>JAVASCRIPT(Poo)</span> <div className='skill-bar'><span className='skill-progress'>70%</span></div></div>
                        <div><span>REACT JS </span> <div className='skill-bar'><span className='skill-progress'>50%</span></div></div>
                        <div><span>BOOSTRAP</span> <div className='skill-bar'><span className='skill-progress'>65%</span></div></div>
                    </div>
                    <div className="backend">
                        <div><span>PHP</span> <div className="skill-bar"><span className='skill-progress'>70%</span></div></div>
                        <div><span>PYTHON(Pandas,Scrapping web)</span> <div className='skill-bar'><span className='skill-progress'>60%</span></div></div>
                        <div><span>DJANGO</span> <div className='skill-bar'><span className='skill-progress'>40%</span></div></div>
                        <div><span>MYSQL </span> <div className='skill-bar'><span className='skill-progress'>60%</span></div></div>
                        <div><span>JAVA </span> <div className='skill-bar'><span className='skill-progress' >35%</span></div></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;