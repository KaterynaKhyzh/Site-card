import React from 'react';
import '../App.css';

function Skills() {
  const softSkills = [
    { name: 'Time Management', level: 90 },
    { name: 'Team Communication & Collaboration', level: 80 },
    { name: 'Critical Thinking', level: 60 },
    { name: 'Problem-Solving', level: 50 },
    { name: 'Adaptability ', level: 60 },
    { name: 'Organization', level: 80 },
  ];

  const hardSkills = [
    { name: 'React', level: 20 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'JavaScript', level: 60 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'Jira', level: 70 },
    { name: 'UML Diagrams ', level: 40 },
    { name: 'C# ', level: 60 },
    { name: 'English ', level: 60 },
  ];

  return (
    <section className="skills-section">
      <div>
        <h2>Soft Skills</h2>
        <ul>
          {softSkills.map((skill, index) => (
            <li key={index}>
              {skill.name}
              <div><span style={{ width: `${skill.level}%` }}></span></div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Hard Skills</h2>
        <ul>
          {hardSkills.map((skill, index) => (
            <li key={index}>
              {skill.name}
              <div><span style={{ width: `${skill.level}%` }}></span></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;