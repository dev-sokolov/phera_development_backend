const analyzePH = async (file) => {
    if (!file) {
        throw new Error("File is required for pH analysis");
    }
    // console.log("file:", file);

    // console.log("Received file:", file.originalname);
    // console.log("Size:", file.size, "bytes");
    // console.log("Type:", file.mimetype);
    // console.log("fille:", file.buffer);
    

    // Генератор случайного числа с шагом
    const randomStep = (min, max, step) => {
        const steps = Math.floor((max - min) / step) + 1;
        const randStep = Math.floor(Math.random() * steps);
        return +(min + randStep * step).toFixed(1);
    };

    const phValue = randomStep(4.0, 7.0, 0.1);      // от 4.0 до 7.0, шаг 0.1
    const confidence = randomStep(92, 99, 1);       // от 92 до 99, шаг 1

    // Форматируем дату: DD.MM.YYYY, HH:MM:SS
    const now = new Date();
    const datePart = now.toLocaleDateString("en-GB").replace(/\//g, "."); // меняем слэши на точки
    const timePart = now.toLocaleTimeString("en-GB", { hour12: false });
    const formattedDate = `${datePart}, ${timePart}`;

    return {
        phValue,
        date: formattedDate,  // пример: "14.11.2025, 13:06:08"
        confidence,
        originalname: file.originalname
    };
};

export default analyzePH;