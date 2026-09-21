import { NextResponse } from "next/server";
import { getUserBalance } from "../../../../lib/unbelievaboat";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const discordId = searchParams.get("discordId");
  const guildId = process.env.GUILD_ID;

  if (!discordId || !guildId) {
    return NextResponse.json(
      { message: "ID do Discord ou GUILD_ID não fornecido." },
      { status: 400 }
    );
  }

  const balance = await getUserBalance(guildId, discordId);

  if (!balance) {
    return NextResponse.json(
      { message: "Não foi possível carregar o saldo do UnbelievaBoat." },
      { status: 500 }
    );
  }

  return NextResponse.json(balance);
}

