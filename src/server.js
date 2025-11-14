// import express from "express";
// import cors from "cors";

// import imagesRouter from "./routes/images.router.js";

// import errorHandler from "./middlewares/errorHandler.js";

// const startServer = () => {
//     const app = express();

//     app.use(cors());
//     app.use(express.json());

//     app.use("/api/upload", imagesRouter);

//     app.use(errorHandler);

//     const PORT = process.env.PORT || 3000;

//     app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);
//     });
// }

// export default startServer;

import express from "express";
import cors from "cors";

import imagesRouter from "./routes/images.router.js";
import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
    const app = express();

    const allowedOrigins = [
        "http://localhost:5173",                 // локальный фронтенд
        "https://phera-development.vercel.app",  // Vercel продакшен
    ];

    app.use(
        cors({
            origin: (origin, callback) => {
                // Разрешаем запросы типа Postman (без origin)
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