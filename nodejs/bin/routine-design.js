#!/usr/bin/env node
const program = require('commander');

program
  .command('capture', 'Saves a screenshot images of every component in GCP')
  .command('directory', 'Manage a single directory')
  .command('docker', 'Operate in a Docker container')
  .command('render', 'Render a directory')
  .command('write', 'Write files')
  .command('start-server', 'Start server')
  .parse(process.argv);
