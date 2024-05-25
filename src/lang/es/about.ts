import type IAbout from "../../data/types/about.types";

const about: IAbout = {
    title: "Sobre Mi",
    sections:[
        {
            title: "¿Quién soy?", 
            subtitle: "Más allá del código.", 
            content: [
                {data: "Hola, mi nombre es Juan Camilo Zúñiga. Soy estudiante de Ingeniería de Sistemas en la ciudad de Santa Marta, Colombia."},
                {data: "En el ámbito del desarrollo de software, tengo tres años de experiencia profesional como desarrollador full stack. En cuanto al desarrollo independiente, aunque no puedo dar una cifra exacta, diría que cerca de cuatro años, posiblemente un poco más."},
                {data: "En mi tiempo libre, fuera de lo académico y profesional, suelo practicar baloncesto, escuchar música y a veces dibujar. Casi todo mi tiempo muerto, como cuando me transporto a algún lugar, lo aprovecho para leer alguno de mis libros físicos, especialmente sobre filosofía."},
                {data: "En cuanto a lo académico, he cursado aproximadamente el 80% de mis asignaturas. Esto se debe a dificultades durante la pandemia que no me permitieron rendir al máximo, y también a mi tiempo trabajando, ya que es un poco difícil balancear ambas cosas."},
            ]
        },
        //Porque contratarme
        {
            title: "¿Por qué contratarme?",
            subtitle: "No solo escribo código.",
            content: [
                {data:"Desarrollar software va mucho más allá de simplemente escribir código para resolver un problema, y soy plenamente consciente de ello. Por eso, nunca me limito a entregar un producto final que solo cumpla con los requisitos."},
                {data:"Es esencial que sea mantenible y escalable. Por lo tanto, siempre busco crear código siguiendo los principios: ", list:[
                    "SOLID (Responsabilidad unica, Abierto/Cerrado, Sustitución de Liskov, Segregación de la interfaz, Inversión de dependencias)",
                    "DRY (Don't Repeat Yourself)",
                    "KISS (Keep It Simple, Stupid)",
                ]},
                {data: "Además, siempre busco aprender y mejorar. Siempre estoy buscando nuevas tecnologías, patrones de diseño, metodologías de desarrollo, etc. para mejorar mi trabajo y mi forma de pensar."},
                {data: "Soy una persona muy responsable y comprometida con mi trabajo. Siempre cumplo con los plazos y me aseguro de que el producto final sea de la mejor calidad posible."},
                {data: "Y eso no es todo. Me enorgullece decir que me adapto con facilidad a entornos cambiantes y sé mantener la calma trabajando bajo presión."},
                {data: " Además, mi mayor característica es que soy un excelente aprendiz y tutor. Puedo entender conceptos complejos con facilidad y, una vez comprendidos, transmitir esas ideas a los demás es pan comido."},
            ],
        }
    ]
};


export default about;