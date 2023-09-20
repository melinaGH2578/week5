

function humanReadable(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${pad (hours)}: ${pad (minutes)}: ${pad (remainingSeconds)}:`
  }

  function pad (number){
    return number. toString (). padStart (2, "0");
  }
  