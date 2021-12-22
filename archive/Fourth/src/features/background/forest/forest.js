import React, { useRef, useEffect, useState } from "react";

import * as css from "./forest.module.css";

const branch = (
  ctx,
  settings,
  x,
  y,
  dx,
  dy,
  width,
  height,
  growthRate,
  lifetime,
  branchColor
) => {
  ctx.lineWidth = width - lifetime * settings.loss;
  ctx.beginPath();
  ctx.moveTo(x, y);
  growthRate *= 0.5;

  x = x + dx;
  y = y + dy;
  dx = dx + Math.sin(Math.random() + lifetime) * settings.speed;
  dy = dy + Math.cos(Math.random() + lifetime) * settings.speed;

  if (width < 6 && y > height - Math.random() * (0.3 * height))
    width = width * 0.8;

  ctx.strokeStyle = branchColor;
  ctx.lineTo(x, y);
  ctx.stroke();

  if (
    lifetime > 5 * width + Math.random() * 100 &&
    Math.random() > settings.newBranch
  ) {
    setTimeout(() => {
      branch(
        ctx,
        settings,
        x,
        y,
        2 * Math.sin(Math.random() + lifetime),
        2 * Math.cos(Math.random() + lifetime),
        (width - lifetime * settings.loss) * settings.branchLoss,
        height,
        growthRate + Math.random() * 100,
        0,
        branchColor
      );
      width *= settings.mainLoss;
    }, 2 * growthRate * Math.random() + settings.minSleep);
  }

  if (width - lifetime * settings.loss >= 1)
    setTimeout(() => {
      branch(
        ctx,
        settings,
        x,
        y,
        dx,
        dy,
        width,
        height,
        growthRate,
        ++lifetime,
        branchColor
      );
    }, growthRate);
};

const generateForest = (
  ctx,
  settings,
  initialTreeColour,
  width,
  height,
  setGenerationInterval
) => {
  branch(
    ctx,
    settings,
    width / 2,
    height,
    0,
    -3,
    10,
    height,
    30,
    0,
    initialTreeColour
  );
  setGenerationInterval(
    setInterval(() => {
      branch(
        ctx,
        settings,
        (Math.random() * 4 * width) / 4,
        height,
        0,
        -Math.random() * 3,
        10 * Math.random(),
        height,
        30,
        0,
        `#${Math.round(0xffffff * Math.random()).toString(16)}`
      );
    }, settings.spawnInterval)
  );
};

const Forest = () => {
  const canvasRef = useRef(null);
  const [generationInterval, setGenerationInterval] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const settings = {
      loss: 0.03,
      minSleep: 10,
      branchLoss: 0.8,
      mainLoss: 0.8,
      speed: 0.8,
      newBranch: 0.8,
      spawnInterval: 10,
      initialWidth: 10,
      timeLimit: 10000,
    };

    const initialTreeColour = "#fff";
    let width = (ctx.canvas.width = window.innerWidth);
    let height = (ctx.canvas.height = window.innerHeight);

    if (!generationInterval) {
      generateForest(
        ctx,
        settings,
        initialTreeColour,
        width,
        height,
        setGenerationInterval
      );
    }

    window.onresize = () => {
      width = ctx.canvas.width = window.innerWidth;
      height = ctx.canvas.height = window.innerHeight;
    };
  }, [generationInterval, setGenerationInterval]);

  return <canvas className={css.forest} ref={canvasRef} />;
};

export default Forest;
