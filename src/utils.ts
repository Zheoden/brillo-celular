export const ConversorLuxtoNits = (lux: number): number => {
  const result = 458.21 * Math.log(lux + 202.24) - 2355.58;
  return Number(result.toFixed(2));
};
