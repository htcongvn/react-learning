import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  const seperatingChar = "💪; ";
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiElement, index) => (
          <Entry
            key={index}
            emoji={emojiElement.emoji}
            name={emojiElement.name}
            meaning={emojiElement.meaning}
          />
        ))}
      </dl>

      <p>
        <span>
          {emojipedia
            // map to create a new array of objects
            .map((emojiElement) => emojiElement.meaning.substring(0, 100))
            // reduce to accumulate the array to a single accumulated object
            // just add the seperation to the end from the second object only
            .reduce((concatStr, originStr) =>
              concatStr.length
                ? concatStr + originStr + seperatingChar
                : originStr
            )}
        </span>
      </p>
    </div>
  );
}

export default App;
