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
        name: "Qtile WM Personalización",
        cover: qtile,
        images:[
            qimage1,
            pimage1 
        ],
        description: "Qtile es un gestor de ventanas de mosaico dinámico para X11 y Wayland. Es muy ligero y configurable, y se puede personalizar con Python.",
        projectDescription:[
            "El uso de un TWM (Tiling Window Manager) es una de las mejores decisiones que he tomado en mi carrera profesional.",
            "Es cierto que uno de los grandes contras de usar uno de estos es el excesivo tiempo que pasas configurandolo para tenerlo a tu gusto, pero esto solo me ayudo a mejorar mis habilidades en Python y a entender un poco mejor ciertas cosas.",
            "De los TWM que me llamaban la atención, Qtile fue el que más me gusto por su simplicidad y por ser muy configurable con Python, el cual es un lenguaje que llevo aprendiendo desde que entre a la carrera, por lo que me sinti muy comodo con el.",
            "En un futuro tengo pensando aprender Lua para aprender a configurar AwesomeWM y NeoVim, ademas de BSPWM que es otro TWM que me gustaria aprender a configurar.",
        ],
        complement: [
            {name: "Python", icon: Python, version: ">3.10"},
            {name: "Bash", icon: Bash, version: "any"}
        ],
    },
    {
        id: 2,
        importance: "medium",
        name: "Portafolio V5",
        cover: portafolioV5,
        images:[
            pimage1
        ],
        description: "Este es la quinta versión de mi portafolio personal. En esta versión, he rediseñado completamente el sitio web y agregado nuevas funcionalidades.",
        projectDescription: [],
        complement:[
            {name: "Typescript", icon: Typescript, version: "any"},
            {name: "Tailwindcss", icon: Tailwind, version: "any"},
            {name: "NextJs", icon: Nextjs, version: "V14"},
            {name: "React", icon: React, version: "V18"}
        ],
    },
    {
        id: 3,
        importance: "high",
        name: "Portafolio V6",
        cover: portafolioV5,
        images:[
            pimage1
        ],
        complement:[
            {name: "Astro", icon: Astro, version: "V4"},
            {name: "React", icon: React, version: "V18"},
            {name: "Typescript", icon: Typescript, version: "any"},
            {name: "Tailwindcss", icon: Tailwind, version: "any"},
        ],
        description:"En esta 6ta version el objetivo principal fue el SEO y el performance del sition web. Por lo que cambiar de NextJs a Astro fue la mejor opción.",
        projectDescription: [],
    }
];

export default projects;