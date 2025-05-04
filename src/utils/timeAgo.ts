export const timeAgo = (date: string): string => {
  const postDate = new Date(date);
  const now = new Date();
  const diff = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};
