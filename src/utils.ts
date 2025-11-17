export const ConversorLuxtoNits = (lux: number): number => {
  // Example conversion formula (this is a placeholder; replace with actual formula)
  const result = 458.21 * Math.log(lux + 202.24) - 2355.58;
  // limit to 2 decimals
  return Number(result.toFixed(2));
};
