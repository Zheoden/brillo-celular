import { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  const [values, setValues] = useState<string[]>(Array(6).fill(""));

  // Labels for each input
  const labels = ["θi", "θo", "error", "F", "θoc", "Perturbacion"];

  const handleChange = (index: number, next: string) => {
    setValues((prev) => {
      const copy = [...prev];
      copy[index] = next;
      // Keep ref in sync with the latest values so the interval can read them
      valuesRef.current = copy;
      return copy;
    });
  };

  // Ref that always points to the latest values so the interval callback reads up-to-date data
  const valuesRef = useRef<string[]>(values);

  // Interval: log current values every 1 second
  useEffect(() => {
    const id = setInterval(() => {
      for (let i = 0; i < valuesRef.current.length; i++) {
        console.log(`${labels[i]}: ${valuesRef.current[i]}`);
      }
      console.log("------------------------------------------------");
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="form-container">
      {values.map((v, i) => (
        <div className="field" key={i} style={{ marginBottom: "12px" }}>
          <label
            htmlFor={`input-${i}`}
            style={{ display: "block", marginBottom: "4px" }}
          >
            {labels[i] ?? `Input ${i + 1}`}
          </label>
          <input
            id={`input-${i}`}
            name={labels[i] ?? `input-${i}`}
            type="text"
            placeholder={labels[i]}
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
      ))}
    </div>
  );
}
