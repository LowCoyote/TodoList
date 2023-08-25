import { Routes , Route } from "react-router-dom";
import Home from "@/views/Home.tsx";
import Header from "@/components/layout/Header.tsx";
import UserContext from "@/context/UserContext.tsx";
import { useState } from "react";
import { User } from "@/types/User.ts";
import Login from "@/views/Authentication/Login.tsx";
import Register from "@/views/Authentication/Register.tsx";
import AddTask from "@/views/AddTask.tsx";

function App() {

  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
