const createUrl = ({ url, query = {} }) => {
    const urlBuilder = new URL(url);

    Object.entries(query).forEach(([key, value]) => {
        if (value == null) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(val => urlBuilder.searchParams.append(key, val));
            return;
        }

        urlBuilder.searchParams.append(key, value);
    });

    return urlBuilder.toString();
};

const addHours = ({ date, hours = 0 }) => {
    const newDate = new Date(date.valueOf());
    newDate.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return newDate;
};

const formatTime = (time) => {
    const date = new Date(time);
    let hours = date.getHours();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12}${suffix}`;
};

export { createUrl, addHours, formatTime };
