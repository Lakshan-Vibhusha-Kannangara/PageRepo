import React, { useState, useEffect } from 'react';
import './TechStack.css'; // Import the CSS file

// TechCard component
const TechCard: React.FC<{ technology: { name: string; image: string } }> = ({ technology }) => (
  <div className="tech-card">
    <img src={technology.image} alt={technology.name} className="tech-card-image" />
    <p>{technology.name}</p>
  </div>
);

// TechStack component
const TechStack: React.FC = () => {
  const [technologyData, setTechnologyData] = useState<{ name: string; image: string }[]>([]);

  useEffect(() => {

    fetch('http://52.65.35.114:4002/technologies')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTechnologyData(data.technology);
        } else {
          console.error('Failed to fetch technology data:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching technology data:', error);
      });
  }, []);

  return (
    <div style={{margin:"10px"}}>
      <p style={{fontSize:"40px"}}>My Technologies</p>
      <div className="tech-stack">
    
    <div className="grid-container">
      
      {technologyData.map((tech, index) => (
        <div key={index} className="grid-item">
          <TechCard technology={tech} />
        </div>
      ))}
    </div>
  </div>
    </div>
    
  );
};

export default TechStack;
