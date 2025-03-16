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

  fs.writeFileSync(path.join('./extensions.json'), JSON.stringify(tree));
}

await generate();

process.exit(0);
