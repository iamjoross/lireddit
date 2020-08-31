export const __prod__ = process.env.NODE_ENV === 'production';
export const __front_origin__ =
  process.env.NODE_ENV !== 'production'
    ? 'http://dev.test-site.com:3000'
    : undefined;
export const __back_origin__ =
  process.env.NODE_ENV !== 'production'
    ? 'http://dev.test-site.com:4000'
    : undefined;
