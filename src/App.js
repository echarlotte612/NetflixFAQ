import React from 'react';
import './App.css';
import Faq from './components/Faq'


function App() {
  return(
    <div className="wrap">
      <h1>Frequently Asked Questions</h1>
        <div className="questions">
          
            <Faq title='Exactly what is a "Netflix", please?' icon="" />
            <Faq title="How much does this cost?" icon="" />
            <Faq title="Can I use it on my iPad thingie?" icon="" />
            <Faq title="How do I cancel?" icon="" />
            <Faq title="Will it let me watch Midsummer Murders?" icon="" />
            <Faq title="Exactly how free IS this trial??" icon="" />
        
        </div>
      <button type="submit">TRY 30 DAYS FOR FREE ></button>
    </div>
  )
}

export default App;