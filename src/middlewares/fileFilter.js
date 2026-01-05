import HttpException from "../utils/HttpException.js";

const allowedMimes = ["image/png", "image/jpeg"];

const fileFilter = (req, file, callback) => {
    const { mimetype, originalname } = file;

    if (originalname.endsWith(".exe") || mimetype === "application/x-msdownload") {
        return callback(HttpException(400, ".exe files are not allowed"));
    }

    if (!allowedMimes.includes(mimetype)) {
        return callback(HttpException(400, "Only PNG or JPEG images are allowed"));
    }

    callback(null, true);
};

export default fileFilter;