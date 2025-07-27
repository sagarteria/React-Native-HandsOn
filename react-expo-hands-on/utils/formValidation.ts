// utils/formValidation.ts
export function validateRegistration(name: string, email: string): string {
  if (!name || !email) return 'All fields are required!';
  if (!email.includes('@')) return 'Enter a valid email!';
  return '';
}

export function validateForm(name: string, email: string): string {
  if (!name || !email) return 'Fields cannot be empty';
  if (!email.includes('@')) return 'Invalid email';
  return '';
}
