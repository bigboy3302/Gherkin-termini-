import React from 'react';
import './App.css'; 
import TableHead from './TableHead';
import TableRow from './TableRow';

const Translations = () => {
  return (
    <div className="translations-container">
      <table>
        <caption>Gherkin termini</caption>
        <TableHead />
        <tbody>
          {gherkinTerms.map((term, index) => (
            <TableRow key={index} english={term.english} latvian={term.latvian} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const gherkinTerms = [
  { english: 'Feature', latvian: 'Funkcionālā iezīme' },
  { english: 'Background', latvian: 'Konteksts' },
  { english: 'Scenario', latvian: 'Scenārijs' },
  { english: 'Examples', latvian: 'Piemēri' },
  { english: 'Scenario Outline', latvian: 'Scenārijs pēc parauga' },
  { english: 'Given', latvian: 'Kad' },
  { english: 'When', latvian: 'Ja' },
  { english: 'Then', latvian: 'Tad' },
  { english: 'And', latvian: 'Un' },
  { english: 'But', latvian: 'Bet' },
  { english: 'Or', latvian: 'Vai' },
];

export default Translations;
