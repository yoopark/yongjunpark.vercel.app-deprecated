import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ko', 'en'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ko',

  // 영어 친화적인 사람이라도 한국어 먼저 보여주고 싶음.
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
