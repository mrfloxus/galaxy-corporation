const BASE_URL = "https://unbelievaboat.com/api/v1";

const headers = {
  Authorization: process.env.UNBELIEVABOAT_TOKEN || "",
  "Content-Type": "application/json",
};

export interface UserBalance {
  user_id: string;
  guild_id: string;
  cash: number;
  bank: number;
  total: number;
}

// 1. Buscar saldo de um usuário específico
export async function getUserBalance(guildId: string, userId: string): Promise<UserBalance | null> {
  try {
    const res = await fetch(`${BASE_URL}/guilds/${guildId}/users/${userId}`, {
      headers,
      next: { revalidate: 60 }, // Cache de 60 segundos
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar saldo no UnbelievaBoat:", error);
    return null;
  }
}

// 2. Modificar saldo (Adicionar/Remover Dinheiro/Banco)
export async function updateUserBalance(
  guildId: string,
  userId: string,
  data: { cash?: number; bank?: number }
): Promise<UserBalance | null> {
  try {
    const res = await fetch(`${BASE_URL}/guilds/${guildId}/users/${userId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(data),
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Erro ao atualizar saldo no UnbelievaBoat:", error);
    return null;
  }
}

// 3. Buscar os mais ricos (Leaderboard)
export async function getLeaderboard(guildId: string, limit = 10) {
  try {
    const res = await fetch(`${BASE_URL}/guilds/${guildId}/users?limit=${limit}&sort=total`, {
      headers,
      next: { revalidate: 120 },
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar leaderboard no UnbelievaBoat:", error);
    return [];
  }
      }
  
