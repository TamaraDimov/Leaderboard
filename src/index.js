import './style.css';
import score from './modules/submit.js';
import { showScore, getScore } from './modules/score.js';

const inputName = document.querySelector('#nameInput');
const inputScore = document.querySelector('#scoreInput');
const submitBtn = document.querySelector('#submit-btn');
const refreshBtn = document.getElementById('refresh-btn');

window.addEventListener('load', () => {
  showScore();
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  score();
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getScore();
  showScore();
});
