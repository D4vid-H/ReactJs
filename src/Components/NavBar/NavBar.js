/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "../LogoNavBar/LogoNavBar";
import { Link } from "react-router-dom";
import Select from "../SelectOptions/Select";
/* import CartContext from "../../Context/CartContext";
import { useContext } from "react"; */


/* const productImg = require.context("../../img"); */

const flag = [{id: 1, value: 'AR', text: 'AR'}, {id: 2, value: 'ES', text: 'ES'}, {id: 3, value: 'US', text: 'US'}]

const navigation = {
  categories: [
    {
      id: "Tienda",
      name: "Tienda",
      sections: [
        {
          id: "Categorias",
          name: "Categorias",
          items: [
            { id: "0", name: "Todo"},
            { id: "1", name: "Cereales"},
            { id: "2", name: "Especias"},
            { id: "3", name: "Frutas Desecadas"},
            { id: "4", name: "Frutos Secos"},
            { id: "5", name: "Harinas"},
            { id: "6", name: "Herboris."},
            { id: "7", name: "Legumbres"},
            { id: "8", name: "Organicos"},
            { id: "9", name: "Regionales"},
            { id: "10", name: "Semillas"},
            { id: "11", name: "Vinos"},
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "about", title: "!Quienes somos¡" },
    { name: "contacto", title: "Contactanos" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [flags, setFlags] = useState('AR');
  /* const {getQuantity} = useContext(CartContext) */


  const handleFlag = (option) => {
    setFlags(option);
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links - mostrar en responsive  */}
              {
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="pt-10 pb-8 px-4 space-y-10"
                      >
                        {/* Card Oferta responsive */}
                        {/* {<div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative text-sm">
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img 
                              src={ productImg(item.imageSrc) } 
                              alt={item.imageAlt} className="object-center object-cover" />
                            </div>
                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>} */}
                        {/* Lista de links responsive */}
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            > */}
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link
                                  to={`/categoria/${item.id}`}
                                  className="hover:text-gray-800"
                                  >
                                  {item.name}
                                  </Link>
                                </li>
                              ))}
                            {/* </ul> */}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              }

              {/* mostrar paginas ¡Quienes somos! Y Contacto en responsive */}
              {
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">                     
                     <Link to={`/opcion/${page.name}`}
                            className="-m-2 p-2 block font-medium text-gray-900"
                            key={page.name}
                      >
                        {page.title}
                      </Link>
                    </div>
                  ))}
                </div>
              }

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Ingreso
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Crear cuenta
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <div href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flags}.svg`}
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                  <Select options={flag} onSelect={handleFlag} />
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Mi primera App - Ecommerce en React
        </p>

        {/* Web menu */}
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Workflow</span>
                <Link to="/">
                  <LogoNavBar />
                </Link>
              </div>

              {/* Flyout full menus */}
              {
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute top-full left-0 inset-x-auto text-sm text-gray-500">
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="max-w-md mx-auto p-8">
                                    <div className="grid grid-cols-1 ">                                      
                                      <div className="row-start-1 grid grid-cols-1 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <Link
                                                    to={`/categoria/${item.id}`}
                                                    className="hover:text-blue-800"
                                                  >
                                                    {item.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <Link to={`/opcion/${page.name}`}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            key={page.name}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>
              }

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Ingreso
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Crear cuenta
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <div
                    className="text-gray-700 hover:text-gray-800 flex items-center"
                    >
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flags}.svg`}
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <Select options={flag} onSelect={handleFlag} />
                  </div>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <div className="group -m-2 p-2 items-center "> 
                    <Link to='/cart' className="grid grid-cols-2 "><CartWidget /></Link>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
