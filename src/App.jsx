import { useState } from "react";
import dice from "./images/icon-dice.svg";
import deskDiv from "./images/pattern-divider-desktop.svg";
import mobDiv from "./images/pattern-divider-mobile.svg";

function App() {
  const [message, setMessage] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action",
  });
  const useFetch = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();
    setMessage(slip);
  };
  return (
    <>
      <main className="font-manrope flex h-screen items-center justify-center bg-neutral-200">
        <article className="relative flex w-11/12 flex-col items-center gap-3 rounded-xl bg-neutral-100 px-10 pb-20 pt-14 text-center md:w-2/5">
          <h1 className="text-secondary text-sm font-extrabold uppercase tracking-widest">
            Advice #{message.id}
          </h1>
          <p className="text-primary my-4 text-3xl font-extrabold">
            “{message.advice}&rdquo;
          </p>
          <img src={mobDiv} alt="Mobile Divider" className="md:hidden" />
          <img
            src={deskDiv}
            alt="Desktop Divider"
            className="hidden md:block"
          />
          <button
            className="bg-secondary hover:shadow-secondary absolute -bottom-5 z-50 flex h-16 w-16 items-center justify-center rounded-full hover:shadow-[0_0_2.5rem]"
            onClick={useFetch}
          >
            <img src={dice} alt="Dice Icon" className="h-6" />
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
