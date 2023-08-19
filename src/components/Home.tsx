import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Dashboard from "./Products";
import Testimonial from "./Testimonial";
import Loading from "./Loading";
import Products from "./Products";
import { json } from "react-router-dom";

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

function Home() {
    const [allProducts, setAllProducts] = useState<TProducts[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {

        // dummy for sample
        // localStorage.setItem("cart", JSON.stringify({
        //     id: 4,
        //     quantity: 3
        // }))
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products", { method: "GET" })
            .then((response) => response.json())
            .then(setAllProducts)
            .then(() => setIsLoading(false))
            .catch((err) => console.error(err));
    }, []);

    // console.log("allProducts ", allProducts);

    // const randomProduct: TProducts = allProducts[Math.floor(Math.random() * allProducts.length)]
    return (
        <>
            {isLoading ? <Loading /> : (
                <>
                    <Products allProducts={allProducts} />
                </>
            )}
        </>
    );
}

export default Home;
