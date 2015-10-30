// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { 
  getConfigSection 
} from 'jupyter-js-services';

import {
  IConfigProvider
} from 'jupyter-js-metaservice-plugin';


/**
 * Load the `jupyter-metaservice:config` extension.
 */
export
function loadConfig(): Promise<IConfigProvider> {
  return Promise.resolve({
    name: 'jupyter-js-services',
    getConfigSection: getConfigSection
  });
}
