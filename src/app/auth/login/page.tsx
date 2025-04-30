export default function Login() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow w-96">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">Login</button>
          </form>
        </div>
      </main>
    );
  }
  