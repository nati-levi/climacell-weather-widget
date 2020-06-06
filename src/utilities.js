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
    const hours = new Date(time).getHours();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    let display = hours % 12;
    if (display === 0) { display = 12; }
    return `${display}${suffix}`;
};

export { createUrl, addHours, formatTime };
