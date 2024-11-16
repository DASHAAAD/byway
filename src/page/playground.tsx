import { faker } from '@faker-js/faker';

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';
export const createRandomUser = () => {
    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType(),
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}


const user = createRandomUser();
// console.log(user)

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz