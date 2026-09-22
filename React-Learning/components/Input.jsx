import React, { useState } from "react";

const Input = () => {
  const [text, Settext] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => Settext(e.target.value)}
          type="text"
          value={text}
        />
        <h1>{text}</h1>
      </form>
    </div>
  );
};

export default Input;
