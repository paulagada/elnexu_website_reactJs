import fs from "fs";
import sharp from "sharp";
import path from "path";

const inputDir = "./src/assets";   // folder with your images
const outputDir = "./src/assets/webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const convertImages = async () => {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(
        outputDir,
        path.basename(file, path.extname(file)) + ".webp"
      );
      await sharp(inputPath)
        .webp({ quality: 70 }) // tweak quality if needed
        .toFile(outputPath);
      console.log(`Converted: ${file} → ${outputPath}`);
    }
  }
};

convertImages();
