interface User {
  name: string;
  age: number;
}

export function getAdults(users: (User | null)[]): User[] {
  const filterNull = (user: User | null): user is User => user !== null;
  return users.filter(filterNull).filter((user) => user.age >= 18);
}
