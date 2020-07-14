import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Note title="This is the note title" content="This is the note content" />
      <Footer />
    </React.Fragment>
  );
}

export default App;
