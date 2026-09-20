import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "E-mail e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    // Busca o usuário no banco
    const user = await usersCollection.findOne({
      email: email.toLowerCase(),
      password,
    });

    if (!user) {
      return NextResponse.json(
        { message: "Credenciais de acesso inválidas." },
        { status: 401 }
      );
    }

    // Cria a resposta com o cookie de sessão simulado
    const userSession = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      status: user.status,
    };

    const response = NextResponse.json({
      message: "Acesso autorizado ao Terminal Central.",
      user: userSession,
    });

    // Salva a sessão em um Cookie seguro
    response.cookies.set("galaxy_session", JSON.stringify(userSession), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 dia
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Erro no servidor ao autenticar.", error: error.message },
      { status: 500 }
    );
  }
      }
  
