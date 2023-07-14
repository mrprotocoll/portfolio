import Card from "@components/card/Card";
import CardInfo from "@components/card/CardInfo";

const Skills = () => {
    const data = [ 
        [
        "Full-stack Development", "Datastructure & Algorithm", "OOP","Database Design", "Wordpress", "Test-driven Development","System Testing", "API Documentation","UML","Git-flow", "RESTful API", "Jest", "RSpec","System Design"
        ],
        [
            "Cross-cultural Communication",  "Teamwork", "Remote Pair-programming","Agile Methodology"
        ],
    ];

    return (
        <div data-aos="zoom-in" className="">
            <Card classes="about-profile-box" link="/about">
                <h6>Technical Skills</h6>
                <ul className="d-flex flex-wrap gap-2 mb-4">
                    {
                        data[0].map((skill, x) => (
                            <li key={x}><button className="badge">{skill}</button></li>
                        ))
                    }
                </ul>

                <h6>Professional Skills</h6>
                <ul className="d-flex flex-wrap gap-2 mb-4">
                    {
                        data[1].map((skill, x) => (
                            <li key={x}><button className="badge">{skill}</button></li>
                        ))
                    }
                </ul>

                <div className="d-flex align-items-center justify-content-between">
                    <CardInfo name="TECHNICAL & PROFESSIONAL SKILLS" title="Skills" />
                </div>
            </Card>
        </div>
    )
}

export default Skills;