
import { NextResponse } from "next/server";

export async function GET() {
    const mockComments = [
        { id: 1, text: "Vi esto en VHS en 1995. Todavía tengo pesadillas.", author: "Agente Torres", color: "yellow" },
        { id: 2, text: "¿Quién financió esta locura?", author: "Det. Ramírez", color: "pink" },
        { id: 3, text: "CASO CERRADO. No apto para menores.", author: "Inspector López", color: "blue" },
        { id: 4, text: "La escena del baño... no puedo olvidarla.", author: "Analista Chen", color: "yellow" },
        { id: 5, text: "Amenaza nivel 5. Proteger a toda costa.", author: "Agente Smith", color: "pink" },
    ];

    return NextResponse.json(mockComments);
}
