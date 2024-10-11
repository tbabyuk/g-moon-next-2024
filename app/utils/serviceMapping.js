// utils/serviceMapping.js


const serviceIdMappings = {
    swedish: {
        "30": "price_1Q8kgFRwIe8y2zCRZtqulioP", // live
        "45": "price_1Q8kgsRwIe8y2zCRYnwcpIoL", // live
        "60": "price_1Q8khaRwIe8y2zCRKTnr6hl3", // live
        "90": "price_1Q8ki5RwIe8y2zCRvOcsYol5" // live
    },
    deep: {
        "30": "price_1Q8kivRwIe8y2zCRfJGVWyFD", // live
        "45": "price_1Q8kjMRwIe8y2zCRXnXaa2u2", // live
        "60": "price_1Q8kjjRwIe8y2zCRJjyJ7e6c", // live
        "90": "price_1Q8kkHRwIe8y2zCRtvntuoVH" // live
    },
    shiatsu: {
        "30": "price_1Q8ko0RwIe8y2zCRVpbfOnt6", // live
        "45": "price_1Q8koSRwIe8y2zCRqumaHyH5", // live
        "60": "price_1Q8korRwIe8y2zCR7pqoKMtW", // live
        "90": "price_1Q8kpGRwIe8y2zCRSOPQzmpU" // live
    },
    thai: {
        "60": "price_1Q8klFRwIe8y2zCRaZ1LLh9r", // live
        "90": "price_1Q8klhRwIe8y2zCRmZ6kn0Xf" // live
    },
    couples: {
        "60": "price_1Q8kmTRwIe8y2zCR5oSBBgeG" // live
    },
    prenatal: {
        "60": "price_1Q8knFRwIe8y2zCR51PAOzp7" // live
    },
    postnatal: {
        "60": "price_1Q8krdRwIe8y2zCR7HlzhGDG" // live
    },
    scalp: {
        "30": "price_1Q8kqBRwIe8y2zCRje8xF7qp" // live
    },
    face: {
        "30": "price_1Q8kqiRwIe8y2zCRBA4vCTEt", // live
    },
    sugar: {
        "30": "price_1Q8kzhRwIe8y2zCRyzM4rYDg", // live
        "60": "price_1Q8l09RwIe8y2zCRu0HRJsWB", // live
    },
    sea: {
        "30": "price_1Q8l0XRwIe8y2zCRrESIdFW1", // live
        "60": "price_1Q8l0rRwIe8y2zCRzFlI908q" // live
    },
    coffee: {
        "30": "price_1Q8l1MRwIe8y2zCR9ysxR4Id", // live
        "60": "price_1Q8l1kRwIe8y2zCRSQiaIgR8" // live
    },
    aromatherapy: {
        "30": "price_1Q8l4XRwIe8y2zCRS9D3m6MH", // live
        "45": "price_1Q8l4uRwIe8y2zCRzpnjYPWa", // live
        "60": "price_1Q8l5QRwIe8y2zCRsSFxbL4u", // live
        "90": "price_1Q8l5sRwIe8y2zCRhyLfcxXi" // live
    },
    reflexology: {
        "30": "price_1Q8l7nRwIe8y2zCRQfcR6Ry3", // live
        "45": "price_1Q8l87RwIe8y2zCRAVAs34kw", // live
        "60": "price_1Q8l8URwIe8y2zCRcPbNsE6T", // live
        "90": "price_1Q8l8oRwIe8y2zCRlUmliVGm" // live
    },
    hot: {
        "30": "price_1Q8l6YRwIe8y2zCRZdDoNJPK", // live
        "60": "price_1Q8l7CRwIe8y2zCR438W7yfK" // live
    },
    table: {
        "30": "price_1Q8l9lRwIe8y2zCRVaP9V6rZ", // live
        "60": "price_1Q8lAARwIe8y2zCRZZH0Uogo" // live
    },
    consultation: {
        "30": "price_1Q8lAfRwIe8y2zCRiedOsQaH", // live
        "45": "price_1Q8lB0RwIe8y2zCR5FoZi2OX", // live
        "60": "price_1Q8lBMRwIe8y2zCRtladHJUo" // live
    }
};

export const getServiceId = (service, duration) => {
    const serviceFirstWord = service.split(" ")[0].toLowerCase();
    return serviceIdMappings[serviceFirstWord]?.[duration];
};
