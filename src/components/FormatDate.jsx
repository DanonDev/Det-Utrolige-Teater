const FormatDate = (dateString, includeYear = true) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    if (includeYear) {
        return `${day}. ${month.toUpperCase()} ${year}`;
    } else {
        return `${day}. ${month.toUpperCase()}`;
    }
};

export default FormatDate;
