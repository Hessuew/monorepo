// Get gradient colors based on the card color
export const getGradientColor = (opacity: number, color: string): string => {
  if (color === 'white') return `rgba(255, 255, 255, ${opacity})`;
  if (color === 'purple') return `rgba(168, 85, 247, ${opacity})`;
  if (color === 'orange') return `rgba(255, 170, 64, ${opacity})`;
  return `rgba(59, 130, 246, ${opacity})`;
};
