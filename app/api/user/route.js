import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/dist/types/server";

export async function GET() {
    // Usamos auth() para obtener el Id del user
    const { userId } = await auth();

    // Protegemos la ruta comprobando si el user está signed in - ha iniciado sesión
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401})
    }

    // Usamos currentUser() para obtener el objeto Backend API User
    const user = await currentUser();

    // Añadimos la lógica Route Handler con el objeto del user devuelto/retornado
    
    return NextResponse.json({ user: user }, { status: 200 });
}