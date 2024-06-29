"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "ไม่",
      "แน่ใจหรอออ",
      "แล้วถ้าเราจริงจังละะ",
      "ทำไมล่ะะ ไม่รักเราหรออ",
      "ทำไมไม่กดอีกกก",
      "ขอร้องง :(",
      "ไม่รักเราจริงหรอออ",
      "อืมม :*(",
      "ก็แล้วแต่นะ",
      "ใช่เรารู้ทุกครั้งที่เองกดอะไร",
      "โอเค เรายอมรับความจริงละะะ",
      "กดเถอะะะะ",
      ":((((",
      "ยังไม่กดอีกกก :(((((((((((((",
      "อันนี้คือออกมาจากจิตใจจริงๆช่ะ",
      "ไม่ :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://64.media.tumblr.com/37c50fd890a6f4e6c38518f7f5f0d99d/tumblr_nuu8gp9yM41udvy5wo1_500.gif" />
          <div className="my-4 text-4xl font-bold">เย้ น่ารักที่สุดเลยยย!!! เรารักเองที่สุดเลยยยยยยยยยย!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://c.tenor.com/KliA1GEQj_YAAAAC/tenor.gif"
          />
          <h1 className="my-4 text-4xl">เองรักเราไหมมม?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "ไม่" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
