import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Đường dẫn đến thư mục lưu trữ tệp tin
    const uploadPath = path.join(__dirname, "../assets/file/");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Đặt tên cho tệp tin đã tải lên
    cb(null, file.originalname);
  },
});
export const upload = multer({ storage: storage });
