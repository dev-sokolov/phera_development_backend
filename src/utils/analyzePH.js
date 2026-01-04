const analyzePH = async (file) => {
    if (!file) {
        throw new Error("File is required for pH analysis");
    }

    // Генератор случайного числа с шагом
    const randomStep = (min, max, step) => {
        const steps = Math.floor((max - min) / step) + 1;
        const randStep = Math.floor(Math.random() * steps);
        return +(min + randStep * step).toFixed(1);
    };

    const phValue = randomStep(4.0, 7.0, 0.1);      // от 4.0 до 7.0, шаг 0.1
    const confidence = randomStep(92, 99, 1);       // от 92 до 99, шаг 1

    // Форматируем дату: DD.MM.YY | H:MM PM/AM
    const now = new Date();
    
    // Дата в формате DD.MM.YY
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2); // последние 2 цифры года
    
    // Время в формате 12-часовом с AM/PM
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // час '0' должен быть '12'
    
    const formattedDate = `${day}.${month}.${year} | ${hours}:${minutes} ${ampm}`;

    return {
        phValue,
        date: formattedDate,  // пример: "04.01.25 | 8:32 PM"
        confidence,
        originalname: file.originalname
    };
};

export default analyzePH;