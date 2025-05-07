import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Cleaning.css';

const Cleaning = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    process: '',
    cleaningMethod: '',
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
        const response = await fetch("http://localhost:5000/api/cleaning", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            step: selectedOption,
            process: formData.process,
            cleaningMethod: formData.cleaningMethod,
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
      alert("Please select an option before submitting.");
    }
  };
  

  return (
    <div className="container">
      <div className="header">
        <div>Eco Mitra ORGANIQS</div>
      </div>

      <div className="content">
        <div className="sidebar">
          <h2>Cleaning</h2>
          <ul className="cleaning-options">
            {["Harvesting", "Sorting & Grading", "Initial Cleaning (Dry or Wet)", "Washing & Sanitizing", "Drying", "Packaging"].map((option) => (
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

          <label htmlFor="cleaningMethod">Cleaning Method:</label>
          <input 
            type="text" 
            id="cleaningMethod" 
            name="cleaningMethod" 
            value={formData.cleaningMethod} 
            onChange={handleChange} 
            aria-label="Describe the cleaning method"
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

export default Cleaning;
