import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

export default async function middleware(request: NextRequest) {
  const defaultLocale = locales[0]; // jp
  const handleI18nRouting = createMiddleware({ locales, defaultLocale });

  const response = handleI18nRouting(request);
  response.headers.set('x-your-custom-locale', defaultLocale);

  if (isUrlAirports(request.nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL(`${request.nextUrl.pathname}/jp`, request.url),
    );
  }

  return response;
}

/**
 * /( ja || ko )/airports に来た時、true
 */
const isUrlAirports = (url: string) => {
  const regex = /^\/(ja|ko)\/airports$/;
  return regex.test(url);
};
