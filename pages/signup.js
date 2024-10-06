import Layout from '/components/Layout';

const SignUp = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
            <div className='flex flex-1 justify-center'>
                <form className="space-y-4 w-1/2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 block w-full p-2 border rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full p-2 border rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full p-2 border rounded-md" required />
                    </div>
                    <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Sign Up</button>
                </form>
            </div>
        </Layout>
    );
};

export default SignUp;
