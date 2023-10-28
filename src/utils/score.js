export const calculateScore = (hero) => {
  const score = Object.values(hero).reduce(
    (accumulate, value) => accumulate + value,
    0
  );

  return score;
};
