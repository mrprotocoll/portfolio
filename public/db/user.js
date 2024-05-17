const user = {
    name: "Damilare Protocol",
    image: "/assets/images/mrprotocoll.png",
    bio: "I am passionate about making a difference with my work and I thrive in a collaborative environment where teamwork and collaboration are valued.",
    about: "<p>Hello! I'm a software developer passionate about developing scalable web applications and solving complex problems. Through my years of experience, I've mastered the art of crafting clean, efficient, and user-friendly applications that scales.</p><p> One of my greatest skills is my ability to understand the business perspectives of software engineering. I'm a great communicator, both in writing and verbally, and I always prioritize teamwork and collaboration in my work. I also have experience mentoring junior developers, which has helped me develop my leadership skills.</p>",
    title: "Software Engineer",
    handle: "@mrprotocoll",
    cv: "https://docs.google.com/document/d/e/2PACX-1vR_h8GTRWXlfqo86xBQj0ZtTMH74CLSmiJbide5K67Osm_GW9U-Cl4YQPSJSe6qx8I8_jC2PZs-2m0Y/pub",
    startYear: 2019,
    socials: {
        linkedin: "https://www.linkedin.com/in/mrprotocoll", 
        twitter: "https://twitter.com/dprotocoll", 
        github: "https://github.com/mrprotocoll", 
        mail: "https://mail.google.com/mail/?view=cm&to=lekanvgbg@gmail.com", 
        medium: "https://medium.com/@mrprotocoll"
    },
    education: [
        {
            company: "Microverse",
            role: "Full-stack Development",
            year: "2022",
            achievements: "I spent 1300+ hours mastering algorithms, data structures, and full-stack development. I also Developed skills in pair programming using GitHub, industry-standard gitflow, and daily stand-ups to collaborate with international remote developers."
        },
        {
            company: "Yaba College of Technology",
            role: "Higher National Diploma in Computer Science",
            year: "2016 - 2022",
            achievements: "I Acquired a strong foundation in computer science principles, including programming languages, algorithms, and data structures. And I Developed analytical and problem-solving skills through coursework and hands-on projects."
    
        }
    ],
    experience: [
        {
            company: "Ryvsion",
            role: "Senior Backend Engineer",
            year: "2023 - Currently",
            achievements: "Developed and Deployed Products: Successfully designed, developed, and deployed two major products that significantly enhanced the company's service offerings and customer satisfaction.\n" +
                "Mentorship and Code Optimization: Guided and mentored junior developers, optimizing the codebase and instilling best practices in software engineering, leading to improved code quality and team efficiency.\n" +
                "AWS and GitHub Management: Efficiently managed the company's AWS infrastructure, ensuring high availability, security, and cost-effectiveness, while also maintaining and optimizing GitHub repositories to streamline development workflows and version control processes."
        },
        {
            company: "Alluvium HQ",
            role: "Software Developer",
            year: "2022 - 2023",
            achievements: "One of the achievements I am proud of is I implemented and managed Alluvium University's Learning Management System using Moodle, showcasing proficiency in LMS, and learning new technologies quickly. I Collaborated with UI/UX designers to solve user experience problems, leveraging skills in critical thinking, problem-solving, and creativity."
        },
        {
            company: "Norak Technologies Limited",
            role: "Software Developer",
            year: "2019 - 2021",
            achievements: "Started as an intern for 7 months and got a full-time role afterward. One of my achievements is the #AfricaVsVirus Challenge Top 20 Award I received for contributing to ACADASUITE School Management Software, demonstrating excellence in software development and innovation."
        }
        
    ],
    headline: [
        {
            message: " I am currently building ",
            link: "https://github.com/mrprotocoll/resplify",
            title: "Resplify",
            target: "_blank"
        },
        {
            message: "I am currently contributing to ",
            link: "https://github.com/RoadTrip-Community/Wokhive-Frontend",
            title: "WokHive",
            target: "_blank"
        },
        {
            message: "Open to a coffee chat? <span>&#x1F603;</span>.",
            link: "/contact",
            title: "COFFEE CHAT",
            target: "_self"
        }
    ],
    projects: [
        {
            id: "1",
            name: "Idara",
            url: "Idara",
            role: "Backend",
            date: "2023",
            description: "The Idara project is a comprehensive web application aimed at easing the complexities of business registration and regulatory compliance across Africa. The platform offers a suite of services to assist businesses in incorporating, managing compliance obligations, and obtaining necessary licenses. Users can navigate the intricate legal landscape with ease, thanks to the services and tools provided by Idara. The website is designed with an intuitive user interface and is focused on delivering efficient and streamlined experiences for businesses." +
                "\n" +
                "I worked as a Backend Engineer on the Idara project and was responsible for developing robust backend functionalities using Laravel. My key contributions include crafting APIs, integrating various services, ensuring security and efficiency of the backend processes, and managing the database. Additionally, I handled the deployment of the web application on AWS, ensuring high availability and scalability.",
            tools: [ "Laravel", "MySQL", "AWS (EC2, RDS, S3)", "Git","Github Actions", "Pest", "Db-diagram (ERD)"],
            features: ["Business Registration","Fintech Licensing","API Documentation using Swagger","Testing: using PhpUnit", 'User, Agent and Admin Dashboard'],
            github: "#",
            link: "https://goidara.com",
            category: "Business Registration and Compliance Web Application",
            image: "/assets/images/projects/idara/idara.png",
            gallery: ["/assets/images/projects/idara/idara-1.png","/assets/images/projects/idara/idara-2.png","/assets/images/projects/idara/idara-3.png", "/assets/images/projects/idara/idara-4.png","/assets/images/projects/idara/idara-5.png"]
        },
        {
            id: "2",
            name: "Craftcheck AI",
            url: "craftcheck",
            role: "Backend",
            date: "2024",
            description: "CraftCheck AI is an innovative web application designed to audit and optimize websites for better conversion rates. Users can easily input their website URL to receive a detailed analysis that highlights areas for improvement and suggests actionable steps to enhance user experience, design, and overall performance. This platform helps users turn their leads into paying clients through data-driven recommendations and AI-powered insights.\n" +
                "\n" +
                "I was responsible for developing the backend of CraftCheck AI using Laravel and ensuring seamless deployment to AWS. My role was pivotal in creating a robust and efficient backend system that handles user inputs, processes website audits, and generates comprehensive reports.",
            tools: [ "Laravel", "PostgreSQL", "AWS (EC2, RDS, S3)", "Git","Github Actions", "Pest", "Db-diagram (ERD)"],
            features: ["Website Audit","Detailed Recommendations","API Documentation using Swagger","Testing: using Pest", 'User and Admin Dashboard',"Automated Reports"],
            github: "#",
            link: "https://ai.mycraftcheck.com",
            category: "Website and Conversion Optimization Application",
            image: "/assets/images/projects/craftcheck/craftcheck.png",
            gallery: ["/assets/images/projects/craftcheck/craftcheck-1.png","/assets/images/projects/craftcheck/craftcheck-2.png","/assets/images/projects/craftcheck/craftcheck-3.png", "/assets/images/projects/craftcheck/craftcheck-4.png"]
        }
    ],
    tools: [
        {
            image: "/assets/images/tech/javascript.png",
            link: "#",
            title: "JavaScript"
        },
        {
            image: "/assets/images/tech/reactjs.png",
            link: "#",
            title: "ReactJs"
        },
        {
            image: "/assets/images/tech/redux.png",
            link: "#",
            title: "Redux"
        },
        {
            image: "/assets/images/tech/tailwind.png",
            link: "#",
            title: "Tailwind"
        },
        {
            image: "/assets/images/tech/bootstrap.png",
            link: "#",
            title: "Bootstrap"
        },
        {
            image: "/assets/images/tech/figma.png",
            link: "#",
            title: "Figma"
        },
        {
            image: "/assets/images/tech/php.png",
            link: "#",
            title: "PHP"
        },
        {
            image: "/assets/images/tech/laravel.png",
            link: "#",
            title: "Laravel"
        },
        {
            image: "/assets/images/tech/ruby.png",
            link: "#",
            title: "Ruby"
        },
        {
            image: "/assets/images/tech/rails.png",
            link: "#",
            title: "Rails"
        },
        {
            image: "/assets/images/tech/mysql.png",
            link: "#",
            title: "MySQL"
        },
        {
            image: "/assets/images/tech/postgresql.png",
            link: "#",
            title: "PostgreSQL"
        },
        {
            image: "/assets/images/tech/github.png",
            link: "#",
            title: "Github"
        },
        {
            image: "/assets/images/tech/docker.png",
            link: "#",
            title: "Docker"
        },
        {
            image: "/assets/images/tech/aws.png",
            link: "#",
            title: "AWS"
        }
    ],
    skills: {
        hard: [
            "Full-stack Development", "Data structures & Algorithm", "OOP","Database Design", "Test-driven Development","System Testing", "API Documentation","UML","Git-flow", "RESTFul API", "PHPUnit", "Scribe", "Jest", "RSpec"
            ],
        soft: [
            "Cross-cultural Communication",  "Leadership", "Teamwork", "Remote Pair-programming","Agile Methodology"
        ]
    } 
}

export default user;
