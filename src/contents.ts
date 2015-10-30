// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { 
  Contents
} from 'jupyter-js-services';

import {
  IContentsProvider
} from 'jupyter-js-metaservice-plugin';


/**
 * Load the `jupyter-metaservice:contents` extension.
 */
export
function loadContents(): Promise<IContentsProvider> {
  return Promise.resolve({
    name: 'jupyter-js-services',
    contentsFactory: (baseUrl: string) => { return new Contents(baseUrl); }
  });
}
