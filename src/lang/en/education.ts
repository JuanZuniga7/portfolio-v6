import type IEducation from "../../data/types/education.types";

const education: IEducation[] = [
    {
        title: "Higher Education",
        institutions: [
            {name: "Sena", degree: "Technician in Residential Electrical Installations", start: "2018", end: "", done: true},
            {name: "Universidad del Magdalena", degree: "Systems Engineering", start: "August 1, 2019", end: "2025", done: false},
        ]
    },
    {
        title: "Bootcamps",
        institutions: [
            {name: "Alura Latam", degree: "Oracle Next Education Java Back-end", start: "April 2023", end: "October 2023", done: true}
        ]
    },
    {
        title: "Courses",
        institutions: [
            {name: "Meta", degree: "Introduction to Android Mobile Application Development", start: "February 10, 2024", end: "February 29, 2024", done: true},
        ]
    }
];

export default education;