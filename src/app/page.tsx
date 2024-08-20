import Form from "@/components/auth-loginForm/Form";
import Register from "@/components/auth-register/Register";
import HomePage from "@/page/home/Home";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
     <Register/>
    </main>
  );
}
