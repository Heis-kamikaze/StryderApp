// Add a zero to infront of time if the hour count is less than 10 or single digith
function padZero(number) {
    return number.toString().padStart(2, "0")
}

export const TimeExtract = (dateStr) => {
 const date = new Date(dateStr);
 const hours = padZero(date.getHours());
 const minutes = padZero(date.getMinutes());
 return `${hours}:${minutes}`
}

