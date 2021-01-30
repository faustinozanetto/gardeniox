/**
 * Returns true if app is in production or false if in development.
 */
export const __prod__: Boolean = process.env.NODE_ENV === 'production';
