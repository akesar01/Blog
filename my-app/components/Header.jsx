 import React ,{userContext} from 'react';
 import Link from 'next/link';
 import Head from 'next/head'

 const Header = ({categories}) => {
    console.log("Category "+JSON.stringify(categories));
  return (
    <div>
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className='bg-white font-family-karla'>
        
        <div className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                Blog Posts
            </a>
            <p className="text-lg text-gray-600">
                Lorem Ipsum Dolor Sit Amet
            </p>
        </div>
        
    </div>
    <nav className="w-full py-4 border-t border-b bg-gray-100" >

                

                    
        <div  className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                        {
                        categories.map(category=>{
                            return (
                        <Link key={category.slug} href={`/category/${category.slug}` } className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                            <span>
                            {category.name}
                            </span>
                        </Link>);
                        })
                        }
        </div>
        </div>


                    
                
    
            
            
        </nav>
</div>
</div>
  );
}

export default Header;
