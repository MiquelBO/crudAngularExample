import { factory, primaryKey } from "@mswjs/data";
import { faker } from '@faker-js/faker';

// Define user model
export const db = factory({
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
    email: String,
    birthDate: String
  },
});

db.user.create({
  name: 'Ramon Vila Roca',
  email: 'email1',
  birthDate: '1/1/1970'
});
