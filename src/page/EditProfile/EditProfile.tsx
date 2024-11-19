import ButtonBlack from '@/components/ButtonBlack/ButtonBlack';
import { CardUser } from '@/components/cards/CardUser/CardUser';
import Input from '@/components/formItem/FormItem';
import { Nav } from '@/components/NavigationMenu/Nav';
import { Title } from '@/components/Title/Title';
import React, { FC } from 'react'

interface Type {

}

const EditProfile: FC<Type> = () => {
    return (
        <div>
            <Title text='My profile' />
            {/* лево */}
            <div>
                <CardUser />
                <Nav />
            </div>

            {/* право */}
            <div>
                <ul>
                    <li>
                        <h3>Name</h3>
                        <Input />
                    </li>
                    <li>
                        <h3>Headline</h3>
                        <Input />
                    </li>
                </ul>
                <div>
                    <h3>Description</h3>
                    <p>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</p>
                    <ul>
                        <li>Areas of Expertise</li>
                        <li>User Experience (UX) Design</li>
                        <li>User Interface (UI) Design</li>
                        <li>Information Architecture</li>
                        <li>Interaction Design</li>
                        <li>Visual Design</li>
                        <li>Usability Testing</li>
                        <li>Wireframing and Prototyping </li>
                        <li>Design Thinking</li>
                    </ul>
                    <p>Professional Experience Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</p>
                    <div>
                            <h3>Language</h3>
                            <Input />
                        </div>
                        <div>
                            <h3>Links</h3>
                            <ul>
                                <li>
                                    <Input />
                                </li>
                                <li>
                                    <Input />
                                </li>
                                <li>
                                    <Input />
                                </li>
                            </ul>
                        </div>
                        <ButtonBlack />
                </div>
            </div>
        </div>  
    );  
};

export default EditProfile;