Package.describe({
  name: 'forwarder:autoform-wizard-flow-router-extra',
  summary: 'Flow Router Extra bindings for AutoForm Wizard.',
  version: '0.3.3',
  git: 'https://github.com/forwarder/meteor-wizard-flow-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'forwarder:autoform-wizard@0.9.0',
    'ostrio:flow-router-extra@3.0.0'
  ], 'client');

  api.addFiles([
    'client.js'
  ], 'client');
});
