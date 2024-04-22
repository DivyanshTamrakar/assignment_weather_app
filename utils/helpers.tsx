export const getCurrentDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const day = days[currentDate.getDay()];
  const hours = ("0" + currentDate.getHours()).slice(-2);
  const minutes = ("0" + currentDate.getMinutes()).slice(-2);

  return `${day}, ${hours}:${minutes}`;
};

export const convertUnixToAMPM = (unixTimestamp: number) => {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTimestamp * 1000;

  // Create a new Date object with the milliseconds
  const date = new Date(milliseconds);

  // Get hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Format time as HH:MM AM/PM
  const formattedTime = hours + ":" + minutes + " " + ampm;

  return formattedTime;
};
