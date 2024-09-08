'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../app/firebase/config"; // Ensure this is correctly configured

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitting form with email:", email); // Log the email being submitted
    setLoading(true); // Set loading to true when the form is being processed
    try {
      // Add email to Firestore
      const docRef = await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: new Date(),
      });
      
      console.log("Document added with ID: ", docRef.id); // Log success
  
      setSuccessMessage("Thank you! You've been added to the waitlist.");
      setEmail(""); // Clear the email field
      setErrorMessage(""); // Clear error message if any
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error adding document: ", error); // Log the error
    } finally {
      setLoading(false); // Reset loading to false after operation is complete
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 block w-full text-white bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:ring-[#36AADB] focus:border-[#36AADB] sm:text-sm"
            disabled={loading} // Disable input during loading
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 ${
            loading ? "bg-gray-500" : "bg-white"
          } text-black font-medium rounded-md shadow-sm hover:bg-[#A0E410] focus:outline-none focus:ring-2 focus:ring-[#BBF517] focus:ring-offset-2`}
          disabled={loading} // Disable button during loading
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {successMessage && <p className="mt-4 text-[#7FDAC7]">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default WaitlistForm;
