Package.describe({
  name: 'forwarder:autoform-wizard',
  summary: 'Flow Router bindings for AutoForm Wizard.',
  version: '0.1.0',
  git: 'https://github.com/forwarder/meteor-wizard-flow-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'forwarder:autoform-wizard',
    'meteorhacks:flow-router@0.7.0'
  ], 'client');
  
  api.addFiles([
    'client.js'
  ], 'client');
});