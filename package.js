Package.describe({
  summary: "Segment.io integration for Meteor (works on both client and server)",
  version: "2.1.1_1",
  name: "percolatestudio:segment.io",
  git: "https://github.com/percolatestudio/meteor-segment.io.git"
});

Npm.depends({
  "analytics-node": "2.1.1",
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use("underscore");
  api.addFiles('snippet.js', 'client');
  api.addFiles('server.js', 'server');
  api.export('analytics');
});
