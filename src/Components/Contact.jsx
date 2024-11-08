import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { MdSend } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State variables for handling feedback messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Reference to the form element
  const form = useRef();

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Indicate that the form is being submitted
    emailjs
      .sendForm(
        "service_tct0wvs",
        "template_2xdsfwp",
        form.current,
        "fNTi0IdxVOWXnf3dA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage(
            "Thank you for contacting me! Your message has been sent."
          );
          setErrorMessage("");
          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(
            "Oops! Something went wrong. Please try again later."
          );
          setSuccessMessage("");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center md:justify-center bg-black px-4 py-10 border-b-[0.5px] border-[#AA14F0]">
      <h1 className="text-7xl max-md:text-5xl text-center text-white font-bold overflow-hidden">
        Contact <span className="text-[#AA14F0]">Me.</span>
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-6 mt-12 w-full max-w-lg"
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-md bg-gray-800 text-white focus:outline-none "
          rows="5"
          required
        ></textarea>
        <button
          className="px-5 py-3 bg-[#AA14F0] hover:bg-[#a013e6] transition-colors rounded-md text-white font-semibold"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
          <MdSend className=" inline ml-2 text-xl" />
        </button>
        {/* Feedback Messages */}
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
      </form>
      <div className=" flex flex-col pt-6 items-center space-y-4">
        <h1 className=" text-center text-2xl max-md:text-xl text-white font-medium ">
          Also connect with me on
        </h1>
        <div className=" flex space-x-8">
          <a href="https://www.facebook.com/profile.php?id=100089677650766">
            <FaFacebook  className=" text-5xl max-md:text-4xl text-gray-400"/>
          </a>
          <a href="https://github.com/Yosf96633">
            <FaGithub  className=" text-5xl max-md:text-4xl text-gray-400"/>
          </a>
          <a href="https://www.linkedin.com/in/muhammed-yousaf-b357172b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className=" text-5xl max-md:text-4xl text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
