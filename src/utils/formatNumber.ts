/**
 * Formats a number with the appropriate suffix (k, M, B, T) and locale formatting
 * @param {number} num - The number to format
 * @param {number} [decimals=1] - Number of decimal places to show
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @returns {string} - Formatted number string with appropriate suffix
 */
const formatNumber = (num: number, decimals = 1, locale = 'en-US') => {
  if (num === null || num === undefined || isNaN(num)) {
    return '0';
  }

  // Handle negative numbers
  const isNegative = num < 0;
  const absNum = Math.abs(num);

  // Define suffixes and their corresponding thresholds
  const suffixes = [
    { value: 1e12, symbol: 'T' }, // Trillion
    { value: 1e9, symbol: 'B' }, // Billion
    { value: 1e6, symbol: 'M' }, // Million
    { value: 1e3, symbol: 'k' }, // Thousand
    { value: 1, symbol: '' }, // No suffix
  ];

  // Find the appropriate suffix
  const suffix = suffixes.find((s) => absNum >= s.value);

  if (!suffix) return '0';

  // Calculate the scaled value
  const scaledNum = absNum / suffix.value;

  // Format with the specified number of decimals
  // If all decimal places are zero, show as integer
  const formatted =
    scaledNum % 1 === 0 && decimals === 0
      ? scaledNum.toLocaleString(locale)
      : scaledNum.toLocaleString(locale, {
          minimumFractionDigits: 0,
          maximumFractionDigits: decimals,
        });

  // Return with sign and suffix
  return `${isNegative ? '-' : ''}${formatted}${suffix.symbol}`;
};

export default formatNumber;
