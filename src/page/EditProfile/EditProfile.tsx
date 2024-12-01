import React, { FC } from "react";
import styles from "./EditProfile.module.css";
import { List } from "./List";

import ButtonBlack from "@/components/ButtonBlack/ButtonBlack";
import { CardUser } from "@/components/cards/CardUser/CardUser";
import Input from "@/components/Input/Input";
import { Title } from "@/components/Title/Title";

interface Type {}
const EditProfile: FC<Type> = () => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} text="My profile" />
      <div className={styles.flex}>
        <CardUser />
        <div>
          <ul>
            <li>
              <h3 className={styles.subtitle}>Name</h3>
              <Input className={styles.input} placeholder="Ronald Richards" />
            </li>
            <li>
              <h3 className={styles.subtitle}>Headline</h3>
              <Input
                className={styles.input}
                placeholder="Web developer, UX/UI Designer, and Teacher"
              />
            </li>
          </ul>
          <div>
            <h3 className={styles.subtitle}>Description</h3>
            <div className={styles.info}>
              <p className={styles.text}>
                Ronald Richard is a highly skilled UX/UI Designer with over a
                decade of experience in crafting user-centric digital solutions.
                With a background in graphic design and a keen eye for detail,
                Ronald specializes in creating intuitive interfaces that delight
                users and drive business results.
              </p>
              <ul className={styles.list}>
                {List.map((item, nanoid: number) => {
                  <h4>Areas of Expertise</h4>;
                  return (
                    <li className={styles.listItem} key={nanoid}>
                      <p className={styles.listText}>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
              <p className={styles.text}>
                Professional ExperienceRonald Richard has an extensive
                professional background in UX/UI design, having worked with
                renowned companies such as [Company Name] and [Company Name].
                His portfolio includes a diverse range of projects spanning web
                applications, mobile apps, and e-commerce platforms.
              </p>
            </div>
            <div>
              <h3 className={styles.subtitle}>Language</h3>
              <Input
                className={styles.input}
                placeholder="English"
              />
            </div>
            <div>
              <h3 className={styles.subtitle}>Links</h3>
              <Input
                className={styles.input}
                placeholder="twitter.com/johndoe"
              />
              <Input
                className={styles.input}
                placeholder="instagram.com/johndoe"
              />
              <Input className={styles.input} placeholder="byway.com" />
            </div>
            <ButtonBlack className={styles.button} text="Save changes" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
