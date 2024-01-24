export const timeAgo = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  const diffInSeconds = diff / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return "Just now";
  }
};

export function formatDateString(dateString) {
  const options = (Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export const formatNumbers = ( amount, options ) => {
  return new Intl.NumberFormat("en-US", {
    ...options,
  }).format(amount);
};


export const truncate = (text) => text.length >= 40 ? text.slice(0, 40) + '...' : text



export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(amount);
};

