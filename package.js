Package.describe({
  name: 'scholtzm:steam',
  version: '1.0.0',
  summary: 'Steam OpenID integration for Meteor',
  git: 'https://github.com/scholtzm/meteor-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('underscore', 'server');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('service-configuration', 'client');

  api.export('Steam');

  api.addFiles(['steam_configure.html', 'steam_configure.js'], 'client');

  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});
