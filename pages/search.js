import { useRouter } from 'next/router';
import Layout from '/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import Link from 'next/link';

const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful chicken curry' },
    { id: 3, title: 'Beef Tacos', description: 'Delicious and easy-to-make beef tacos' },
    { id: 4, title: 'Caesar Salad', description: 'A fresh and tasty Caesar salad with grilled chicken' },
    { id: 5, title: 'Pancakes', description: 'Fluffy pancakes perfect for breakfast' },
    { id: 6, title: 'Tomato Soup', description: 'A warm and comforting tomato soup' },
    { id: 7, title: 'Grilled Cheese Sandwich', description: 'A classic and crispy grilled cheese sandwich' },
    { id: 8, title: 'Chocolate Chip Cookies', description: 'Homemade chocolate chip cookies' }
];

const Search = () => {
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

    const { query } = router.query;

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query?.toLowerCase())
    );

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            <ul>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <li key={recipe.id} className="mb-4">
                            <Link href={`/recipes/${recipe.id}`} className="text-green-500 underline">
                                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                                <p>{recipe.description}</p>

                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </ul>
        </Layout>
    );

};

export default Search;
