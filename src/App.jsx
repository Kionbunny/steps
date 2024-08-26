import { useState } from "react"; //// used to add state management to your functional components.
import "./index.css";
const messages = [
  /// an  array of messages / strings
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  /// useState hook used to add the dynamic and interactivity to the web pages we can  chagne the data by using evenHandler
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        {/* as the numbers is a class the styling done here is applied to all elements here that is 1 , 2, 3 */}
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "orange", color: "#fff" }}
          onClick={handlePrevious}
          ///  onClick is event handler to handle the dynamic chnages and adds interactivity to the compnent
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "orange", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
