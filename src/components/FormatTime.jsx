const FormatTime = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    if (hours === 0) {
        return `${minutes}`;
    } else if (minutes === 0) {
        return `${hours}`;
    } else {
        return `${hours}t. ${minutes}`;
    }
};

export default FormatTime;
