import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      console.log(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className='h-full'>
      {
        loading ? <div className="h-[100vh] flex justify-center items-center "><Spinner /> </div> :
        posts.length > 0 ? 
        (
          <div className=" grid xsm: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl min-h-[18vh] mx-auto p-2 space-y-10 space-x-5">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className='flex justify-center items-center'>
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;

