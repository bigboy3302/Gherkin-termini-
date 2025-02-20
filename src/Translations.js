import React from 'react';
import './App.css';  // Nepieciešams, lai pievienotu stilus
import TableHead from './TableHead';
import TableRow from './TableRow';

const Translations = () => {
  return (
    <table>
      <caption>Gherkin termini</caption>
      <TableHead />
      <tbody>
        {gherkinTerms.map((term, index) => (
          <TableRow key={index} english={term.english} latvian={term.latvian} />
        ))}
      </tbody>
    </table>
  );
};

const gherkinTerms = [
  { english: 'Feature', latvian: 'Funkcionalitāte' },
  { english: 'Background', latvian: 'Konteksts' },
  { english: 'Rule', latvian: 'Rule' },
  { english: 'Scenario', latvian: 'Piemērs' },
  { english: 'Given', latvian: 'Kad' },
  { english: 'When', latvian: 'Ja' },
  { english: 'Then', latvian: 'Tad' },
  { english: 'And', latvian: 'Un' },
  { english: 'But', latvian: 'Bet' },
  { english: 'Examples', latvian: 'Piemēri' },
  { english: 'Scenario Outline', latvian: 'Scenārija raksts' },
];



export default Translations;
