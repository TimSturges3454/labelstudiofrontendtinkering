import React from "react";
import { useState, useEffect } from "react";


export const ModelControlSidebar = ({taskData, onChange}: any) => {

    const [confidence, setConfidence] = useState(50);
    const handleChange = (value: number) => {
    setConfidence(value);
    
  };

  
  return (
    <div style={{ width: 260, padding: 12 }}>
      <h2>Model Controls</h2>
      <label>
        Confidence: {confidence}
      <input type="range" min={0} max={100} value={confidence} 
      onChange={(e) => handleChange(Number(e.target.value))} />
      </label>
    </div>
  );
};
