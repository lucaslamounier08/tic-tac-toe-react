import './App.css';
import Board from './components/Board.js';

export default function app() {
  return Board.apply(this, arguments);
}