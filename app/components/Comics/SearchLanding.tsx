import { Form, useNavigation } from "@remix-run/react";
import { useState } from "react";
import ModeCharacter from "./ModeCharacter";
import ModeDate from "./ModeDate";
import ModeMeaning from "./ModeMeaning";
import ModeSelector from "./ModeSelector";

export default function SearchLanding({ mode }) {
  console.log("mode:", mode);
  const navigation = useNavigation();
    const isSearching = navigation.location?.search

  return (
    <div className={`flex flex-col landscape-narrow:pt-[5dvh]  my-auto ${isSearching && "animate-pulse"} `}>
      <h2 className="text-7xl dmd:text-8xl text-center text-purple-300 font-bold font-socrates mt- mb-4 tracking- wider"><img src="/main/eterna-raw.png" className="w-[300px] mb-2 mx-auto"></img></h2>
      {mode === "meaning" && <ModeMeaning isSearching={isSearching}/>}
      {mode === "date" && <ModeDate {...{dateQuery, setDateQuery, isSearching}} />}
      {mode === "character" && <ModeCharacter isSearching={isSearching} />}
      <ModeSelector mode={mode} setMode={setMode} />
    </div>
  );
}
