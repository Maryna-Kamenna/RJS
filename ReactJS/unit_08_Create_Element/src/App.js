import logo from './logo.svg';
import './App.css';
import React from 'react';
import { func } from 'prop-types';

function App() {
  const cE = React.createElement;
  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', {
    'style': { 'color': 'orange' }
  }, 'header 2');
  const p = React.createElement('p', {
    'style': { 'color': 'red' }
  }, 'this is p');
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world')
  const div = React.createElement('div', { 'style': { 'color': 'grey' } }, p1, p2)
  const input = React.createElement('input', {});
  const button = React.createElement('button', {}, 'push');

  function clik() {
    if (input.value != '')
      const li = React.createElement('li', {}, 'some');
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {/* {cE('input', {}, '55')} */}
      {input}
      {button}
      <ul onClick={clik()}>
      </ul>
    </>
  );
}

export default App;
