import fs from 'node:fs';
import path from 'node:path';

function copyFolderRecursive(source, target) {
  // 检查目标文件夹是否存在，如果不存在则创建
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // 读取源文件夹的内容
  const files = fs.readdirSync(source);

  for (const file of files) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // 检查当前路径是文件还是文件夹
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // 如果是文件夹，递归复制
      copyFolderRecursive(sourcePath, targetPath);
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

export function copyExtension(group, name) {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(group, name, 'package.json'), 'utf-8'),
  );

  const source = path.resolve(group, name, 'dist', pkg.version);
  const target = path.join(process.env.EXTENSIONS_DIR, name, pkg.version);

  // 检查根目录
  if (!fs.existsSync(process.env.EXTENSIONS_DIR)) {
    fs.mkdirSync(process.env.EXTENSIONS_DIR);
  }
  // 检查目标文件夹
  if (!fs.existsSync(path.join(process.env.EXTENSIONS_DIR, name))) {
    fs.mkdirSync(path.join(process.env.EXTENSIONS_DIR, name));
  }

  copyFolderRecursive(source, target);
}
