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


const Banner = ({randomProduct}: any) => {

    console.log("random " , randomProduct)
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src={randomProduct?.image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{randomProduct?.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{randomProduct?.description}</p>
                    <p className="inline-flex text-white bg-green-900 border-1 py-2 px-4 mb-6 rounded text-small">{randomProduct?.category}</p>
                    

                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Buy Now</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner
