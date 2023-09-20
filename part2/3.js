function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  
  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;
  
  const years = Math.floor(seconds / YEAR);
  const days = Math.floor(seconds / DAY);
  const hours = Math.floor(seconds / HOUR);
  const minutes = Math.floor(seconds / MINUTE);  
  const remainingSeconds = seconds % minutes;
  const parts = [];

  if (years > 0) {
    parts.push(years + " year" + (years > 1 ? "s" : ""));
  }
  if (days > 0) {
    parts.push(days + " day" + (days > 1 ? "s" : ""));
  }
  if (hours > 0) {
    parts.push(hours + " hour" + (hours > 1 ? "s" : ""));
  }
  if (minutes > 0) {
    parts.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
  }
  if (seconds > 0) {
    parts.push(remainingSeconds + " second" + (remainingSeconds > 1 ? "s" : ""));
  }
  
  if (parts.length === 1) {
    return parts[0];

  } else if (parts.length === 2) {
    return parts.join(" and ");

  } else {
    
    const lastPart = parts.pop();
    return parts.join(", ") + " and " + lastPart;
  }
}