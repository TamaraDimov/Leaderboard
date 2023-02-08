const score = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k9cpJwUktCh3XoogocI2/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.querySelector('#nameInput').value,
        score: document.querySelector('#scoreInput').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const addedScore = await response.json();
  return addedScore;
};

export default score;
