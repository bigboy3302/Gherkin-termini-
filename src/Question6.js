import React from 'react';
import "./questions.css";

function Question4() { 
    return(
        <div className="question">
            <p className="question-text">Kas ir veiksmīgā iznākuma scenārijs?</p>
            <p className="question-text">
            Katrai funkcijai būs vismaz viens Happy Path scenārijs. ir scenārijs, kur Funkcijas galvenais aktieris bez jebkādiem šķēršļiem sasniedz objekta mērķi. Scenario:
             Happy Path Given the user is logged in as an Author And the Author goes to their Profile page And the Author chooses to upload a picture.
            </p>
        </div>
    );
};

export default Question4;
