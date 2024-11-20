"use client";

import { ErrorProps } from "@/types/main";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  // =========== Router =================
  const router = useRouter();

  // =========== Effect =================
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  // =========== Rendering =================
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      {error && (
        <details className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <summary className="w-full cursor-pointer">More details</summary>
          <p className="mt-2">{error.message}</p>
        </details>
      )}
      <p className="text-lg text-gray-600">
        Something went wrong. Redirecting to the home page in 5 seconds...
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
