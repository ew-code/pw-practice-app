import { RegisterUserModel } from '../models/user.model';
import { faker } from '@faker-js/faker/locale/en';

export default function prepareRandomUser(): RegisterUserModel {
  const registerUserData: RegisterUserModel = {
    fullName: faker.person.firstName().concat(' ', faker.person.lastName()),
    email: '',
    password: faker.internet.password(),
  };

  registerUserData.email = faker.internet.email({
    firstName: registerUserData.fullName,
  });

  return registerUserData;
}