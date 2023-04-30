const formatNumber = {
  numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  },
  numberWithComas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};

export const { numberWithComas, numberWithSpaces } = formatNumber;
