import express from "express";
import cors from "cors";

import imagesRouter from "./routes/images.router.js";

import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/upload", imagesRouter);

    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);
    });
}

export default startServer;