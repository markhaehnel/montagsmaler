import React, { useEffect, useState } from "react";
import "./App.css";
import words from "./data/words.json";

function App() {
  const [remainingWords, setRemainingWords] = useState<Array<String>>(words);
  const [currentWord, setCurrentWord] = useState<String>("");
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const setRandomWord = () => {
    let word =
      remainingWords[Math.floor(Math.random() * remainingWords.length)];
    setCurrentWord(word);
    setRemainingWords(remainingWords.filter((x) => x !== word));
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      setRandomWord();
    }
  });

  return (
    <div className="App">
      <h3>Montagsmaler</h3>
      <h1>{currentWord}</h1>
      <button onClick={setRandomWord}>Nächstes Wort</button>
    </div>
  );
}

export default App;
