import type IProject from "../../data/types/project.type";
import Python from "../../assets/svg/languages/Python.astro";
import Bash from "../../assets/svg/languages/Bash.astro";
import Typescript from "../../assets/svg/languages/Typescript.astro";
import Tailwind from "../../assets/svg/frameworks/Tailwind.astro";
import Nextjs from "../../assets/svg/frameworks/Nextjs.astro";
import React from "../../assets/svg/frameworks/React.astro";
import Astro from "../../assets/svg/frameworks/Astro.astro";

//project 1
import qtile from "../../assets/image/projects/qtile/cover.png"
import qimage1 from "../../assets/image/projects/qtile/image1.png"

//project 2
import portafolioV5 from "../../assets/image/projects/portfolio-v5/cover.png"
import pimage1 from "../../assets/image/projects/portfolio-v5/image1.png"

export function getProjectById(id: number): IProject {
    const project = projects.find(project => project.id === id);
    if (project !== undefined) {
        return project;
    }
    window.location.href = "/404";
    throw new Error("Project not found");
}

const projects: IProject[] = [
    {
        id: 1,
        importance: "high",
        name: "Qtile WM Customization",
        cover: qtile,
        images: [
            qimage1,
            pimage1
        ],
        description: "Qtile is a dynamic tiling window manager for X11 and Wayland. It is very lightweight and configurable, and can be customized with Python.",
        projectDescription: [
            "Using a TWM (Tiling Window Manager) is one of the best decisions I've made in my professional career.",
            "It's true that one of the major downsides of using one of these is the excessive time you spend configuring it to your liking, but this only helped me improve my Python skills and understand certain things better.",
            "Out of the TWMs that caught my attention, Qtile was the one I liked the most because of its simplicity and being highly configurable with Python, which is a language I've been learning since I started my career, so I felt very comfortable with it.",
            "In the future, I plan to learn Lua to configure AwesomeWM and NeoVim, as well as BSPWM, which is another TWM I would like to learn to configure."
        ],
        complement: [
            { name: "Python", icon: Python },
            { name: "Bash", icon: Bash }
        ],
        state: "Waiting"
    },
    {
        id: 2,
        importance: "medium",
        name: "Portfolio V5",
        cover: portafolioV5,
        images: [
            pimage1
        ],
        description: "This is the fifth version of my personal portfolio. In this version, I completely redesigned the website and added new functionalities.",
        projectDescription: [
            "This project was based on other portfolios I saw on the internet, especially the code part. The main problem was that the code I saw had too much boilerplate (repetitive code) and was not very scalable.",
            "So I decided to do something similar using TypeScript instead of JavaScript and make all the data be received from JSON files and ts files that comply with an interface instead of having all the text to display mixed in the code.",
            "Additionally, the design is entirely mine, and I didn't use any design libraries. I only used Tailwindcss for styles and a bit of React for interactivity."
        ],
        complement: [
            { name: "TypeScript", icon: Typescript },
            { name: "Tailwindcss", icon: Tailwind },
            { name: "NextJs", icon: Nextjs },
            { name: "React", icon: React }
        ],
        state: "Finished"
    },
    {
        id: 3,
        importance: "high",
        name: "Portfolio V6",
        cover: portafolioV5,
        images: [
            pimage1
        ],
        complement: [
            { name: "Astro", icon: Astro },
            { name: "React", icon: React },
            { name: "TypeScript", icon: Typescript },
            { name: "Tailwindcss", icon: Tailwind }
        ],
        description: "In this 6th version, the main focus was SEO and the performance of the website. Therefore, switching from NextJs to Astro was the best option.",
        projectDescription: [
            "There really isn't much to say about the reasons that led me to undertake this project.",
            "My priority is always to be clear, concise, and direct with what I do, and in this case, it's no exception. Thus, the design is not as striking as in the previous version, but it serves its purpose."
        ],
        state: "Finished"
    }
];

export default projects;