import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../style/Harvest.css';

const Harvest = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <div>Eco Mitra ORGANIQS</div>
      </div>

      <div className="description">
        Post Harvest Food Cleaning and Storing standard process
      </div>
      
      <div className="buttons">
        <button className="btn" onClick={() => navigate('/cleaning')}>Cleaning</button>
        <button className="btn" onClick={() => navigate('/storage')}>Storing</button>
      </div>
    </div>
  );
};

export default Harvest;
