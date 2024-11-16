"use client";
import { useState } from "react";

export function Journal() {
  // Tells user their entry was submitted
  const [entry, setEntry] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    alert("Journal entry submitted: " + entry);
    setEntry(""); // Clear the input after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Write Your Journal Entry
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <textarea
              id="entry"
              name="entry"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="What's on your mind today?"
              className="block w-full h-64 rounded-md border-gray-300 shadow-sm py-2 px-3 focus:ring-rose-600 focus:border-rose-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-rose-600 py-2 text-white font-semibold hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            Submit Entry
          </button>
        </form>
      </div>
    </div>
  );
}