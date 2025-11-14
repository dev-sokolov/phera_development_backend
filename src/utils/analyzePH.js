// const analyzePH = () => {
//     return (        
//         {ph: 55}      
//     )
// };

// export default analyzePH;

// const analyzePH = async (file) => {
//     console.log("Получен файл:", file.originalname);
//     console.log("Размер:", file.size);
//     console.log("Тип:", file.mimetype);

//     // file.buffer содержит бинарные данные картинки
//     // здесь ты можешь делать аналитику

//     return {
//         ph: 55,
//         originalname: file.originalname
//     };
// };

// export default analyzePH;

// const analyzePH = async (file) => {
//     if (!file) {
//         throw new Error("File is required for pH analysis");
//     }

//     console.log("Получен файл:", file.originalname);
//     console.log("Размер файла:", file.size, "байт");
//     console.log("Тип:", file.mimetype);

//     // Генератор случайного числа с шагом
//     const randomStep = (min, max, step) => {
//         const steps = Math.floor((max - min) / step) + 1;
//         const randStep = Math.floor(Math.random() * steps);
//         return +(min + randStep * step).toFixed(1);
//     };

//     const phValue = randomStep(4.0, 7.0, 0.1);      // от 4.0 до 7.0, шаг 0.1
//     const confidence = randomStep(92, 99, 1);       // от 92 до 99, шаг 1

//     // Здесь будет твоя логика анализа изображения
//     // --- например, обработка file.buffer через модели, OpenCV, AI и т.п. ---

//     // Возврат фейковых данных — пока не реализован анализ
//     return {
//         phValue,              // примерная структура
//         date: new Date().toISOString(),
//         confidence: confidence.toString(),         // условная уверенность анализа
//         originalname: file.originalname
//     };
// };

// export default analyzePH;

// const analyzePH = async (file) => {
//     if (!file) {
//         throw new Error("File is required for pH analysis");
//     }

//     console.log("Received file:", file.originalname);
//     console.log("Size:", file.size, "bytes");
//     console.log("Type:", file.mimetype);

//     // Генератор случайного числа с шагом
//     const randomStep = (min, max, step) => {
//         const steps = Math.floor((max - min) / step) + 1;
//         const randStep = Math.floor(Math.random() * steps);
//         return +(min + randStep * step).toFixed(1);
//     };

//     const phValue = randomStep(4.0, 7.0, 0.1);      // от 4.0 до 7.0, шаг 0.1
//     const confidence = randomStep(92, 99, 1);       // от 92 до 99, шаг 1

//     // Форматируем дату для англоязычных пользователей: DD.MM.YYYY, HH:MM:SS
//     const now = new Date();
//     const formattedDate = now.toLocaleString("en-GB", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false // 24-часовой формат
//     })

//     return {
//         phValue,
//         date: formattedDate,  // пример: "14.11.2025, 13:06:08"
//         confidence: confidence.toString(),
//         originalname: file.originalname
//     };
// };

// export default analyzePH;

const analyzePH = async (file) => {
    if (!file) {
        throw new Error("File is required for pH analysis");
    }

    console.log("Received file:", file.originalname);
    console.log("Size:", file.size, "bytes");
    console.log("Type:", file.mimetype);

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
        confidence: confidence.toString(),
        originalname: file.originalname
    };
};

export default analyzePH;