import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const handleSubmit = () => {
    setsubmitted(true);
  };

  return (
    <div>
      <input
        tyoe="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        tyoe="number"
        value={age}
        onChange={(e) => setage(e.target.value)}
        placeholder="Enter your age"
      />

      <button onClick={handleSubmit}>submit</button>
      {submitted && <p>Form submitted!</p>}
    </div>
  );
};

export default Form;
