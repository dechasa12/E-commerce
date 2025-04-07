import  React from 'react';
import Contact from './Components/Contact';
import Home from './Components/Home';
import LoginForm from './Components/Loginform';
import Privacy from './Components/Privacy';
import Signup from './Components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <h1>Welcome to Our E-commerce App</h1>
      <p>Discover amazing products and deals!</p>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <h2>Privacy Policy</h2>
      <p>Your privacy is important to us. We do not share your information with third parties.</p>
      <h2>Terms of Service</h2>
      <p>By using our service, you agree to our terms and conditions.</p>
      <h2>About Us</h2>
      <p>We are a team of passionate developers creating amazing web applications.</p>
      <h2>FAQ</h2>
      <p>Q: How can I reset my password?</p>
      <p>A: You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
      <p>Q: How can I contact customer support?</p>
      <p>A: You can contact customer support by filling out the contact form on our website.</p>
      <h2>Feedback</h2>
      <p>We value your feedback! Please let us know how we can improve our service.</p>
      <h2>Testimonials</h2>
      <p>"This app is amazing! I love the user interface and the features."</p>
      <p>"Great customer support! They helped me with my issue quickly."</p>
      <h2>Blog</h2>
      <p>Check out our latest blog posts for tips and tricks on using our app.</p>
      <h2>Resources</h2>
      <p>Find helpful resources and documentation on our website.</p>
      <h2>Community</h2>
      <p>Join our community of users and developers on our forum.</p>
      <h2>Careers</h2>    
    </Router>
    </div>
  );
};
// This is a simple React component that renders a heading and a paragraph.
export default App;
