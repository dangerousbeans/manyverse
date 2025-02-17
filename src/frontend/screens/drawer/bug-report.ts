/* Copyright (C) 2018-2019 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const json = require('../../app-version');

export default 'mailto:' +
  'incoming+staltz-manyverse-6814019-issue-@incoming.gitlab.com' +
  '?subject=Bug report for version ' +
  json.version +
  '&body=Explain what happened and what you expected...';
