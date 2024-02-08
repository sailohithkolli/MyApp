// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>SAI LOHITH KOLLI</h1>
        <p>+1 678 925 5690 | sailohith.kolli31@gmail.com</p>
      </header>

      <section className="summary">
        <h2>SUMMARY</h2>
        <p>
          To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
        </p>
      </section>

      <section className="qualifications">
        <h2>QUALIFICATIONS</h2>
        <h3>Technical Background</h3>
        <p>
          Master of Science in Computer Science with coursework in graduate programming practicum, Android application development, introduction to database, advanced database concepts, algorithms and computations, problem-solving practicum, and NoSQL databases.
        </p>
        {/* Add more qualifications as needed */}
      </section>

      <section className="skills">
        <h2>KNOWLEDGE AND TECHNICAL SKILLS</h2>
        <ul>
          <li>Programming Languages: C, C++, Java, HTML, CSS, PYTHON</li>
          <li>Database: Oracle, MySQL</li>
          <li>Software: Eclipse IDE, MS-Office, Apache, JIRA</li>
          <li>Operating Systems: Windows, Linux</li>
        </ul>
      </section>

      <section className="education">
        <h2>EDUCATION</h2>
        <p>University of Illinois at Springfield, USA - MS in Computer Science – Fall 2023</p>
        <p>Jawaharlal Nehru Technological University, India – B.Tech in Computer Science and Engineering 2022</p>
      </section>

      <section className="certifications">
        <h2>CERTIFICATIONS</h2>
        <p>Python for Everybody – University of Michigan Oct 2020</p>
        <p>Capstone: Retrieving, Processing, and Visualizing Data with Python</p>
      </section>

      <section className="internship">
        <h2>INTERNSHIP EXPERIENCE</h2>
        <p>Company Name: ORBIT BI Pvt Ltd</p>
        <p>Dates: May 2021 – July 2021</p>
        <p>Accomplishments:</p>
        <ul>
          <li>Learned BI Concepts and basics of Orbit Analytics tool.</li>
          <li>Upgraded ninety endpoints to Windows Pro OS through cloud using smart deploy images.</li>
          {/* Add more accomplishments as needed */}
        </ul>
      </section>

      <section className="work-experience">
        <h2>WORK EXPERIENCE</h2>
        <p>Company Name: ORBIT BI Pvt Ltd</p>
        <p>Dates: May 2020 – July 2020</p>
        <p>Accomplishments:</p>
        <ul>
          <li>Supported finance department by reconciling accounts regularly.</li>
          <li>Utilized business analytics tools to track company income and expenses.</li>
          {/* Add more accomplishments as needed */}
        </ul>
      </section>

      <section className="projects">
        <h2>PROJECTS</h2>
        <p>College Website Creation</p>
        <p>Role: Developer</p>
        <p>Description: Developed a website for students to access their marks, check attendance, provide feedback, and for teachers to manage attendance, marks, and timetable.</p>

        <p>Fruit Detection and Ripening Detection using Machine Learning</p>
        <p>Role: Team Member</p>
        <p>Description: Developed a system to detect and recognize various types of fruits from images captured by cameras or smartphones.</p>
      </section>
    </div>
  );
}

export default App;
