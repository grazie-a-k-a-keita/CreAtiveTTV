import { useState } from "react";

function App() {
  const [speechText, setSpeechText] = useState<string>("");
  const [speechPitch, setSpeechPitch] = useState<number>(1);
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [speechVolume, setSpeechVolume] = useState<number>(1);

  const utterThis = new SpeechSynthesisUtterance(speechText);

  utterThis.lang = "ja-JP"; // lang
  utterThis.pitch = speechPitch; // 0 ~ 2 Default 1
  utterThis.rate = speechRate; // 0,1 ~ 10 Default 1
  utterThis.volume = speechVolume; // 0 ~ 1 Default 1

  utterThis.onerror = (event) => {
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`
    );
  };

  const onclick = () => {
    window.speechSynthesis.speak(utterThis);
    setSpeechText("");
  };

  return (
    <>
      <input
        type="range"
        min="0"
        max="2"
        step="0.5"
        onChange={(e) => setSpeechPitch(Number(e.target.value))}
        value={speechPitch.toString()}
      />
      <input
        type="range"
        min="0"
        max="2"
        step="0.5"
        onChange={(e) => setSpeechRate(Number(e.target.value))}
        value={speechRate.toString()}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        onChange={(e) => setSpeechVolume(Number(e.target.value))}
        value={speechVolume.toString()}
      />
      <input
        type="text"
        onChange={(e) => setSpeechText(e.target.value)}
        value={speechText}
      />
      <button onClick={onclick}>speak</button>
    </>
  );
}

export default App;
