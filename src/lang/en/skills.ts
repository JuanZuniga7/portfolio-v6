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
const skills: ISkills[] = [
    {
        title: "Languages",
        skills: [
            {name: "Spanish", cuantitative: "w-[100%]", cualitative: "Native", icon: Spanish},
            {name: "English", cuantitative: "w-[30%]", cualitative: "A2", icon: English},
        ]
    },
    {
        title: "Soft Skills", 
        skills: [
            {name: "Team Player", cuantitative: "w-[70%]", cualitative: "Advanced", icon: TeamWork},
            {name: "Proactivity", cuantitative: "w-[80%]", cualitative: "Advanced", icon: Proactive},
            {name: "Adaptable to Change", cuantitative: "w-[80%]", cualitative: "Advanced", icon: Change},
            {name: "Resilient", cuantitative: "w-[80%]", cualitative: "Advanced", icon: Cactus},
            {name: "Leadership", cuantitative: "w-[70%]", cualitative: "Advanced", icon: Leadership},
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {name: "C#", cuantitative: "w-[80%]", cualitative: "Advanced", date: "2021", icon: Csharp},
            {name: "TypeScript", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2021", icon: Typescript},
            {name: "Python", cuantitative: "w-[40%]", cualitative: "Intermediate", date: "2019", icon: Python},
            {name: "JavaScript", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2020", icon: Javascript},
            {name: "Java", cuantitative: "w-[40%]", cualitative: "Intermediate", date: "2021", icon: Java},
        ]
    },
    {
        title: "(Learning)",
        skills: [
            {name: "C", cuantitative: "w-[30%]", cualitative: "Beginner", date: "2024", icon: C},
            {name: "C++", cuantitative: "w-[20%]", cualitative: "Beginner", date: "2024", icon: Cpp},
            {name: "Golang", cuantitative: "w-[10%]", cualitative: "Beginner", date: "2023", icon: Golang},
            {name: "Kotlin", cuantitative: "w-[10%]", cualitative: "Beginner", date: "2024", icon: Kotlin},
            {name: "Bash", cuantitative: "w-[20%]", cualitative: "Beginner", date: "2024", icon: Bash},
        ]
    },
    {
        title: "(Want to Learn in the Future)",
        skills: [
            {name: "Rust", cuantitative: "w-[5%]", cualitative: "Just a bit", icon: Rust},
            {name: "Zig", cuantitative: "w-[1%]", cualitative: "Not yet", icon: Zig},
            {name: "Dart", cuantitative: "w-[1%]", cualitative: "Not yet", icon: Dart},
            {name: "Lua", cuantitative: "w-[5%]", cualitative: "Just a bit", icon: Lua},
        ]
    },
    {
        title: "Frameworks",
        skills: [
            {name: "Tailwind", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2021", icon: Tailwind},
            {name: "React", cuantitative: "w-[80%]", cualitative: "Advanced", date: "2021", icon: React},
            {name: "Angular", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2023", icon: Angular},
            {name: "Preact", cuantitative: "w-[40%]", cualitative: "Intermediate", date: "2024", icon: Preact},
            {name: "Next.js", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2022", icon: Nextjs},
            {name: "ASP.NET", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2021", icon: AspNet},
            {name: "Spring", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2021", icon: Spring},
            {name: "NestJS", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2022", icon: Nestjs},
        ]
    },
    {
        title: "Technical Skills",
        skills: [
            {name: "Docker", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2022", icon: Docker},
            {name: "Linux", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2023", icon: Linux},
            {name: "Azure", cuantitative: "w-[60%]", cualitative: "Intermediate", date: "2023", icon: Azure},
            {name: "Git", cuantitative: "w-[70%]", cualitative: "Advanced", date: "2020", icon: Git},
            {name: "Jira", cuantitative: "w-[50%]", cualitative: "Intermediate", date: "2021", icon: Jira},
        ]
    }
];


export default skills;