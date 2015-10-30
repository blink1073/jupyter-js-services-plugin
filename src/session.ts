// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import { 
  listRunningSessions, startNewSession, connectToSession 
} from 'jupyter-js-services';

import {
  ISessionProvider
} from 'jupyter-js-metaservice-plugin';


/**
 * Load the `jupyter-metaservice:session` extension.
 */
export
function loadSession(): Promise<ISessionProvider> {
  return Promise.resolve({
    name: 'jupyter-js-services',
    listRunningSessions: listRunningSessions,
    startNewSession: startNewSession,
    connectToSession: connectToSession
  });
}
