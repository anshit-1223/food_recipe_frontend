import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '/components/Layout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            <div className="flex flex-1 justify-center ">
                <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Login</button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
