import { useState } from "react";
import "./css/app.css";

function App() {
  const [speechText, setSpeechText] = useState<string>("");
  const [speechPitch, setSpeechPitch] = useState<number>(1);
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [speechVolume, setSpeechVolume] = useState<number>(1);

  const utterThis = new SpeechSynthesisUtterance(speechText);

  const speech = () => {
    // lang   : japan
    utterThis.lang = "ja-JP";
    // pitch  : 0 ~ 2    (Default 1)
    utterThis.pitch = speechPitch;
    // rate   : 0,1 ~ 10 (Default 1)
    utterThis.rate = speechRate;
    // volume : 0 ~ 1    (Default 1)
    utterThis.volume = speechVolume;

    window.speechSynthesis.speak(utterThis);

    utterThis.onerror = () => {
      alert(
        "申し訳ありません、音声合成に失敗しました。\n更新して再度行うか、別のブラウザで試してみてください。"
      );
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      speech();
      setSpeechText("");
    }
  };

  return (
    <div className="App">
      <div className="titleBox">
        <p className="titleName">CreAtiveTTV</p>
      </div>
      <p className="ExplanatoryText_01">Enter the text you want to read</p>
      <input
        type="text"
        className="inputText"
        placeholder="Type here ..."
        onChange={(e) => setSpeechText(e.target.value)}
        value={speechText}
        onKeyDown={handleKeyDown}
      />
      <div className="inputUnderline" />
      <p className="ExplanatoryText_02">
        When you have finished typing, press the “Enter key”
      </p>
      <div className="sliderContainer">
        <label>Pitch</label>
        <input
          type="range"
          className="slider"
          min="0"
          max="2"
          step="0.5"
          onChange={(e) => setSpeechPitch(Number(e.target.value))}
          value={speechPitch.toString()}
        />
      </div>
      <div className="sliderContainer">
        <label>Rate</label>
        <input
          type="range"
          className="slider"
          min="0"
          max="2"
          step="0.5"
          onChange={(e) => setSpeechRate(Number(e.target.value))}
          value={speechRate.toString()}
        />
      </div>
      <div className="sliderContainer">
        <label>Volume</label>
        <input
          type="range"
          className="slider"
          min="0"
          max="1"
          step="0.1"
          onChange={(e) => setSpeechVolume(Number(e.target.value))}
          value={speechVolume.toString()}
        />
      </div>
    </div>
  );
}

export default App;
