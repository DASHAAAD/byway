// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { FunctionComponent, useState } from "react";
// import styles from "./LoginForm.module.css";

// import Image from "next/image";
// import FormItem from "@/components/formItem/FormItem";
// import { Title } from "@/components/Title/Title";

// import { auth } from "../../app/firebase";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ButtonBlack } from "@/components/ButtonBlack/ButtonBlack";

// const [email, setEmail] = useState("");

// const [password, setPassword] = useState("");
// const [copyPassword, setCopyPassword] = useState("");
// const [error, setError] = useState("");

// const Form: FunctionComponent = () => {
//   const width = {
//     width: "500px",
//   };

//   function register(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (copyPassword !== password) {
//       setError("passwords didnt match");
//       return;
//     }
//     createUserWithEmailAndPassword(auth, email, password).then((user) => {
//       console.log(user);
//       setEmail("");
//       setCopyPassword("");
//       setPassword("");
//     });
//   }
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.wrapper}>
//           <Title text="Log in to your account" className={""} />
//           <form onSubmit={register} className={styles.form} action="">
//             <input
//               value={email}
//               // onChange={()}
//               title="Email"
//             />
//             <FormItem value={password} title="Password" />
//             <ButtonBlack style={width} text="Sign in" />
//           </form>
//         </div>
//         {/* <Image src={girl} alt={''} /> */}
//       </div>
//     </>
//   );
// };

// export default Form;
