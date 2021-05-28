import React, { useRef, useEffect } from "react";

import * as css from "./mountains.module.css";

const clear = (ctx, w, h) => {
  ctx.clearRect(0, 0, w, h);
  return Math.random() * h;
};

const draw = (
  ix,
  ic,
  ctx,
  slope,
  details,
  height,
  heights,
  h,
  w,
  colStep,
  numMount,
  shadow
) => {
  for (let i = 0; i < w; i++) {
    slope += Math.random() * details * 2 - details;
    height += slope;

    if (slope > heights) {
      slope = heights;
    }
    if (slope < -heights) {
      slope = -heights;
    }
    if (height > h) {
      height = h;
      slope *= -1;
    }
    if (height < ix) {
      height = ix;
      slope *= -1;
    }

    ctx.beginPath();
    const gr = ctx.createLinearGradient(0, 0, w, h);
    const mountainColours = [
      0, 23, 35, 45, 60, 96, 162, 170, 172, 190, 200, 222, 265, 345, 353, 357,
    ];
    const randomColour = mountainColours[ic];
    gr.addColorStop(
      0,
      `hsla(${randomColour * colStep},100%,50%,${ic / numMount})`
    );
    gr.addColorStop(
      1,
      `hsla(${randomColour * colStep + 100},100%,50%,${ic / numMount})`
    );
    ctx.strokeStyle = gr;
    ctx.lineWidth = 0;
    ctx.moveTo(i, h);
    ctx.lineTo(i, height);
    ctx.shadowColor = "rgba(0,0,0,1)";
    ctx.shadowBlur = shadow;
    ctx.stroke();
    ctx.closePath();
  }
};

const generateMountains = (ctx) => {
  let w = (ctx.canvas.width = window.innerWidth);
  let h = (ctx.canvas.height = window.innerHeight / 2);

  let heights = 1.0;
  let details = 2;
  let numMount = 10;
  let shadow = 0;

  let colStep = 8;
  let height = Math.random() * 1.1;
  let slope = Math.random() * heights * 2 - heights;

  numMount += 1;

  height = clear(ctx, w, h);
  for (let k = 0; k < numMount; k++) {
    draw(
      (k * h) / numMount,
      k,
      ctx,
      slope,
      details,
      height,
      heights,
      h,
      w,
      colStep,
      numMount,
      shadow
    );
  }

  window.onresize = () => {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight / 2;
    height = clear(ctx, w, h);
    for (let k = 0; k < numMount; k++) {
      draw(
        (k * h) / numMount,
        k,
        ctx,
        slope,
        details,
        height,
        heights,
        h,
        w,
        colStep,
        numMount,
        shadow
      );
    }
  };
};

const Mountains = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    generateMountains(ctx);
  }, []);

  return <canvas className={css.mountains} ref={canvasRef} />;
};

export default Mountains;
