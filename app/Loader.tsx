
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="loader w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      {/* Optional: Add loading text */}
      <p className="text-white text-xl mt-4">Loading...</p>
    </div>
  );
}
