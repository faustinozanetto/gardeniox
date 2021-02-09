import { UserCredentialsInput } from '../inputs';

export const validateUserRegister = (options: UserCredentialsInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Please enter a valid email!',
      },
    ];
  }

  return null;
};
