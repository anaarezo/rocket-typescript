interface TechObject {
  title: string;
  tech: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // When the type is variable or string[] = type equal
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = { name, email, password };
}
