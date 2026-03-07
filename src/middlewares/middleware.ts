import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Idiomas soportados por tu porfolio
const locales = ["en", "es"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Verificamos si el pathname ya incluye un locale soportado
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // 2. Si no tiene locale (ej: la raíz /), detectamos preferencia o usamos default
  // Podrías usar 'accept-language' de los headers para ser más pro,
  // pero por ahora redirigimos al default de forma limpia.
  const locale = defaultLocale;

  // 3. Redirigimos a la versión con el idioma (ej: / -> /es)
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcheamos todas las rutas excepto archivos públicos (imágenes, favicon, etc.)
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};
