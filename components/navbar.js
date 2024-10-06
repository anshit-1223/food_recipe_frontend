import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const { user, logout } = useAuth();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${searchQuery}`);
        }
    };

    return (
        <nav className="bg-green-500 p-4 text-white flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link href="/">
                    <h1>Food Recipe App</h1>
                </Link>
            </div>
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search recipes..."
                    className="p-2 rounded-md text-black"
                />
                <button type="submit" className="bg-white text-green-500 p-2 rounded-md">Search</button>
            </form>
            <div className="space-x-4">
                {user ? (
                    <>
                        <Link href="/recipes" className="hover:underline">All Recipes</Link>
                        <button onClick={logout} className="hover:underline">Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="hover:underline">Login
                        </Link>
                        <Link href="/signup" className="hover:underline">Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
