import React from "react";

function Contact() {
  // Replace these with your details
  const imageUrl = "https://media.licdn.com/dms/image/v2/D5603AQHb8ZxQX9y3yg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720601501008?e=1736380800&v=beta&t=SO5unJfTs7ehCBlLsP8xHH7EgHq8De3iBDuOJAqt1s0"; // Corrected image link
  const developerName = "Niharika";
  const email = "niharika11000@gmail.com";
  const linkedInUrl = "www.linkedin.com/in/niharika11000r"; // Corrected LinkedIn URL
  const githubUrl = "https://github.com/Niharika1183"; // Your GitHub profile link

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Image */}
      <img
        src={imageUrl}
        alt="Developer"
        className="w-48 h-48 rounded-full object-cover mb-6" // Increased size
      />

      {/* Developer Name */}
      <h1 className="text-4xl font-bold mb-4">{developerName}</h1> {/* Increased size */}

      {/* Email */}
      <p className="text-2xl text-gray-700 mb-6">{email}</p> {/* Increased size */}

      {/* Icons for LinkedIn and GitHub */}
      <div className="flex space-x-6">
        {/* LinkedIn Icon */}
        <a href={`https://${linkedInUrl}`} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/64/000000/linkedin.png" // Increased icon size
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </a>
        {/* GitHub Icon */}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/64/000000/github.png" // Increased icon size
            alt="GitHub"
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
