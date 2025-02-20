import React from 'react';
import Translations from './Translations';
import Question1 from "./Question1"; 
import Question2 from "./Question2"; 
import Question3 from './Questions3'; 
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
document.title = "yess Diddy";  
function App() {
  return (
    <div className="App">
      <Translations />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question6 />
    </div>
  );
}

export default App;




