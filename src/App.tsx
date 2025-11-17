import { useState, useEffect, useRef } from "react";
import "./style.css";
import { ConversorLuxtoNits } from "./utils";

interface FormBuilder {
  label: string;
  type: string;
  value: string;
  range?: number;
}

export default function App() {
  const maxNits = 1900;
  const [fields, setFields] = useState<FormBuilder[]>([
    { label: "θi [Nits]", type: "range", value: "1400", range: maxNits },
    {
      label: "Luz Ambiente (Perturbacion) [Lux]",
      type: "range",
      value: "5000",
      range: 10000,
    },
    { label: "θo [Nits]", type: "label", value: "0" },
    { label: "Error [Nits]", type: "label", value: "0" },
    { label: "θo Controlador [Nits/s]", type: "label", value: "0" },
    { label: "F [Lux]", type: "label", value: "5000" },
  ]);

  const valuesRef = useRef<FormBuilder[]>(fields);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const brightnessAnimRef = useRef<number | null>(null);
  const [brightPercentage, setBrightPercentage] = useState<string>();
  const [nitsTransitorio, setNitsTransitorio] = useState<string>();

  const handleChange = (index: number, next: string) => {
    setFields((prev) => {
      const copy = prev.map((p, i) =>
        i === index ? { ...p, value: next } : p
      );
      valuesRef.current = copy;
      return copy;
    });
    if (index === 1) {
      handleChange(5, next);
      handleChange(2, String(ConversorLuxtoNits(Number(next))));
    }
  };

  useEffect(() => {
    const targetNits = Number(fields[2]?.value) || 0;
    const target = Math.max(0, Math.min(1, targetNits / maxNits));

    if (!screenRef.current) return;

    const inline = screenRef.current.style.getPropertyValue("--brightness");
    const computed = getComputedStyle(screenRef.current).getPropertyValue(
      "--brightness"
    );
    let current = parseFloat(inline || computed) || 0;

    if (Math.abs(current - target) < 0.0001) {
      screenRef.current.style.setProperty("--brightness", target.toFixed(2));
      return;
    }

    if (brightnessAnimRef.current !== null) {
      clearInterval(brightnessAnimRef.current);
      brightnessAnimRef.current = null;
    }

    const steps = 20;
    const totalMs = 1400; // total animation time
    const stepMs = Math.max(5, Math.round(totalMs / steps));
    const delta = (target - current) / steps;
    handleChange(4, String((delta * maxNits * 14.28).toFixed(2)));
    let step = 0;

    brightnessAnimRef.current = window.setInterval(() => {
      step += 1;
      current = current + delta;
      if (screenRef.current) {
        screenRef.current.style.setProperty("--brightness", current.toFixed(2));
      }
      if (step >= steps) {
        if (brightnessAnimRef.current !== null) {
          clearInterval(brightnessAnimRef.current);
          brightnessAnimRef.current = null;
        }
        if (screenRef.current) {
          screenRef.current.style.setProperty(
            "--brightness",
            target.toFixed(2)
          );
        }
      }
      setNitsTransitorio((current * maxNits).toFixed(2));
      setBrightPercentage(current.toFixed(2));
    }, stepMs);

    return () => {
      if (brightnessAnimRef.current !== null) {
        clearInterval(brightnessAnimRef.current);
        brightnessAnimRef.current = null;
      }
    };
  }, [fields[2]?.value]);

  useEffect(() => {
    handleChange(
      3,
      String(
        (
          Number(fields[0].value) - ConversorLuxtoNits(Number(fields[1].value))
        ).toFixed(2)
      )
    );
  }, [fields[0]?.value, fields[2]?.value]);

  useEffect(() => {
    handleChange(
      2,
      String((Number(fields[0].value) - Number(fields[3].value)).toFixed(2))
    );
  }, [fields[3]?.value]);

  return (
    <>
      <div className="form-container">
        {fields.map((field, index) => (
          <div className="field" key={index}>
            <label htmlFor={`input-${index}`} className="field-label">
              {field.label ?? `Input ${index + 1}`}
            </label>

            {field.type === "range" ? (
              <div className="range-wrapper">
                <input
                  id={`input-${index}`}
                  type="range"
                  min={0}
                  max={field.range ?? 100}
                  value={Number(field.value) || 0}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="range-input"
                  style={{
                    ["--percent" as any]: `${
                      ((Number(field.value) || 0) / (field.range ?? 100)) * 100
                    }%`,
                  }}
                />
                <span className="range-value">
                  {Number(field.value) || 0}/{field.range ?? 100}
                </span>
              </div>
            ) : field.type === "label" ? (
              <span className="label-value">{field.value}</span>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>

      <div className="phone-screen" ref={screenRef} aria-hidden={false}>
        <div className="screen-top-label">
          {`Brillo: ${brightPercentage}% — ${nitsTransitorio} nits`}
        </div>
        <div className="screen-overlay"></div>
      </div>
    </>
  );
}
