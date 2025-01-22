import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

const extensions = [
  {
    group: 'GROUP_NAME_CAHRT',
    folder: 'charts',
    extensions: ['sd-chart-column'],
  },
];

const tree = {
  groups: extensions.map(({ group, folder, extensions }) => ({
    group,
    extensions: extensions.map(name => {
      const pkg = JSON.parse(
        fs.readFileSync(
          path.resolve(`${folder}/${name}/package.json`),
          'utf-8',
        ),
      );
      return { name, version: pkg.version };
    }),
  })),
};

const treeFolder = process.env.EXTENSION_TREE_DIR;

if (!fs.existsSync(treeFolder)) {
  fs.mkdirSync(treeFolder, { recursive: true });
}

fs.writeFileSync(
  path.join(treeFolder, 'extensions.json'),
  JSON.stringify(tree, null, 2),
);
