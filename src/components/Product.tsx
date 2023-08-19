import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Alert from '@mui/material/Alert';

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

const Product = () => {
  const [product, setProduct] = useState<TProducts | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id: productId } = useParams();
  // console.log("productId", productId);
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`, { method: "GET" })
      .then((response) => response.json())
      .then(setProduct)
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err));
  }, []);

  // console.log("Product ", product);


  const handleCart = (product: any, redirect: boolean = false) => {
    // console.log(product)

    if (redirect) {
      navigate('/cart')
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find((item: { id: any; }) => item.id === product.id)
    if (isProductExist) {
      const updatedCart = cart.map((item: { id: any; quantity: number; }) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
    }
    // alert('Product added to cart');
      return <Alert variant="filled" severity="success">
        Product Added to Cart Successfully!
      </Alert>

    
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 body-font overflow-hidden pt-12">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto max-h-[600px] object-contain object-center rounded"
                src={product?.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-200 tracking-widest uppercase">
                  {product?.category}
                </h2>
                <h1 className="text-white-900 text-3xl title-font font-medium mb-1">
                  {product?.title}
                </h1>
                <p className="leading-relaxed">{product?.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="title-font font-medium text-3xl text-white-300">
                  $ {product?.price}
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={() => handleCart(product, true)} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy Now
                  </button>
                  <Link to={`/cart`}><button onClick={() => handleCart(product)} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
