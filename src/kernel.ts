// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import { 
  getKernelSpecs, listRunningKernels, startNewKernel, connectToKernel,
  createKernelMessage
} from 'jupyter-js-services';


/**
 * Return a namespace with the exported function.
 */
export
function loader(): any {
  return {
    'getKernelSpecs': getKernelSpecs,
    'listRunningKernels': listRunningKernels,
    'startNewKernel': startNewKernel,
    'connectToKernel': connectToKernel,
    'createKernelMessage': createKernelMessage
  }
}
