import React, {useState, FormEvent, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {login} from "@/services/todolist-api/todolist-api.tsx";
import UserContext from "@/context/UserContext.tsx";

const Login: React.FC = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
        login(email, password).then(r => {
          user?.setUser({name: r.name, email: r.email, id: r.id});
          navigate("/")
          toast.success("Vous êtes connecté");
        });
    }
    catch (e) {
        toast.error("Une erreur est survenue")
        console.log(e);
    }

    // Réinitialisez les valeurs des champs après la soumission
    setEmail("");
    setPassword("");
  };

  return (
      <div className="relative flex flex-col lg:mt-44 mt-32 h-screen overflow-y-hidden">
        <div className="w-full p-6 mx-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-yellow-700 underline">
            Connexion
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
              >
                Mot de passe
              </label>
              <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Connexion
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Vous n'avez pas de compte ? {" "}
            <Link
                to="/register"
                className="font-medium text-yellow-600 hover:underline"
            >
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Login;
