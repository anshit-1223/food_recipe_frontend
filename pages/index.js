import { useEffect, useState } from 'react';
import Layout from '/components/Layout';
import Link from 'next/link';
import axios from 'axios';


// const recipes = [
//   { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish' },
//   { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful chicken curry' },
//   { id: 3, title: 'Beef Tacos', description: 'Delicious and easy-to-make beef tacos' },
//   { id: 4, title: 'Caesar Salad', description: 'A fresh and tasty Caesar salad with grilled chicken' },
//   { id: 5, title: 'Pancakes', description: 'Fluffy pancakes perfect for breakfast' },
//   { id: 6, title: 'Tomato Soup', description: 'A warm and comforting tomato soup' },
//   { id: 7, title: 'Grilled Cheese Sandwich', description: 'A classic and crispy grilled cheese sandwich' },
//   { id: 8, title: 'Chocolate Chip Cookies', description: 'Homemade chocolate chip cookies' }
// ];

// const res = await fetch('http://127.0.0.1:8000/api/recipes/');

export default function Home() {



  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/recipes").then((res) => setRecipes(res.data));

  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the Food Recipe App</h1>
      {/* <p className="mb-4">Find the best recipes for your favorite dishes.</p> */}
      {/* Card-Start */}
      <div className='ms-20'>
        < div className="flex flex-row flex-direction-row flex-wrap justify-start ms-20" >
          {recipes.map(({ title, description, imgurl }) => (
            < div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2" >
              <Link href={"/recipes/"} >
                <img className="rounded-t-md" src={imgurl} alt="" />
              </Link>
              <div className="p-5">
                <Link href={"/recipes/"} >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <Link href={'/recipes/'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
          )
          )
          }
        </div >
      </div>

      {/* Card-End */}
      {/* <Link href="/recipes" className="text-green-500 underline">View Recipes</Link> */}

    </Layout >
  );
};


