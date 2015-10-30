// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import { 
  getKernelSpecs, listRunningKernels, startNewKernel, connectToKernel,
  createKernelMessage
} from 'jupyter-js-services';

import {
  IKernelProvider
} from 'jupyter-js-metaservice-plugin';


/**
 * Load the `jupyter-metaservice:kernel` extension.
 */
export
function loadKernel(): Promise<IKernelProvider> {
  return Promise.resolve({
    name: 'jupyter-js-services',
    getKernelSpecs: getKernelSpecs,
    listRunningKernels: listRunningKernels,
    startNewKernel: startNewKernel,
    connectToKernel: connectToKernel,
    createKernelMessage: createKernelMessage
  });
}
