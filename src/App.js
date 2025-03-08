import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Full-Stack & Android App Developer | React, Java Spring Boot, Firebase</title>

        <meta name="description" content="Freelance Full-Stack & Android App Developer skilled in React, Node.js, Java Spring Boot, MySQL, MongoDB, and Firebase. Specializing in scalable web & mobile applications, API integration, and cloud solutions to deliver high-performance, user-friendly digital experiences." />
        <meta name="keywords" content="Full-Stack Developer, Android App Developer, React Developer, Java Spring Boot, Node.js, MySQL, MongoDB, Firebase, Web Development, Mobile App Development, API Integration, Cloud Solutions, Freelance Developer" />

      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
