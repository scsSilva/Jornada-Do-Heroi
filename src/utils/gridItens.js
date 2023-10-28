export const calculateItensGrid = ({ height, width }) => {
  let qtdeItens;

  if (width >= 1000) {
    qtdeItens = Math.ceil((width / 2 + height / 2) / 280);
  } else {
    if (height >= 700) {
      qtdeItens = Math.floor((width + height * 0.5) / 300);
    } else {
      qtdeItens = Math.floor((width + height * 0.5) / 400);
    }
  }

  return qtdeItens;
};
