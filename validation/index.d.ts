/**
 * mail validator
 */
export function isMail(email: string): boolean;

interface Toptions {
  required?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
}
