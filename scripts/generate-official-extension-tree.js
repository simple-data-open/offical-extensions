import { transformManifest } from '@simple-data-open/utils';

import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

import { extensionList } from './extension-list.js';

export async function generate() {
  const extensions = await Promise.all(
    extensionList.map(async ({ group, folder, extensions }) => {
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

  const treeFolder = process.env.OFFICIAL_DATA;

  if (!fs.existsSync(treeFolder)) {
    fs.mkdirSync(treeFolder, { recursive: true });
  }

  fs.writeFileSync(
    path.join(treeFolder, 'extensions.json'),
    JSON.stringify(tree),
  );
}
