import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Pega o cookie da sessão
  const sessionCookie = request.cookies.get("galaxy_session")?.value;
  const { pathname } = request.nextUrl;

  // 1. Tentar acessar rotas da Intranet sem estar logado -> Redireciona para /login
  if (pathname.startsWith("/dashboard") && !sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Tentar acessar a página de Login estando logado -> Redireciona para /dashboard
  if (pathname === "/login" && sessionCookie) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

// Configura em quais rotas o middleware vai rodar
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
