// components/WaitlistForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../app/firebase/config";
const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log("Submitting form with email:", email); // Log the email being submitted
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
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
    }
  };
  

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 block w-full text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Join Waitlist
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default WaitlistForm;
