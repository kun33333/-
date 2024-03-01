export function extractTime(dataString) {
  const date = new Date(dataString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

//帮助函数，用前导零填充个位数
function padZero(number) {
  return number.toString().padStart(2, "0");
}
