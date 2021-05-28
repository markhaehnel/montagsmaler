import React, { useEffect, useState } from "react";
import "./App.css";
import RevealingWord from "./components/RevealingWord";
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
      <div className="spacer"></div>
      <div className="container">
        <RevealingWord
          word={currentWord}
          randomWords={words}
          duration={800}
        ></RevealingWord>
        <button onClick={setRandomWord}>Nächstes Wort</button>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
