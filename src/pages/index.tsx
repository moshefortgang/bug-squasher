import React, { useState, useEffect } from "react";

import Bug from "@/components/Bug";
import BugPosition from "@/interfaces/BugPosition";
import { randomPosition } from "@/utils/functions";

export default function BugSquasher() {
  const [score, setScore] = useState<number>(0);
  const [bugPosition, setBugPosition] = useState<BugPosition>({ x: 0, y: 0 });
  const [removingBug, setRemovingBug] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const transitionDuration: number = 1000;

  useEffect(() => {
    spawnBug();
    const interval = setInterval(moveBug, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gameTimer = setTimeout(() => {
      setIsFinish(true);
      setRemovingBug(true);
    }, 60000);
    return () => clearTimeout(gameTimer);
  }, []);

  const moveBug = () => {
    setBugPosition(randomPosition());
  };

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const squishBug = () => {
    increaseScore();
    setRemovingBug(true);
    setTimeout(() => {
      setRemovingBug(false);
      spawnBug();
    }, transitionDuration);
  };

  const spawnBug = () => {
    setBugPosition(randomPosition());
  };

  return (
    <div>
      <div className="game-container">
        {isFinish ? (
          <div>
            <h1>Game Over!</h1>
            <p>Your final score: {score}</p>
          </div>
        ) : (
            <p>Score: {score}</p>
        )}
      </div>
      {removingBug ? null : <Bug position={bugPosition} onClick={squishBug} />}
    </div>
  );
}
