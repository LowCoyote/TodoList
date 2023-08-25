import React, {useContext, useState} from "react";
import {Dialog} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from '@/assets/logo-HiFI.svg'
import { Link } from "react-router-dom";
import userContext from "@/context/UserContext.tsx";

const navigation = [
  { name: "Ajout d'une tâche", to: 'add-task' },
]

const Header: React.FC = () =>{
  const user = useContext(userContext)?.user
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">TodoList's Logo</span>
          <img className="h-8 w-auto" src={img} alt="" />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          { user != null ?
              <>
                {navigation.map((item) => (
                    <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                      {item.name}
                    </Link>
                ))}
              <Link to="/profile" className="group block flex-shrink-0">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Voir le profil</p>
                  </div>
                </div>
              </Link>
              <Link to="/logout" className="text-sm font-semibold leading-6 text-gray-900">
                Se déconnecter
              </Link>
              </>
            :
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Connexion <span aria-hidden="true">&rarr;</span>
            </Link>
          }
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TodoList's Logo</span>
              <img
                className="h-8 w-auto"
                src={img}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Connexion
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;
