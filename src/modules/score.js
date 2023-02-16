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
    <table class="table-scores">
    <tr id="row">
    <td class="user">${value.user}</td>
    <td class="score">${value.score}</td>
    </tr>
    </table>`;
    table.insertAdjacentHTML('beforeend', renderData);
  });
};
