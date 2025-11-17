import multer from "multer";
// import HttpException from "../utils/HttpException.js";
import fileFilter from "./fileFilter.js";

const storage = multer.memoryStorage();

const limits = {
  fileSize: 10 * 1024 * 1024, // 10MB
};

// const fileFilter = (req, file, callback) => {
//     if (file.originalname.endsWith(".exe") || file.mimetype === "application/x-msdownload") {
//         return callback(HttpException(400, ".exe files are not allowed"));
//     }
//     callback(null, true);
// };

const upload = multer({ storage, limits, fileFilter });

export default upload;