import { buildSync } from "esbuild";
import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve("./src");

// بازگشتی همه فایل‌ها را پیدا می‌کند
function getFiles(dir, exts = [".ts", ".tsx", ".js", ".jsx"]) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(fullPath);
    }
  });
  return results;
}

// بررسی هر فایل با esbuild parse
function checkFiles() {
  const files = getFiles(SRC_DIR);
  const errors = [];

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    try {
      buildSync({
        stdin: {
          contents: content,
          resolveDir: path.dirname(file),
          sourcefile: file,
          loader: path.extname(file).slice(1), // ts, tsx, js, jsx
        },
        bundle: false,
        write: false,
        logLevel: "silent",
      });
    } catch (err) {
      errors.push(file);
    }
  });

  if (errors.length) {
    console.log("🚨 Files causing parse errors:");
    errors.forEach((f) => console.log(f));
  } else {
    console.log("✅ All src files are OK!");
  }
}

checkFiles();