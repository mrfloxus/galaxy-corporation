import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    // Conecta ao banco de dados (pega o nome configurado na URI ou o padrão)
    const db = client.db();

    // Executa o comando ping no MongoDB para checar o status
    const pingResult = await db.command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "🚀 Conexão com o MongoDB Atlas estabelecida com sucesso!",
      dbName: db.databaseName,
      ping: pingResult,
    });
  } catch (error: any) {
    console.error("Erro ao conectar ao MongoDB:", error);
    return NextResponse.json(
      {
        success: false,
        message: "❌ Falha ao conectar no MongoDB Atlas",
        error: error.message || "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
