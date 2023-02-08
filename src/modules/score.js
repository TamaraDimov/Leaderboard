export const getScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k9cpJwUktCh3XoogocI2/scores/',
  );
  const endScore = await response.json();
  return endScore.result;
};

const table = document.querySelector('.table-scores');

export const showScore = async () => {
  const data = await getScore();
  table.innerHTML = '';
  data.forEach((value) => {
    const renderData = `
    <div class="table-scores">
    <div>${value.user}</div>
    <div>${value.score}</div>
    </div>`;
    table.insertAdjacentHTML('beforeend', renderData);
  });
};
