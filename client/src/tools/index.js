export const daysLeft = (deadline) => {
  const diff = new Date(deadline).getTime() - Date.now());
  const remainingDays = diff / (1000 * 3600 * 24);
  return remainingDays.toFixed(0);
}

export const calculateBarPercentage = (goal, amountRaised) => {
  const percentage = Math.round((raisedAmount * 100)/ goal);
  return percentage;
}

export const IsImage = (url, callaback) => {
  const img = new Image();
  img.src = url;
  if(img.complete)  callback(true);
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
}