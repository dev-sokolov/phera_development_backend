import express from "express";
import cors from "cors";

import imagesRouter from "./routes/images.router.js";
import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
    const app = express();

    const allowedOrigins = [
        "http://localhost:5173",
        process.env.FRONTEND_URL 
    ].filter(Boolean);  

    app.use(
        cors({
            origin: (origin, callback) => {
                if (!origin) return callback(null, true);

                if (allowedOrigins.includes(origin)) {
                    return callback(null, true);
                }

                return callback(new Error("CORS blocked: " + origin), false);
            },
        })
    );

    app.use(express.json());

    app.use("/api/upload", imagesRouter);

    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

export default startServer;