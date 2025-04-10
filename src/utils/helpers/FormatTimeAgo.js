export const formatTimeAgo = (dateStr) => {
  const now = new Date();
  const date = new Date(dateStr);
  const secondPast = (now.getTime() - date.getTime()) / 1000;

  if (secondPast < 60) {
    return `${Math.floor(secondPast)}s ago`;
  }
  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)}m ago`;
  }
  if (secondPast <= 86400) {
    return `${Math.floor(secondPast / 3600)}h ago`;
  }
  if (secondPast > 86400) {
    const days = Math.floor(secondPast / 36400);
    return days === 1 ? `${days} day ago` : `${days} days ago`;
  }
};
