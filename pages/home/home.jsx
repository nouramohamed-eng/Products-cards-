import { useEffect } from 'react';
import Card from './card'
import { useState } from 'react';
const Home = () => {
  const [posts, getPosts] = useState([]);

  async function GetPost() {
    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      getPosts(res); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetPost();
  }, []);

  return (
    
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
      {posts.map((post) => (
        <Card
          key={post.id}
          post_title={post.title}
          post_body={post.description}
          post_price={post.price}
          post_image={post.image}
          post_rate={post.rating?.rate}
        />
      ))}
    </section>
  );
};

export default Home;


