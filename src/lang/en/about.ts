import type IAbout from "../../data/types/about.types";

const about: IAbout = {
    title: "About Me",
    sections: [
        {
            title: "Who am I?", 
            subtitle: "Beyond the code.", 
            content: [
                {data: "Hello, my name is Juan Camilo Zúñiga. I am a Systems Engineering student in the city of Santa Marta, Colombia."},
                {data: "In the field of software development, I have three years of professional experience as a full stack developer. Regarding independent development, although I cannot give an exact figure, I would say about four years, possibly a little more."},
                {data: "In my free time, outside of academics and professional life, I usually play basketball, listen to music, and sometimes draw. I spend almost all my downtime, like when commuting, reading one of my physical books, especially on philosophy."},
                {data: "Academically, I have completed approximately 80% of my courses. This is due to difficulties during the pandemic that prevented me from performing at my best, and also because of my time working, as it is a bit difficult to balance both things."},
            ]
        },
        //Why hire me
        {
            title: "Why hire me?",
            subtitle: "I don't just write code.",
            content: [
                {data: "Developing software goes far beyond just writing code to solve a problem, and I am fully aware of that. That's why I never limit myself to delivering a final product that only meets the requirements."},
                {data: "It is essential that it is maintainable and scalable. Therefore, I always strive to create code following the principles: ", list: [
                    "SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)",
                    "DRY (Don't Repeat Yourself)",
                    "KISS (Keep It Simple, Stupid)",
                ]},
                {data: "Moreover, I am always looking to learn and improve. I am constantly seeking new technologies, design patterns, development methodologies, etc., to enhance my work and way of thinking."},
                {data: "I am a very responsible and committed person. I always meet deadlines and ensure that the final product is of the highest possible quality."},
                {data: "And that's not all. I am proud to say that I adapt easily to changing environments and know how to stay calm under pressure."},
                {data: "Additionally, my greatest characteristic is that I am an excellent learner and tutor. I can understand complex concepts easily, and once understood, conveying those ideas to others is a piece of cake."},
            ],
        }
    ]
};

export default about;