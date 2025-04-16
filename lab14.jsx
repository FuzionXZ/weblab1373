Develop a React component to display:
a) An image from the public/Images folder
b) An image from the src/Images folder
import React from "react";
import DisplayImages from "./components/DisplayImages";

const App = () => {
  return (
    <div>
      <h1>Displaying Images</h1>
      <DisplayImages />
    </div>
  );
};

export default App;

import React from "react";
import srcImage from "../Images/src-image.jpg"; // Import from src/Images

const DisplayImages = () => {
  return (
    <div>
      <h2>Image from public/Images</h2>
      <img src="/Images/public-image.jpg" alt="Public Image" width="300" />

      <h2>Image from src/Images</h2>
      <img src={srcImage} alt="Src Image" width="300" />
    </div>
  );
};

export default DisplayImages;


Question-2
Build a React component to design the following form.

import React, { useState } from "react";

const NovellLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    server: "",
    role: "",
    signOn: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        signOn: checked
          ? [...prev.signOn, value]
          : prev.signOn.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      server: "",
      role: "",
      signOn: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Novell Services Login</h2>

      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>City of Employment:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />

      <label>Web server:</label>
      <select name="server" value={formData.server} onChange={handleChange}>
        <option value="">-- Choose a server --</option>
        <option value="Server1">Server1</option>
        <option value="Server2">Server2</option>
        <option value="Server3">Server3</option>
      </select>

      <fieldset>
        <legend>Please specify your role:</legend>
        {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
          <label key={role}>
            <input
              type="radio"
              name="role"
              value={role}
              checked={formData.role === role}
              onChange={handleChange}
            />{" "}
            {role}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Single Sign-on to the following:</legend>
        {["Mail", "Payroll", "Self-service"].map((service) => (
          <label key={service}>
            <input
              type="checkbox"
              name="signOn"
              value={service}
              checked={formData.signOn.includes(service)}
              onChange={handleChange}
            />{" "}
            {service}
          </label>
        ))}
      </fieldset>

      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default NovellLogin;


import React from "react";
import NovellLogin from "./NovellLogin";

const App = () => {
  return (
    <div>
      <NovellLogin />
    </div>
  );
};

export default App;





Question-3
Create a User Profile Page using React with multiple components. The components to
Create are as follows:
i) ProfileImage.js → Displays the user's profile picture.
ii) UserInfo.js → Displays user details (name, email, bio).
iii) UserPosts.js → Displays a list of posts by the user.
iv) ProfilePage.js → Combines all the above components to form the complete profile page.
v) Index.js – Renders the ProfilePage component as the main parent component.
Profile Image-
import React from "react";

const ProfileImage = ({ imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="User Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfileImage;

Profile Page-
import React from "react";
import ProfileImage from "./ProfileImage.js";
import UserInfo from "./UserInfo.js";
import UserPosts from "./UserPosts.js";

const ProfilePage = () => {
  const user = {
    imageUrl: "/profile.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Developer & Tech Enthusiast",
    posts: ["Learning React!", "Building projects!", "Exploring new tech!"]
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;


UserInfo-
import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default UserInfo;

User Posts-
import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;



App.js-
import React from "react";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default App;


Index.js-
import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Fix: Use "react-dom/client"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
