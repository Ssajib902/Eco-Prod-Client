import { useFormData } from "herotofu-react";
import React from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const { formState, getFormSubmitHandler } = useFormData();

  return (
    <>
      <Helmet>
        <title>Eco Prod | Contact Us</title>
      </Helmet>

      <div className="p-10 max-w-lg mx-auto mt-20 mb-20 bg-gray-100 rounded-lg shadow-lg">
        {/* Success or Error Message */}
        {!!formState.status && (
          <div
            className={`py-2 px-4 mb-4 rounded ${
              formState.submittedSuccessfully
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {formState.submittedSuccessfully
              ? "Your message has been sent successfully!"
              : "There was an error submitting your message. Please try again."}
          </div>
        )}

        <form onSubmit={getFormSubmitHandler()}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Message
            </label>
            <textarea
              placeholder="Your message"
              name="message"
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
