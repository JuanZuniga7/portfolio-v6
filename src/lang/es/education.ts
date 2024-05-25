import type IEducation from "../../data/types/education.types";

const education: IEducation[] = [
    {
        title: "Educación Superior",
        institutions:[
            {name: "Sena", degree: "Tecnico en instalaciones electricas residenciales", start: "2018", end: "", done: true},
            {name: "Universidad del Magdalena", degree: "Ingeniería de Sistemas", start: "Agosto 1, 2019", end: "2025", done: false},
        ]
    },
    {
        title: "Bootcamps",
        institutions:[
            {name: "Alura Latam", degree: "Oracle Next Education Java Back-end", start: "Abril 2023", end: "Octubre 2023", done: true}
        ]
    },
    {
        title: "Cursos",
        institutions:[
            {name: "Meta", degree: "Introduction to Android Mobile Application Development", start: "Febrero 10, 2024", end: "Febrero 29, 2024", done: true},
        ]
    }
];

export default education;