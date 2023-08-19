import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


type TCart = {
  image: string
  title: string
  category: string
  id: number
  quantity: number 
  price: number
  description: string
  rating: {
    rate: number
    count: number
  }
};


const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {

  const [local, setLocal] = useState<TCart[]>()

  useEffect(() => {
    const carts: TCart[] = JSON.parse(localStorage.getItem("cart")) || [];
    setLocal(carts)
  }, []);

  

  return (
    <header className="text-gray-400 bg-gray-800 body-font w-full fixed h-auto z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {navigation.map((nav, index) => (
            <Link key={index} to={nav.path} className="mr-5 hover:text-white">
              {nav.name}
            </Link>
          ))}
        </nav>
        <Link
          to={"/"}
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl xl:block lg:hidden">🚀 Buckstore</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            BuckyAlita 👤
          </button>
          <Link to={"/cart"}>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              CART 🛒 {local?.length}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
