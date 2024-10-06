import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const recipes = {
//     1: {
//         title: 'Spaghetti Carbonara',
//         ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta'],
//         instructions: 'Cook spaghetti. Mix eggs and cheese. Fry pancetta. Combine all.'
//     },
//     2: {
//         title: 'Chicken Curry',
//         ingredients: ['Chicken breast', 'Onion', 'Garlic', 'Ginger', 'Curry powder', 'Coconut milk'],
//         instructions: 'Cook chicken. Sauté onion, garlic, and ginger. Add curry powder and coconut milk. Simmer.'
//     },
//     3: {
//         title: 'Beef Tacos',
//         ingredients: ['Ground beef', 'Taco shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Sour cream'],
//         instructions: 'Cook ground beef. Prepare taco shells. Add beef and toppings to shells.'
//     },
//     4: {
//         title: 'Caesar Salad',
//         ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese', 'Chicken breast'],
//         instructions: 'Chop lettuce. Cook chicken. Mix lettuce with dressing, add croutons, cheese, and chicken.'
//     },
//     5: {
//         title: 'Pancakes',
//         ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Sugar', 'Salt', 'Butter'],
//         instructions: 'Mix dry ingredients. Add wet ingredients. Cook on griddle. Serve with syrup.'
//     },
//     6: {
//         title: 'Tomato Soup',
//         ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Vegetable broth', 'Basil', 'Cream'],
//         instructions: 'Sauté onions and garlic. Add tomatoes and broth. Simmer and blend. Add basil and cream.'
//     },
//     7: {
//         title: 'Grilled Cheese Sandwich',
//         ingredients: ['Bread', 'Cheddar cheese', 'Butter'],
//         instructions: 'Butter bread. Place cheese between slices. Grill until golden brown.'
//     },
//     8: {
//         title: 'Chocolate Chip Cookies',
//         ingredients: ['Flour', 'Butter', 'Sugar', 'Brown sugar', 'Eggs', 'Vanilla extract', 'Baking soda', 'Chocolate chips'],
//         instructions: 'Cream butter and sugars. Add eggs and vanilla. Mix in dry ingredients. Fold in chocolate chips. Bake.'
//     }
// };

const Recipe = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }
    const { id } = router.query;
    console.log(id);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchRecipe = async () => {
                try {
                    const res = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}`);
                    setRecipe(res.data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchRecipe();
        }
    }, [id]);
    const { title, description, ingredients, instructions, imgurl } = recipe;
    console.log(title);
    if (!id) {
        return null;
    }

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!recipe) return <Layout><p>Recipe Not Found</p></Layout>;

    return (
        <Layout>
            <div class="mx-20 flex flex-col  items-center bg-white border border-gray-200 rounded-lg w-120  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imgurl} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class=" font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <b className='text-white'>Ingredients:<p class=" font-normal text-gray-700 dark:text-gray-400">{ingredients}</p></b>
                    <b className='text-white'>Instructions:<p class=" font-normal text-gray-700 dark:text-gray-400">{instructions}</p></b>
                </div>
            </div>


        </Layout>
    );
};

export default Recipe;
