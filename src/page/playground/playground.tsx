// import { faker } from '@faker-js/faker';

import { FC } from "react";

export const Playground:FC = () => {
  return (
    <div>
      <form>
        {/* <input
          style={{ fontSize: "20px", color: "red" }}
          placeholder="email"
          onChange={(e) => emailInput(e.currentTarget.value)}
          value={email}
          type="text"
        /> */}
        <input type="text" />
        <input type="text" />
        {/* <input
          style={{ fontSize: "20px", color: "red" }}
          placeholder="password"
          onChange={(e) => passwordInput(e.currentTarget.value)}
          value={password}
          type="text"
        /> */}
      </form>
    </div>
  );
};

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
