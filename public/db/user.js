const user = {
    name: "Damilare Protocol",
    image: "/assets/images/profile-picture.png",
    bio: "I am passionate about making a difference with my work and I thrive in a collaborative environment where teamwork and collaboration are valued.",
    about: "<p>Hello! I'm a software developer passionate about developing scalable web applications and solving complex problems. Through my years of experience, I've mastered the art of crafting clean, efficient, and user-friendly applications that scales.</p><p> One of my greatest skills is my ability to understand the business perspectives of software engineering. I'm a great communicator, both in writing and verbally, and I always prioritize teamwork and collaboration in my work. I also have experience mentoring junior developers, which has helped me develop my leadership skills.</p>",
    title: "Software Engineer",
    handle: "@mrprotocoll",
    cv: "https://drive.google.com/file/d/1mIrHPBmxV-9MpqXeO67f2mR3ddJSpAsg/view?usp=sharing",
    startYear: 2020,
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
            role: "Full-stack Developer",
            year: "2023 - Currently",
            achievements: "I am Spending 1300+ hours mastering algorithms, data structures, and full-stack development. And also Developing skills in pair programming using GitHub, industry-standard gitflow, and daily standups to collaborate with international remote developers."
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
            message: "I am currently contibuting to ",
            link: "https://github.com/hackjunction/JunctionApp",
            title: "JunctionApp",
            target: "_blank"
        },
        {
            message: " I am participating in ",
            link: "https://railshackathon.com",
            title: "Rails Hackathon 2023",
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
            name: "TourXtra",
            url: "tourxtra",
            role: "Full-stack",
            date: "2023",
            description: "TourXtra is a tour reservation web app designed to simplify the process of booking and managing tour reservations. It provides users with a seamless experience to browse available tours, select desired tour packages, specify booking details, and receive confirmation for their reservations. The application is developed using JavaScript, React, Redux, Ruby on Rails, and PostgreSQL.",
            tools: [ "JavaScript", "React", "Redux", "Ruby on Rails", "PostgrSQL", "Tailwind"],
            features: ["User Registration and Authentication using JWT","API Documentation using Rsawg","Testing: using Rspec and jest"],
            github: "https://github.com/mrprotocoll/tourXtra",
            link: "https://tourxtra.onrender.com",
            category: "Tour Reservation System",
            image: "/assets/images/projects/tourxtra.png",
            gallery: ["/assets/images/projects/tourxtra-1.png","/assets/images/projects/tourxtra-2.png","/assets/images/projects/tourxtra-3.png", "/assets/images/projects/tourxtra-4.png","/assets/images/projects/tourxtra-5.png","/assets/images/projects/tourxtra-6.png"]
        },
        {
            id: "2",
            name: "Recipe App",
            url: "recipe-app",
            role: "Full-stack",
            date: "2023",
            description: "The Recipe app is a user-friendly web application designed to help users keep track of their recipes and ingredients. It provides a platform for creating and saving recipes, managing ingredient lists, tracking available ingredients, and generating a shopping list. The application is built using Ruby on Rails and utilizes Bootstrap for styling.",
            tools: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "devise"],
            features: ["User Registration and Authentication using Devise","Shopping List Generation","Recipe Management","Ingredient Tracking","Testing: Rspec, capybara"],
            github: "https://github.com/microverse-journey/recipe_app",
            link: "https://recipe-app-ydj5.onrender.com",
            category: "Recipe and Ingeridient Web Application",
            image: "/assets/images/projects/recipe-logo.png",
            gallery: ["/assets/images/projects/recipe-1.png","/assets/images/projects/recipe-2.png","/assets/images/projects/recipe-3.png", "/assets/images/projects/recipe-4.png","/assets/images/projects/recipe-5.png","/assets/images/projects/recipe-6.png"]
        },
        {
            id: "3",
            name: "Budget App",
            url: "budget-app",
            role: "Full-stack",
            date: "2023",
            description: "The MP-Budget app is a mobile web application designed to help users manage their budget effectively. It provides a platform for tracking transactions associated with different categories, enabling users to monitor their spending and allocate their funds accordingly. The app is accessible via mobile devices and focuses on providing a user-friendly experience.",
            tools: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "devise"],
            features: ["User Registration and Authentication using Devise","Budget Overview: it provides an overview of the user's budget, displaying the total amount spent and allocated across different categories.","Category Management","Testing: Rspec, capybara"],
            github: "https://github.com/microverse-journey/mp-budget",
            link: "https://mp-budget.onrender.com/",
            category: "Budget Management Web Mobile App",
            image: "/assets/images/projects/budget-logo.png",
            gallery: ["/assets/images/projects/budget-1.png","/assets/images/projects/budget-2.png","/assets/images/projects/budget-3.png", "/assets/images/projects/budget-4.png","/assets/images/projects/budget-5.png"]
        },
        {
            id: "4",
            name: "Mp Bookstore",
            url: "mp-bookstore",
            role: "Front-end",
            date: "2023",
            description: "The Bookstore is a React/Redux application that integrates with an API to provide users with a seamless experience for managing a list of books. The app allows users to display a list of books, add new books, and remove selected books, all while leveraging the power of API integration and testing. The primary focus of the project is on React and Redux, ensuring an efficient and intuitive user experience.",
            tools: [ "JavaScript", "React", "Redux"],
            features: ["Book List Display: Users can view a list of books fetched from the API","Add New Books: Users can add new books to the bookstore by providing relevant details such as title and author","Testing: Jest, React Testing Library"],
            github: "https://github.com/mrprotocoll/bookstore",
            link: "https://mp-bookstore.onrender.com/",
            category: "Book Store Web Application",
            image: "/assets/images/projects/bookstore.png",
            gallery: ["/assets/images/projects/bookstore-1.png"]
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
            "Full-stack Development", "Datastructure & Algorithm", "OOP","Database Design", "Wordpress", "Test-driven Development","System Testing", "API Documentation","UML","Git-flow", "RESTful API", "Jest", "RSpec","System Design"
            ],
        soft: [
            "Cross-cultural Communication",  "Teamwork", "Remote Pair-programming","Agile Methodology"
        ]
    } 
}

export default user;