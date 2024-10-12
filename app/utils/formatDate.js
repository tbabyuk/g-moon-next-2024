


export const formatDate = (date) => {
    console.log("logging date from date param and its type", date, typeof date)
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return formattedDate;
  }