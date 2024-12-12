import React, { FC, FunctionComponent, useState } from "react";
import styles from "./EditProfile.module.css";
import { List } from "./edit-profile-list";

import ButtonBlack from "@/components/button/button";

import Input from "@/components/input/input";
import { Title } from "@/components/title/title";
import { MenuEditProfile } from "@/components/menu/menu-ui.stories";
import { NavWrapper } from "@/components/menu/menu";
import { CardUser } from "@/components/cards/user-card/user-card";
import { OneUser } from "@/components/cards/user-card/user-card-ui.stories";
import { Container } from "@/components/Container";
import { useDispatch } from "react-redux";
import { addText } from "@/slice/text-slice";
import { useNavigate } from "react-router-dom";

const EditProfile: FunctionComponent = () => {
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [language, setLanguage] = useState("");
  const [LinksOne, setLinksOne] = useState("");
  const [LinkstWO, setLinksTwo] = useState("");
  const [LinksThree, setLinksThree] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    dispatch(
      addText({ name, headline, language, LinksOne, LinkstWO, LinksThree })
    );
    navigate('/Profile')
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <Title className={styles.title} text="My profile" />
        <div className={styles.flex}>
          <div>
            <CardUser {...OneUser.args} />
            <NavWrapper {...MenuEditProfile.args} />
          </div>
          <div>
            <ul>
              <li>
                <h3 className={styles.subtitle}>Name</h3>
                <Input
                  onChange={(e) => setName(e.currentTarget.value)}
                  className={styles.input}
                  placeholder="Ronald Richards"
                />
              </li>
              <li>
                <h3 className={styles.subtitle}>Headline</h3>
                <Input
                  onChange={(e) => setHeadline(e.currentTarget.value)}
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
                  decade of experience in crafting user-centric digital
                  solutions. With a background in graphic design and a keen eye
                  for detail, Ronald specializes in creating intuitive
                  interfaces that delight users and drive business results.
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
                  His portfolio includes a diverse range of projects spanning
                  web applications, mobile apps, and e-commerce platforms.
                </p>
              </div>
              <div>
                <h3 className={styles.subtitle}>Language</h3>
                <Input
                  onChange={(e) => setLanguage(e.currentTarget.value)}
                  className={styles.input}
                  placeholder="English"
                />
              </div>
              <div>
                <h3 className={styles.subtitle}>Links</h3>
                <Input
                  onChange={(e) => setLinksOne(e.currentTarget.value)}
                  className={styles.input}
                  placeholder="twitter.com/johndoe"
                />
                <Input
                  onChange={(e) => setLinksTwo(e.currentTarget.value)}
                  className={styles.input}
                  placeholder="instagram.com/johndoe"
                />
                <Input
                  onChange={(e) => setLinksThree(e.currentTarget.value)}
                  className={styles.input}
                  placeholder="byway.com"
                />
              </div>
              <ButtonBlack
                className={styles.button}
                text="Save changes"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default EditProfile;
