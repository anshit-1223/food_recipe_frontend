import { useAuth } from '../contexts/AuthContext';
import Layout from '/components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// const recipes = [
//     { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish' },
//     { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful chicken curry' },
//     { id: 3, title: 'Beef Tacos', description: 'Delicious and easy-to-make beef tacos' },
//     { id: 4, title: 'Caesar Salad', description: 'A fresh and tasty Caesar salad with grilled chicken' },
//     { id: 5, title: 'Pancakes', description: 'Fluffy pancakes perfect for breakfast' },
//     { id: 6, title: 'Tomato Soup', description: 'A warm and comforting tomato soup' },
//     { id: 7, title: 'Grilled Cheese Sandwich', description: 'A classic and crispy grilled cheese sandwich' },
//     { id: 8, title: 'Chocolate Chip Cookies', description: 'Homemade chocolate chip cookies' }
// ];

const Recipes = () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null; // or a loading spinner
    }
    const [recipes, setRecipes] = useState([]);
    const { id } = router.query;
    if (id) {
        useEffect(() => {

            axios.get("http://127.0.0.1:8000/api/recipes/${id}").then((res) => setRecipes(res.data));

        }, [id]);
    }
    if (!id) {
        useEffect(() => {

            axios.get("http://127.0.0.1:8000/api/recipes/").then((res) => setRecipes(res.data));

        }, []);
    }


    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-2 text-center">All Recipes</h1>
            <ul>

                {recipes.map(({ id, title, description }) => (
                    <li key={id} className="mb-4 w-80 ms-5">
                        <Link href={`/recipes/${id}`} className="text-green-500 hover:text-black">
                            <h2 className="text-xl font-semibold"><b className='text-black'>* </b>{title}</h2>
                            <p className='ms-4'>{description}</p>

                        </Link>
                    </li>

                ))}

            </ul>
        </Layout>
    );

};

export default Recipes;
