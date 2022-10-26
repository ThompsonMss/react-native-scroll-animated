import { faker } from "@faker-js/faker/locale/pt_BR";

export interface IUser {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  birthdate: Date;
}

export function getDataUsers() {
  const USERS: IUser[] = [];

  Array.from({ length: 30 }).forEach(() => {
    USERS.push({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
    });
  });

  return USERS;
}
