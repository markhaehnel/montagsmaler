import React, { useEffect, useState } from "react";

type RevealingWordProps = {
  word: String;
  randomWords: Array<String>;
  duration: number;
};

const RevealingWord = ({ word, randomWords, duration }: RevealingWordProps) => {
  const [wordToShow, setWordToShow] = useState<String>(randomWords[0]);
  const [iteration, setIteration] = useState<number>(0);
  const tick: number = 50;

  const setRandomWord = () => {
    setWordToShow(randomWords[Math.floor(Math.random() * randomWords.length)]);
  };

  useEffect(() => {
    let interval: number;
    if (tick * iteration < duration && wordToShow !== word) {
      interval = setInterval(() => {
        setIteration(iteration + 1);
        setRandomWord();
      }, 20);
    } else {
      setWordToShow(word);
      setIteration(0);
    }
    return () => clearInterval(interval);
  }, [iteration, word]);

  return <h1>{wordToShow}</h1>;
};

export default RevealingWord;
