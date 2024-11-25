import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./playgroundSlice";

export const Reg: FC = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Log = ({e}) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            password: user.password,
          })
        );
        navigateTo("/");
      })
      .catch(() => alert("Invalid user!"));
  };
  return (
    <form  onClick={Log}>
      <input
        style={{ width: "200", height: "200", backgroundColor: "red" }}
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        placeholder="email"
      />
      <input
        style={{ width: "200", height: "200", backgroundColor: "red", marginBottom: '40px' }}
        onChange={(e) => setPassword(e.currentTarget.value)}
        value={password}
        placeholder="password"
      />
      <button

        onClick={() => Log(email, password)}
    
        style={{ width: "200px", height: "20px", backgroundColor: "red" }}
      >отправить</button>
    </form>
  );
};
