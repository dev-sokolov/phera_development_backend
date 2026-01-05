import analyzePH from "../utils/analyzePH.js";

export const imagesController = async (req, res, next) => {
    try {
        if (!req.file) {
            return next({
                status: 400,
                message: "Image file is required"
            });
        }

        const { buffer, mimetype, originalname, size } = req.file;

        const result = await analyzePH({
            buffer,
            mimetype,
            originalname,
            size
        });

        res.status(200).json({
            phValue: result.phValue,
            date: result.date,
            confidence: result.confidence,
        });

    } catch (error) {
        next(error);
    }
};