import React from 'react';
import './App.css';  // Nepieciešams, lai pievienotu stilus
import TableHead from './TableHead';
import TableRow from './TableRow';

const gherkinTerms = [
  { english: 'Feature', latvian: 'Funkcionalitāte' },
  { english: 'Background', latvian: 'Konteksts' },
  { english: 'Rule', latvian: 'Rule' },
  { english: 'Scenario', latvian: 'Piemērs' },
  { english: 'When', latvian: 'Ja' },
  { english: 'Then', latvian: 'Tad' },
  { english: 'And', latvian: 'Un' },
  { english: 'But', latvian: 'Bet' },
  { english: 'Examples', latvian: 'Piemēri' },
  { english: 'Scenario Outline', latvian: 'Scenārija raksts' },
  { english: 'Given', latvian: 'Kad' },
];

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

export default Translations;
