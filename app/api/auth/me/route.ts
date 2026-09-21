import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("galaxy_session")?.value;

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const userData = JSON.parse(session);
    return NextResponse.json({ authenticated: true, user: userData });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

