
import { NextResponse } from "next/server";

export async function GET() {
    const movies = [
        {
            id: 1,
            title: "Attack of the Killer Tomatoes",
            year: "1978",
            genre: "Tentáculos",
            rating: "2.5/10",
            director: "John De Bello",
            synopsis:
                "Tomates asesinos aterrorizan una ciudad. El gobierno envía un agente especial para detener la amenaza vegetal más ridícula de la historia del cine.",
            threatLevel: "MEDIO",
        },
        {
            id: 2,
            title: "The Room",
            year: "2003",
            genre: "Viajes Falopa",
            rating: "3.7/10",
            director: "Tommy Wiseau",
            synopsis:
                "Un drama romántico que se convirtió en el Citizen Kane de las malas películas. 'Oh hi Mark' es solo el comienzo de esta obra maestra del desastre.",
            threatLevel: "EXTREMO",
        },
        {
            id: 3,
            title: "Troll 2",
            year: "1990",
            genre: "Adolescentes Tontos",
            rating: "2.9/10",
            director: "Claudio Fragasso",
            synopsis:
                "No hay trolls en Troll 2. Solo duendes vegetarianos que convierten humanos en plantas. Bienvenido a Nilbog (deletrea al revés).",
            threatLevel: "ALTO",
        },
        {
            id: 4,
            title: "Plan 9 from Outer Space",
            year: "1957",
            genre: "Viajes Falopa",
            rating: "4.0/10",
            director: "Ed Wood",
            synopsis:
                "Aliens resucitan muertos para evitar que la humanidad construya una bomba solarita. Platos voladores de cartón y actuaciones memorables.",
            threatLevel: "BAJO",
        },
        {
            id: 5,
            title: "The Toxic Avenger",
            year: "1984",
            genre: "Gore Gratuito",
            rating: "6.3/10",
            director: "Michael Herz",
            synopsis:
                "Un conserje cae en residuos tóxicos y se convierte en un superhéroe deforme. Violencia cartoon y justicia vigilante en New Jersey.",
            threatLevel: "ALTO",
        },
        {
            id: 6,
            title: "Sharknado",
            year: "2013",
            genre: "Tentáculos",
            rating: "3.3/10",
            director: "Anthony C. Ferrante",
            synopsis:
                "Un tornado lleno de tiburones ataca Los Ángeles. Es exactamente lo que suena y aún así es peor de lo que imaginas.",
            threatLevel: "MEDIO",
        },
        {
            id: 7,
            title: "Rubber",
            year: "2010",
            genre: "Viajes Falopa",
            rating: "5.8/10",
            director: "Quentin Dupieux",
            synopsis:
                "La historia de Robert, un neumático con poderes telequinéticos que se enamora de una mujer. Sí, leíste bien. Un neumático.",
            threatLevel: "EXTREMO",
        },
        {
            id: 8,
            title: "Evil Dead",
            year: "1981",
            genre: "Gore Gratuito",
            rating: "7.5/10",
            director: "Sam Raimi",
            synopsis:
                "Cinco amigos en una cabaña invocan demonios con un libro maldito. Sangre, posesiones, motosierra y Bruce Campbell en su mejor momento.",
            threatLevel: "ALTO",
        },
        {
            id: 9,
            title: "I Know What You Did Last Summer",
            year: "1997",
            genre: "Adolescentes Tontos",
            rating: "5.8/10",
            director: "Jim Gillespie",
            synopsis:
                "Cuatro adolescentes atropellan a alguien y huyen. Un año después, un pescador con gancho busca venganza. Gritos garantizados.",
            threatLevel: "MEDIO",
        },
    ];

    return NextResponse.json(movies);
}
