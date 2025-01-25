import { program } from 'commander';

import { copyExtension } from './copy-extensions.js';
import { extensionList } from './extension-list.js';
import { generate } from './generate-official-extension-tree.js';

program
  .command('publish')
  .description('Publish the extension')
  .option('-a, --all', 'Publish all extensions')
  .option('-g, --group <group>', 'Publish a specific group')
  .option('-n, --name <name>', 'Publish a specific extension')
  .action(options => {
    if (options.all) {
      extensionList.forEach(({ folder, extensions }) => {
        extensions.forEach(name => {
          copyExtension(folder, name);
        });
      });
    } else if (options.group && options.name) {
      copyExtension(options.group, options.name);
    } else {
      console.error('Please specify either --all or --group and --name');
      return;
    }
    generate();
  });

program.parse(process.argv);
