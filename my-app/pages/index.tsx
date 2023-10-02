import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import {getPosts} from '../services';
import {PostCard,Categories,PostWidget,Header} from '../components';
import { useEffect,useState } from 'react';
const categories =[{name: 'React',slug:'react'},{name:'Web Development ',slug:'web-dev'}];

const Home: NextPage = ({posts}:any) => {

  let [img,setImg] = useState("https://fastly.picsum.photos/id/932/1000/300.jpg?hmac=6vsgcMlQzGsU_Y2IXoMU76llLURf8aYhjjtFrtyWkFw")
  let [val,setVal] = useState(0);
  useEffect(()=>{

    getImage().then((img1)=>{
  
      console.log("Img",img);
      setImg(img1.image);
    });
  
  
  },[posts]);
  return (
    <div className="container mx-auto px-10 mb-8">
     <Header categories={categories}/>
      <div className="container mx-auto flex flex-wrap py-6">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {
      posts.map((post:any,index:any) => {
      //  console.log(img);
      //  setVal((val1)=> val1+1);
        return <div>
          <PostCard post={post.node} image={img} key={index} />
        </div>

      })
      }
      </section>
      <div className="w-full md:w-1/3 flex flex-col items-center px-3">
          <PostWidget />
      
          <Categories />
      </div>
      </div>
    </div>

  );
}
export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  // console.log(posts);
  return {
    props: {posts} 
  }

}
async function getImage(){
  const posts = (await fetch("https://picsum.photos/1000/300"));
  console.log(posts.url);
  return {
    image: posts.url 
  }

}

export default Home
