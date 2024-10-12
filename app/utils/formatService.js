


export const formatService = (service) => {

    const formattedService = service
                            .split(" ")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ");
    return formattedService;
}