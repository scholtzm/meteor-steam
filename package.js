Package.describe({
  name: 'scholtzm:steam',
  version: '1.1.0',
  summary: 'Steam OpenID integration for Meteor',
  git: 'https://github.com/scholtzm/meteor-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('oauth2@1.0.0', ['client', 'server']);
  api.use('oauth@1.0.0', ['client', 'server']);
  api.use('http@1.0.0', 'server');
  api.use('underscore@1.0.0', 'server');
  api.use('templating@1.0.0', 'client');
  api.use('random@1.0.0', 'client');
  api.use('service-configuration@1.0.0', 'client');

  api.export('Steam');

  api.addFiles(['steam_configure.html', 'steam_configure.js'], 'client');

  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});
