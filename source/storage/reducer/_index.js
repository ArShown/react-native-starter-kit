import path from 'path';
import { reduce, head } from 'ramda';

let context = require.context('./', false, /.js$/);
const reducerObject = reduce(
  (files, filename) => {
    if (head(path.basename(filename, '.js')) !== '_') {
      files[path.basename(filename, '.js')] = context(filename).default;
    }
    return files;
  },
  {},
  context.keys()
);

export default reducerObject;
