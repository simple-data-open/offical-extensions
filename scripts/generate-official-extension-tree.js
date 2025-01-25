import { transformManifest } from '@simple-data-open/utils';

import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

const extension_list = [
  {
    group: 'GROUP_NAME_CAHRT',
    folder: 'charts',
    extensions: ['sd-chart-column'],
  },
];

async function main() {
  const extensions = await Promise.all(
    extension_list.map(async ({ group, folder, extensions }) => {
      const manifests = await Promise.all(
        extensions.map(async name => {
          const pkg = JSON.parse(
            fs.readFileSync(
              path.resolve(`${folder}/${name}/package.json`),
              'utf-8',
            ),
          );
          const { debug, ...manifest } = await transformManifest(pkg);
          return manifest;
        }),
      );
      return {
        group,
        extensions: manifests,
      };
    }),
  );

  const tree = {
    groups: extensions,
  };

  const treeFolder = process.env.EXTENSION_TREE_DIR;

  if (!fs.existsSync(treeFolder)) {
    fs.mkdirSync(treeFolder, { recursive: true });
  }

  fs.writeFileSync(
    path.join(treeFolder, 'extensions.json'),
    JSON.stringify(tree),
  );
}

await main();

process.exit(0);
