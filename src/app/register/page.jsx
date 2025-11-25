"use client";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth"; // ✅ Modular SDK updateProfile

export default function Register1Page() {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  // ===========================
  // Email/Password Registration
  // ===========================
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // ✅ Modular SDK: update displayName & photo
      await updateProfile(user, { displayName: name, photoURL: photoURL });

      // ✅ SweetAlert2 success
      await Swal.fire({
        title: "Registered Successfully!",
        text: `Welcome, ${name}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/"); // Redirect to Home
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // ===========================
  // Google Sign-in
  // ===========================
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      await Swal.fire({
        title: "Logged in Successfully!",
        text: `Welcome, ${user.displayName || "User"}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/"); // Redirect to Home
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-500 p-4 sm:p-6">
      <div className="bg-white text-black shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
          <spen className="text-green-500">BD</spen>
          <spen className="text-pink-600">Shop</spen> Register Page
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="font-medium block mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

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
            Register
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 border border-gray-400 text-black font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} /> {/* Google icon */}
          Sign in with Google
        </button>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
