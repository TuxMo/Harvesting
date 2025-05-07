import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Storage.css';

const Storage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    process: '',
    storageMethod: '',
    bestPractices: '',
    date: ''
  });

  const handleOptionClick = (option) => {
    setSelectedOption(prevSelected => prevSelected === option ? "" : option);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (selectedOption) {
      try {
        const response = await fetch("http://localhost:5000/api/storage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            step: selectedOption,
            process: formData.process,
            storageMethod: formData.storageMethod,
            bestPractices: formData.bestPractices,
            date: formData.date
          })
        });
  
        const result = await response.json();
  
        if (result.success) {
          alert("Form submitted successfully!");
          navigate("/");
        } else {
          alert("Error: " + result.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit. Please try again.");
      }
    } else {
      alert("Please select a storage option before submitting.");
    }
  };
  

  return (
    <div className="container">
      <div className="header">
        <div>Eco Mitra ORGANIQS</div>
      </div>

      <div className="content">
        <div className="sidebar">
          <h2>Storing</h2>
          <ul className="storage-options">
            {["Cold Storage", "Room Temperature Storage", "Transportation", "Quality Check & Distribution"].map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={selectedOption === option ? "selected" : ""}
              > 
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="form-section">
          <label htmlFor="process">Process:</label>
          <input 
            type="text" 
            id="process" 
            name="process" 
            value={formData.process} 
            onChange={handleChange} 
            aria-label="Describe the process"
          />

          <label htmlFor="storageMethod">Storage Method:</label>
          <input 
            type="text" 
            id="storageMethod" 
            name="storageMethod" 
            value={formData.storageMethod} 
            onChange={handleChange} 
            aria-label="Describe the storage method"
          />

          <label htmlFor="bestPractices">Best Practices:</label>
          <input 
            type="text" 
            id="bestPractices" 
            name="bestPractices" 
            value={formData.bestPractices} 
            onChange={handleChange} 
            aria-label="Describe the best practices"
          />

          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            aria-label="Select a date"
          />
        </div>
      </div>

      <div className="buttons">
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Storage;
