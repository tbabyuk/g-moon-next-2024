


export const formatDate = (date) => {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return formattedDate;
  }