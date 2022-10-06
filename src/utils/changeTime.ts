export const getDate = (time: Date): string => {
    let timeNow;
    if (!isNaN(time.getDate())) {
        timeNow = time;
    } else {
        timeNow = new Date();
    };
    
    const day = timeNow.getDate() < 10 ? `0${timeNow.getDate()}` : `${timeNow.getDate()}`;
    const monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthStr[timeNow.getMonth()];

    return `${day} ${month}`;
};

export const getTime = (time: Date): string => {
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return `${hours}: ${minutes}`;
};
