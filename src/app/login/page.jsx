"use client";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc"; 

export default function LoginPage() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter email and password",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Google Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-500 p-4 sm:p-6">
      <div className="bg-white text-black shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
          <spen className="text-green-500">BD</spen>
          <spen className="text-pink-600">Shop</spen> Login Page
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-medium block mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 sm:py-2.5 rounded-lg transition"
          >
            Login
          </button>

          {/* Google Sign In Button styled like Register page */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mt-4 border border-gray-400 text-black font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} /> {/* Google icon */}
            Sign in with Google
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link href="/register" className="text-pink-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
