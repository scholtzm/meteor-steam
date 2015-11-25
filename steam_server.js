Steam = {};

OAuth.registerService('steam', 2, null, function(query) {
  var steamID = verify(query);
  return {
    serviceData: {id: steamID},
    options: {profile: {id: steamID}}
  };
});

function verify(query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'steam'});
  if (!config)
    throw new ServiceConfiguration.ConfigError('Service not configured.');

  var response;
  try {
    response = HTTP.post('https://steamcommunity.com/openid/login', {
      params: _.extend(query, { 'openid.mode': 'check_authentication' }),
      timeout: config.timeout ? Number(config.timeout) : 10000
    });
  } catch(err) {
    throw new Meteor.Error('openid-handshake-failed', 'Failed to complete OpenID handshake with Steam.');
  }

  if (response.content && response.content.indexOf('is_valid:true') !== -1) {
    return _.last(query['openid.claimed_id'].split('/'));
  } else {
    throw new Meteor.Error('openid-invalid-claimed-id', 'The SteamID provided in the OpenID request was invalid.');
  }
}

Steam.retrieveCredential = function(credentialToken) {
  return OAuth.retrieveCredential(credentialToken);
};
