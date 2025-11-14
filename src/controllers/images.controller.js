// import analyzePH from "../utils/analyzePH.js";

// export const imagesController = async (req, res) => {
//     const result = await analyzePH();

//     res.json(result);
// }

// import analyzePH from "../utils/analyzePH.js";

// export const imagesController = async (req, res, next) => {
//     try {
//         // Проверяем, загрузился ли файл
//         if (!req.file) {
//             return next({
//                 status: 400,
//                 message: "Image file is required"
//             });
//         }

//         // Извлекаем данные файла
//         const { buffer, mimetype, originalname, size } = req.file;

//         // Передаём файл в analyzePH
//         const result = await analyzePH({
//             buffer,
//             mimetype,
//             originalname,
//             size
//         });

//         res.json({
//             success: true,
//             data: result
//         });

//     } catch (error) {
//         next(error);
//     }
// };

import analyzePH from "../utils/analyzePH.js";

export const imagesController = async (req, res, next) => {
    try {
        // Проверяем, был ли загружен файл
        if (!req.file) {
            return next({
                status: 400,
                message: "Image file is required"
            });
        }

        // Достаём нужные поля
        const { buffer, mimetype, originalname, size } = req.file;

        // Передаём в анализатор картинок все данные
        const result = await analyzePH({
            buffer,
            mimetype,
            originalname,
            size
        });

        // Успешный ответ
        res.status(200).json({
            phValue: result.phValue,
            date: result.date,
            confidence: result.confidence,
            // image: result.imageBase64 ?? null, 
        });

    } catch (error) {
        next(error);
    }
};