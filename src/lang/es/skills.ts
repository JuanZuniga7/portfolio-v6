import type ISkills from "../../data/types/skills.types";
//langs
import Spanish from "../../assets/svg/langs/Spanish.astro";
import English from "../../assets/svg/langs/English.astro";
//soft skills
import TeamWork from "../../assets/svg/soft_skills/TeamWork.astro";
import Proactive from "../../assets/svg/soft_skills/Proactive.astro";
import Change from "../../assets/svg/soft_skills/Change.astro";
import Cactus from "../../assets/svg/soft_skills/Cactus.astro";
import Leadership from "../../assets/svg/soft_skills/Leadership.astro";
// Languages that I know
import Csharp from "../../assets/svg/languages/Csharp.astro";
import Typescript from "../../assets/svg/languages/Typescript.astro";
import Python from "../../assets/svg/languages/Python.astro";
import Javascript from "../../assets/svg/languages/Javascript.astro";
import Java from "../../assets/svg/languages/Java.astro";
//Languages that I'm learning
import C from "../../assets/svg/languages/C.astro";
import Cpp from "../../assets/svg/languages/Cpp.astro";
import Golang from "../../assets/svg/languages/Golang.astro";
import Kotlin from "../../assets/svg/languages/Kotlin.astro";
import Bash from "../../assets/svg/languages/Bash.astro";
//Languages that I want to learn in the future
import Rust from "../../assets/svg/languages/Rust.astro";
import Zig from "../../assets/svg/languages/Zig.astro";
import Dart from "../../assets/svg/languages/Dart.astro";
import Lua from "../../assets/svg/languages/Lua.astro";
//frameworks
import Tailwind from "../../assets/svg/frameworks/Tailwind.astro";// 70%
import React from "../../assets/svg/frameworks/React.astro"; //80%
import Angular from "../../assets/svg/frameworks/Angular.astro"; //60%
import Preact from "../../assets/svg/frameworks/Preact.astro"; //40%
import Nextjs from "../../assets/svg/frameworks/Nextjs.astro"; //60%
import AspNet from "../../assets/svg/frameworks/AspNet.astro"; //70%
import Spring from "../../assets/svg/frameworks/Spring.astro"; //60%
import Nestjs from "../../assets/svg/frameworks/Nestjs.astro"; //60%
//Technical skills
import Docker from "../../assets/svg/technicals/Docker.astro"; //70%
import Linux from "../../assets/svg/technicals/Linux.astro"; //70%
import Azure from "../../assets/svg/technicals/Azure.astro"; //60%
import Git from "../../assets/svg/technicals/Git.astro"; //70%
import Jira from "../../assets/svg/technicals/Jira.astro"; //50%

//cualitative levels 0-30 iniciante, 31-60 intermedio, 61-90 avanzado, 91-100 experto

const skills: ISkills[] = [
    {
        title: "Idiomas",
        skills: [
            {name: "Español", cuantitative: "w-[100%]", cualitative: "Nativo", icon: Spanish},
            {name: "Inglés", cuantitative: "w-[30%]", cualitative: "A2", icon: English},
        ]
    },
    {
        title: "Habilidades Blandas", 
        skills:[
            {name: "Jugador en equipo", cuantitative: "w-[70%]", cualitative: "Avanzado", icon: TeamWork},
            {name: "Proactividad", cuantitative: "w-[80%]", cualitative: "Avanzado", icon: Proactive},
            {name: "Adaptable al cambio", cuantitative: "w-[80%]", cualitative: "Avanzado", icon: Change},
            {name: "Resiliente", cuantitative: "w-[80%]", cualitative: "Avanzado", icon: Cactus},
            {name: "Liderazgo", cuantitative: "w-[70%]", cualitative: "Avanzado", icon: Leadership},
        ]
    },
    {
        title: "Lenguajes de Programación",
        skills: [
            {name: "C#", cuantitative: "w-[80%]", cualitative: "Avanzado", date: "2021", icon: Csharp},
            {name: "Typescript", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2021", icon: Typescript},
            {name: "Python", cuantitative: "w-[40%]", cualitative: "Intermedio", date: "2019", icon: Python},
            {name: "Javascript", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2020", icon: Javascript},
            {name: "Java", cuantitative: "w-[40%]", cualitative: "Intermedio", date: "2021", icon: Java},
        ]
    },
    {
        title: "(Aprendiendo)",
        skills: [
            {name: "C", cuantitative: "w-[30%]", cualitative: "Iniciante", date: "2024", icon: C},
            {name: "C++", cuantitative: "w-[20%]", cualitative: "Iniciante", date: "2024", icon: Cpp},
            {name: "Golang", cuantitative: "w-[10%]", cualitative: "Iniciante", date: "2023", icon: Golang},
            {name: "Kotlin", cuantitative: "w-[10%]", cualitative: "Iniciante", date: "2024", icon: Kotlin},
            {name: "Bash", cuantitative: "w-[20%]", cualitative: "Iniciante", date: "2024", icon: Bash},
        ]
    },
    {
        title: "(Quiero aprender en el futuro)",
        skills:[
            {name: "Rust", cuantitative: "w-[5%]", cualitative: "Solo un poco", icon: Rust},
            {name: "Zig", cuantitative: "w-[1%]", cualitative: "Aun no", icon: Zig},
            {name: "Dart", cuantitative: "w-[1%]", cualitative: "Aun no", icon: Dart},
            {name: "Lua", cuantitative: "w-[5%]", cualitative: "Solo un poco", icon: Lua},
        ]
    },
    {
        title: "Frameworks",
        skills: [
            {name: "Tailwind", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2021", icon: Tailwind},
            {name: "React", cuantitative: "w-[80%]", cualitative: "Avanzado", date: "2021", icon: React},
            {name: "Angular", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2023", icon: Angular},
            {name: "Preact", cuantitative: "w-[40%]", cualitative: "Intermedio", date: "2024", icon: Preact},
            {name: "Nextjs", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2022", icon: Nextjs},
            {name: "AspNet", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2021", icon: AspNet},
            {name: "Spring", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2021", icon: Spring},
            {name: "Nestjs", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2022", icon: Nestjs},
        ]
    },
    {
        title: "Habilidades Técnicas",
        skills: [
            {name: "Docker", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2022", icon: Docker},
            {name: "Linux", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2023", icon: Linux},
            {name: "Azure", cuantitative: "w-[60%]", cualitative: "Intermedio", date: "2023", icon: Azure},
            {name: "Git", cuantitative: "w-[70%]", cualitative: "Avanzado", date: "2020", icon: Git},
            {name: "Jira", cuantitative: "w-[50%]", cualitative: "Intermedio", date: "2021", icon: Jira},
        ]
    }
]

export default skills;