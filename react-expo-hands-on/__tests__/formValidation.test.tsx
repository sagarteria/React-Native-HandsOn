// app/__tests__/formValidation.test.tsx
import { validateRegistration } from '../utils/formValidation';

describe('Registration form validation', () => {
  it('returns error if both fields are empty', () => {
    expect(validateRegistration('', '')).toBe('All fields are required!');
  });

  it('returns error if email is invalid', () => {
    expect(validateRegistration('John Doe', 'johnexample.com')).toBe('Enter a valid email!');
  });

  it('returns "" if inputs are valid', () => {
    expect(validateRegistration('John Doe', 'john@example.com')).toBe('');
  });
});
