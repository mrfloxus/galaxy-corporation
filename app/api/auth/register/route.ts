import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, password, department } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    // Verifica se já existe um usuário com este e-mail
    const existingUser = await usersCollection.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { message: "Este e-mail corporativo já está cadastrado." },
        { status: 400 }
      );
    }

    // Estrutura do Usuário da Galaxy Corp
    const newUser = {
      name,
      email: email.toLowerCase(),
      password, // Em produção recomendaria hash, mas mantemos direto para simplificar o protótipo
      department: department || "Operações Gerais",
      role: "RECRUTA", // Cargos padrão: RECRUTA, OFICIAL, DIRETOR, ADMIN
      status: "PENDENTE", // PENDENTE, ATIVO, SUSPENSO
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json(
      {
        message: "Solicitação de credencial registrada com sucesso! Aguarde aprovação do comando central.",
        user: { name: newUser.name, email: newUser.email, role: newUser.role, status: newUser.status },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Erro ao processar registro.", error: error.message },
      { status: 500 }
    );
  }
         }
      
