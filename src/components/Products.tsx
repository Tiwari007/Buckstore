import { Link, useLinkClickHandler, useNavigate } from "react-router-dom";

type TProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Products: React.FC<any> = ({ allProducts }) => {


  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap m-6">
          {
            allProducts.map((product: TProducts, index: number) => (
              <Link to={`/products/${product?.id}`} key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full mb-4">
                <div className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={product?.image} />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product?.category}</h3>
                  <h2 className="text-white title-font text-lg font-medium">{product?.title}</h2>
                  <p className="mt-1">$ {product?.price}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Products