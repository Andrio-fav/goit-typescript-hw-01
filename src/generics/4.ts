type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  const previousUser: User = {
    name: 'user-name',
    surname: 'user-surname',
    email: '',
    password: '',
  };
  
  function createOrUpdateUser(initialValues: Partial<User>): User {
    return { ...previousUser, ...initialValues };
  }
  
  createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
  });