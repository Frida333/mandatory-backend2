let cards = [];

const addCard = ({id, title }) => {
  const card = {id, title};
  cards.push(card);
  return{card};
}

module.exports = {addCard};
