/*
 * Request handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');
var config = require('../config');

// Define the handlers object
var handlers = {};

/*
 * HTML handlers
 *
 */

 // Index handler
handlers.index = function(data, callback) {

  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Welcome to Pablo\'s Pizza!',
      'head.description': 'Sign up today and start ordering pizza from anywhere.',
      'body.class': 'index'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('index', templateData, function(err, str) {
      if (!err && str) {

        // Add universal header and footer
       helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
         if (!err && str) {
           // Return that page as HTML
           callback(200, str, 'html');
         } else {
           callback(500, undefined, 'html');
         }
       });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Edit a user account
handlers.userEdit = function(data, callback) {

  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Edit your account',
      'body.class': 'userEdit'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('useredit', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// User has been deleted
handlers.userDeleted = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'User deleted',
      'head.description': 'Your user account has been deleted',
      'body.class': 'userDeleted'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('userDeleted', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// User logged out
handlers.userlogout = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

   // Prepare data for interpolation
   var templateData = {
     'head.title': 'Logged out',
     'head.description': 'You have been logged out of your account',
     'body.class': 'loggedout'
   };

   // Read in the index teamplate as a string
   helpers.getTemplate('loggedout', templateData, function(err, str) {
     if (!err && str) {
       // Add the universal header and footer
       helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
         if (!err && str) {
           // Return that page as HTML
           callback(200, str, 'html');
         } else {
           callback(500, undefined, 'html');
         }
       });
     } else {
       callback(500, undefined, 'html');
     }
   });
  } else {
   callback(405, undefined, 'html');
  }
};

// Form for ordering a pizza
handlers.orderPizza = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Order your pizza now!',
      'body.class': 'orderPizza'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('orderpizza', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Form for ordering a pizza
handlers.orderReview = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Review your order',
      'body.class': 'orderReview'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('ordercheckout', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Form for ordering a pizza
handlers.orderPlaced = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Bravo!',
      'body.class': 'orderPlaced'
    };

    // Read in the index teamplate as a string
    helpers.getTemplate('orderplaced', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Pizza site Favicon
handlers.pizzaFavicon = function(data, callback) {

  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Read in the favicon's data
    helpers.getStaticAssetContents('favicon.ico', function(err, data) {
      if (!err && data) {

        // Callback the data
        callback(200, data, 'favicon');
      } else {
        callback(500);
      }
    });
  } else {
    callback(405);
  }
};

// Log in handler
handlers.userlogin = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {

   // Prepare data for interpolation
   var templateData = {
     'head.title': 'Login to your account',
     'head.description': 'Please enter your phone number and password to access your account',
     'body.class': 'login'
   };

   // Read in the index teamplate as a string
   helpers.getTemplate('login', templateData, function(err, str) {
     if (!err && str) {
       // Add the universal header and footer
       helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
         if (!err && str) {
           // Return that page as HTML
           callback(200, str, 'html');
         } else {
           callback(500, undefined, 'html');
         }
       });
     } else {
       callback(500, undefined, 'html');
     }
   });
  } else {
   callback(405, undefined, 'html');
  }
};

// Public assets' handler
handlers.publicAssets = function(data, callback) {

  // Reject any request that isn't a GET
  if (data.method == 'get') {

    // Get the filename which is requested
    var assetName = data.trimmedPath.replace('public/', '').trim();
    if (assetName.length > 0) {
      // Read the asset's data
      helpers.getStaticAssetContents(assetName, function(err, data) {
        if (!err && data) {
          // Determine the content type, default to plain text
          var contentType = 'plain';
           if (assetName.indexOf('.css') > -1) {
            contentType = 'css';
          }
          if (assetName.indexOf('.png') > -1) {
            contentType = 'png';
          }
          if (assetName.indexOf('.jpg') > -1) {
            contentType = 'jpg';
          }
          if (assetName.indexOf('.ico') > -1) {
            contentType = 'favicon';
          }
           // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404);
        }
      });
    } else {
      callback(404);
    }
  } else {
    callback(405);
  }
};

// Create account
handlers.userSignUp = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
     // Prepare data for interpolation
    var templateData = {
      'head.title': 'Create an account',
      'head.description': 'Signup is easy and only takes a few seconds.',
      'body.class': 'accountCreate'
    };
    // Read in the index teamplate as a string
    helpers.getTemplate('signup', templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addHeaderAndFooterTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

 /*
 * JSON Users REST API handlers
 *
 */

// Users handler
handlers.users = function(data, callback) {
  var acceptablemethods = ['post', 'get', 'put', 'delete'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
handlers._users = {};

// Users - POST
// Required data: username, name, mail, address, password
// Optional data: none
handlers._users.post = function(data, callback) {
  // Check that all required fields are filled out
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var name = typeof(data.payload.name) == 'string' && data.payload.name.trim().length > 0 ? data.payload.name.trim() : false;
  var mail = typeof(data.payload.mail) == 'string' && data.payload.mail.trim().length > 0 && data.payload.mail.trim().indexOf('@') > -1 && data.payload.mail.trim().indexOf('.') > -1 && data.payload.mail.trim().indexOf('@') < data.payload.mail.trim().indexOf('.') - 1 ? data.payload.mail.trim() : false;
  var address = typeof(data.payload.address) == 'string' && data.payload.address.trim().length > 0 ? data.payload.address.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  if (username && name && mail && address && password) {

    // Check whether the user exists
    _data.read('users', username, function(err, data) {
      if (err) {
        // Hash the password
        var hashedpassword = helpers.hash(password);

        // Create the user object
        if (hashedpassword) {
          var userobject = {
            'username': username,
            'name': name,
            'mail': mail,
            'address': address,
            'hashedPassword': hashedpassword,
            'signupDate': Date.now()
          };

          // Store the user
          _data.write('users', username, userobject, function(err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, {'Error': 'Could not create the new user'});
            }
          });
        } else {
          callback(500, {'Error': 'Could not has the user\'s password'});
        }

      } else {
        // User already exists
        callback(400, {'Error': 'A user with that name already exists'})
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields'});
  }
};

// Users - GET
// Required data: username
// Optional data: none
handlers._users.get = function(data, callback) {
  // Check that the username is valid
  var username = typeof(data.queryStringObject.username) == 'string' && data.queryStringObject.username.trim().length > 0 ? data.queryStringObject.username.trim() : false;
  if (username) {
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the username
    handlers._tokens.verirytoken(token, username, function(tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', username, function(err, data) {
          if (!err && data) {
            // Remove hashed password from user object before returning it
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403, {'Error': 'Missing required token in header, or token is invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
};

// Users - PUT
// Required data: username
// Optional data: name, mail, address, password (at least one must be specified)
handlers._users.put = function(data, callback) {
  // Check for the required field
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;

  // Check for the optional fields
  var name = typeof(data.payload.name) == 'string' && data.payload.name.trim().length > 0 ? data.payload.name.trim() : false;
  var mail = typeof(data.payload.mail) == 'string' && data.payload.mail.trim().length > 0 && data.payload.mail.trim().indexOf('@') > -1 && data.payload.mail.trim().indexOf('.') > -1 && data.payload.mail.trim().indexOf('@') < data.payload.mail.trim().indexOf('.') - 1 ? data.payload.mail.trim() : false;
  var address = typeof(data.payload.address) == 'string' && data.payload.address.trim().length > 0 ? data.payload.address.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // Error if username is invalid
  if (username) {
    if (name || mail || address || password) {
      // Get the token from the headers
      var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
      // Verify that the given token is valid for the username
      handlers._tokens.verirytoken(token, username, function(tokenIsValid) {
        if (tokenIsValid) {
          // Lookup the user
          _data.read('users', username, function(err, userData) {
            if (!err && userData) {
              // Update the fields necessary
              if (name) {
                userData.name = name;
              }
              if (mail) {
                userData.mail = mail;
              }
              if (address) {
                userData.address = address;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }

              // Store the new updates
              _data.update('users', username, userData, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, {'Error': 'Could not update user'});
                }
              });
            } else {
              callback(400, {'Error': 'The specified user does not exist'});
            }
          });
        } else {
          callback(403, {'Error': 'Missing required token in header, or token is invalid'});
        }
      });
    } else {
      callback(400, {'Error': 'Missing fields to update'});
    }
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
};

// Users - DELETE
// Required data: username
handlers._users.delete = function(data, callback) {
  // Check that the username is valid
  var username = typeof(data.queryStringObject.username) == 'string' && data.queryStringObject.username.trim().length > 0 ? data.queryStringObject.username.trim() : false;
  if (username) {
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the username
    handlers._tokens.verirytoken(token, username, function(tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', username, function(err, data) {
          if (!err && data) {
            _data.delete('users', username, function(err) {
              if (!err) {
                // Delete each of the tokens associated with the user
                var usertokens = typeof(data.tokens) == 'object' && data.tokens instanceof Array ? data.tokens : [];
                var tokenstodelete = usertokens.length;
                if (tokenstodelete > 0) {
                  var tokensdeleted = 0;
                  var deletionErrors = false;
                  // Loop through the tokens
                  usertokens.forEach(function(tokenId) {

                    // Delete the token
                    _data.delete('tokens', tokenId, function(err) {
                      if (err) {
                        deletionErrors = true;
                      }
                      tokensdeleted++;
                      if(tokensdeleted == tokenstodelete) {
                        if (!deletionErrors) {
                          callback(200);
                        } else {
                          callback(500, {'Error': 'Errors encountered while attempting to delete all of the user\'s tokens. All orders may not have deleted from the system successfully'});
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, {'Error': 'Could not delete the specified user'});
              }
            });
          } else {
            callback(400, {'Error': 'Could not find the specified user'});
          }
        });
      } else {
        callback(403, {'Error': 'Missing required token in header, or token is invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
};

// Tokens
handlers.tokens = function(data, callback) {
  var acceptablemethods = ['post', 'get', 'put', 'delete'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the tokens methods
handlers._tokens = {};

// Tokens - POST
// Required data: username, password
// Optional data: none
handlers._tokens.post = function(data, callback) {

  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  if (username && password) {
    // Lookup the user who matches that username
    _data.read('users', username, function(err, userData) {
      if (!err && userData) {
        var usertokens = typeof(userData.tokens) == 'object' && userData.tokens instanceof Array ? userData.tokens : [];

        // Hash the sent password, and compare it to the stored password
        var hashedpassword = helpers.hash(password);
        if (hashedpassword == userData.hashedPassword) {
          // If valid, create a new token with a random name. Set expiration date 1 hour in the future
          var tokenid = helpers.createRandomString(20);
          var expires = Date.now() + 1000 * 60 * 60;

          var tokenobject = {
            'username': username,
            'id': tokenid,
            'expires': expires
          };

          // Store the token
          _data.write('tokens', tokenid, tokenobject, function(err) {
            if (!err) {
              // Add the token id to the user's object
              userData.tokens = usertokens;
              userData.tokens.push(tokenid);

              // Save the token into user data
              _data.update('users', username, userData, function(err) {
                if (!err) {
                  // Return the data about the new token
                  callback(200, tokenobject);
                } else {
                  callback(500, {'Error': 'Could not update the user with the new token'});
                }
              });
            } else {
              callback(500, {'Error': 'Could not create the new token'});
            }
          });
        } else {
          callback(400, {'Error': 'Password did not match the specified user\'s stored password'});
        }
      } else {
        callback(400, {'Error': 'Could not find the specified user'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields'});
  }
}

// Tokens - GET
// Required data: id
// Optional data: none
handlers._tokens.get = function(data, callback) {
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData) {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
}

// Tokens - PUT
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function(data, callback) {
  var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  var extend = typeof(data.payload.extend) == 'boolean' && data.payload.extend == true ? true : false;
  if (id && extend) {
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData) {
      if (!err && tokenData) {
        // Check to make sure the token is not already expired
        if (tokenData.expires > Date.now()) {
          // Set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;

          // Store the updated token
          _data.update('tokens', id, tokenData, function(err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, {'Error': 'Could not update the token\'s expiration'});
            }
          });
        } else {
          callback(400, {'Error': 'Token already expired. Cannot be expired'});
        }
      } else {
        callback(400, {'Error': 'specified token does not exist'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field(s) or field(s) are invalid'});
  }
}

// Tokens - DELETE
// Required data: id
// Optional data: none
handlers._tokens.delete = function(data, callback) {
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the token
    _data.read('tokens', id, function(err, data) {
      if (!err && data) {
        _data.delete('tokens', id, function(err) {
          if (!err) {
            callback(200);
          } else {
            callback(500, {'Error': 'Could not delete the specified token'});
          }
        });
      } else {
        callback(400, {'Error': 'Could not find the specified token'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
}

// Verify if a given token id is currently valid for a given user
handlers._tokens.verirytoken = function(id, username, callback) {
  // Lookup the token
  _data.read('tokens', id, function(err, tokenData) {
    if (!err && tokenData) {
      // Check that the token is for the given user and has not expired
      if (tokenData.username == username && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Login
handlers.login = function(data, callback) {
  var acceptablemethods = ['post'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._login[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the login methods
handlers._login = {};

// Login - POST
// Required data: username, password
handlers._login.post = function(data, callback) {

  // Check for the required fields
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // If reqired fields are valid
  if (username && password) {
    // Forward the request to the tokens handler
    handlers._tokens.post(data, function(statuscode, msg) {
      callback(statuscode, msg);
    });
  } else {
    callback(400, {'Error': 'Missing required fields, or invalid'});
  }
};

// Logout
handlers.logout = function(data, callback) {
  var acceptablemethods = ['post'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._logout[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the logout methods
handlers._logout = {};

// Logout - POST
// Required data: username, password, tokenId
handlers._logout.post = function(data, callback) {
  // Check for the required fields
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  var tokenid = typeof(data.payload.token) == 'string' && data.payload.token.trim().length == 20 ? data.payload.token.trim() : false;

  // If reqired fields are valid
  if (username && password && tokenid) {
    // Get the token from the headers

    // Verify that the given token is valid for the username
    handlers._tokens.verirytoken(tokenid, username, function(tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            // Lookup the token
            _data.read('tokens', tokenid, function(err, data) {
              if (!err && data) {
                _data.delete('tokens', tokenid, function(err) {
                  if (!err) {
                    // Retrieve the tokens from the user object
                    var usertokens = typeof(userData.tokens) == 'object' && userData.tokens instanceof Array ? userData.tokens : [];

                    // Remove the token id from the user's object
                    var checkposition = usertokens.indexOf(tokenid);
                    userData.tokens.splice(checkposition, 1);

                    // Save the token into user data
                    _data.update('users', username, userData, function(err) {
                      if (!err) {
                        // Return the data about the new token
                        callback(200);
                      } else {
                        callback(500, {'Error': 'Could not update the user with the new token'});
                      }
                    });
                  } else {
                    callback(500, {'Error': 'Could not delete the specified token'});
                  }
                });
              } else {
                callback(400, {'Error': 'Could not find the specified token'});
              }
            });
          } else {
            callback(400, {'Error': 'The specified user does not exist'});
          }
        });
      } else {
        callback(403, {'Error': 'Missing required token in header, or token is invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields, or invalid'});
  }
};

// Menu items
handlers.menu = function(data, callback) {
  var acceptablemethods = ['get'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._menu[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the menu methods
handlers._menu = {};

// Menu items - GET
// Required data: token
// Optional data: none
handlers._menu.get = function(data, callback) {
  // Check that the token is valid
  var token = typeof(data.queryStringObject.token) == 'string' && data.queryStringObject.token.trim().length == 20 ? data.queryStringObject.token.trim() : false;
  if (token) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        callback(200, config.menuItemsData);
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
}

// Cart items
handlers.cart = function(data, callback) {
  var acceptablemethods = ['get', 'delete'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._cart[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the cart methods
handlers._cart = {};

// CART - GET
// Required data: username, token
// Optional data: none
handlers._cart.get = function(data, callback) {
  // Check that the token is valid
  var token = typeof(data.queryStringObject.token) == 'string' && data.queryStringObject.token.trim().length == 20 ? data.queryStringObject.token.trim() : false;
  var username = typeof(data.queryStringObject.username) == 'string' && data.queryStringObject.username.trim().length > 0 ? data.queryStringObject.username.trim() : false;
  if (token && username) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            var cartobject = typeof(userData.cart) == 'object' && userData.cart instanceof Array && userData.cart.length > 0 ? userData.cart : [];
            callback(200, cartobject);
          } else {
            callback(404);
          }
        });
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
}

// CART - DELETE
// Required data: username, token
// Optional data: none
handlers._cart.delete = function(data, callback) {
  // Check that the token is valid
  var token = typeof(data.queryStringObject.token) == 'string' && data.queryStringObject.token.trim().length == 20 ? data.queryStringObject.token.trim() : false;
  var username = typeof(data.queryStringObject.username) == 'string' && data.queryStringObject.username.trim().length > 0 ? data.queryStringObject.username.trim() : false;
  if (token && username) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            userData.cart = [];
            // Store the new updates
            _data.update('users', username, userData, function(err) {
              if (!err) {
                callback(200);
              } else {
                callback(500, {'Error': 'Could not update user'});
              }
            });
          } else {
            callback(404);
          }
        });
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
}

// Cart items
handlers.cartitems = function(data, callback) {
  var acceptablemethods = ['post', 'delete'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._cartitems[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the cart items methods
handlers._cartitems = {};

// Cart items - DELETE
// Required data: username, token, items
// Optional data: none
handlers._cartitems.delete = function(data, callback) {
  // Check that the token is valid
  var token = typeof(data.payload.token) == 'string' && data.payload.token.trim().length == 20 ? data.payload.token.trim() : false;
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var items = typeof(data.payload.items) == 'object' && data.payload.items instanceof Array && data.payload.items.length > 0 ? data.payload.items : false;

  if (token && username && items) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            var cartobject = typeof(userData.cart) == 'object' && userData.cart instanceof Array && userData.cart.length > 0 ? userData.cart : [];

            // Loop through the items to remove, and remove them if they're in the list
            items.forEach(function(item) {
              var itemposition = cartobject.indexOf(item.trim());
              if (item.trim().length > 0 &&  itemposition > -1) {
                cartobject.splice(itemposition, 1);
              }
            });

            userData.cart = cartobject;
            // Store the new updates
            _data.update('users', username, userData, function(err) {
              if (!err) {
                callback(200);
              } else {
                callback(500, {'Error': 'Could not update user'});
              }
            });
          } else {
            callback(404);
          }
        });
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields, or invalid'});
  }
};

// Cart items - POST
// Required data: username, token, items
// Optional data: none
handlers._cartitems.post = function(data, callback) {

  // Check that the token is valid
  var token = typeof(data.payload.token) == 'string' && data.payload.token.trim().length == 20 ? data.payload.token.trim() : false;
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;
  var items = typeof(data.payload.items) == 'object' && data.payload.items instanceof Array && data.payload.items.length > 0 ? data.payload.items : false;

  if (token && username && items) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            var cartobject = typeof(userData.cart) == 'object' && userData.cart instanceof Array && userData.cart.length > 0 ? userData.cart : [];

            // Check if some of the items already in the cart are not present anymore in the list of ingredients provided in the request
            if (userData.cart) {
              userData.cart.forEach(function(item) {
                if (items.indexOf(item) == -1) {
                  var itemposition = userData.cart.indexOf(item);
                  userData.cart.splice(itemposition, 1);
                }
              });
            }

            // Loop through the items to add, and add them if they're not in the list
            items.forEach(function(item) {
              var itemposition = cartobject.indexOf(item.trim());
              if (item.trim().length > 0 &&  itemposition < 0) {
                cartobject.push(item.trim());
              }
            });

            userData.cart = cartobject;
            // Store the new updates
            _data.update('users', username, userData, function(err) {
              if (!err) {
                callback(200);
              } else {
                callback(500, {'Error': 'Could not update user'});
              }
            });
          } else {
            callback(404);
          }
        });
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    // Empty any order which was previously created for sanity
    // Lookup the user
    _data.read('users', username, function(err, userData) {
      if (!err && userData) {
        if (userData.cart) {
          userData.cart = [];
          // Store the new updates
          _data.update('users', username, userData, function(err) {
            if (!err) {
              callback(400, {'Error': 'Missing required fields, or invalid'});
            } else {
              callback(500, {'Error': 'Could not update user'});
            }
          });
        }
      }
    });
  }
};

// Checkout cart
handlers.checkout = function(data, callback) {
  var acceptablemethods = ['post'];
  if (acceptablemethods.indexOf(data.method) > -1) {
    handlers._checkout[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the checkout methods
handlers._checkout = {};

// Checkout - POST
// Required data: username, token
// Optional data: none
handlers._checkout.post = function(data, callback) {
  // Check that the token is valid
  var token = typeof(data.payload.token) == 'string' && data.payload.token.trim().length == 20 ? data.payload.token.trim() : false;
  var username = typeof(data.payload.username) == 'string' && data.payload.username.trim().length > 0 ? data.payload.username.trim() : false;

  if (token && username) {
    // Lookup the token
    _data.read('tokens', token, function(err, tokenData) {
      if (!err && tokenData) {
        // Lookup the user
        _data.read('users', username, function(err, userData) {
          if (!err && userData) {
            var cartobject = typeof(userData.cart) == 'object' && userData.cart instanceof Array && userData.cart.length > 0 ? userData.cart : false;
            if (cartobject) {
              var orderAmount = 0;
              var mailMessage = 'Pablo\'s Pizza\n\nYou\'ve placed your order with the following details:\n\nIngredients and price\n\n';
              // Iterate through cart items for calculating the order's price
              cartobject.forEach(function(item) {
                // Check if the item being checked out is in the menu list, and add it's price
                orderAmount += config.menuItemsData[item];
                // Start adding menu items to the mail message
                mailMessage += item + '\t\t' + config.menuItemsData[item] + '€\n';
              });
              mailMessage += '--------------------------\n\nTOTAL: ' + orderAmount + '€\n\nThanks for your order. You\'ll receive it within the next 30 minutes or we will refund you.';

              // Build the order object
              var orderobject = {
                'username': username,
                'ingredients': cartobject,
                'orderDate': Date.now()
              };

              var orderId = helpers.createRandomString(20);

              // Store the user
              _data.write('orders', orderId, orderobject, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, {'Error': 'Could not store the order'});
                }
              });

              // Proceed with the payment, multiplying the order amount hundred times
              helpers.paymentWithStripe(orderAmount * 100, function(err) {
                if (!err) {
                  // If the payment was successful, send a mail message to the user
                  helpers.sendMailWithOrder(userData, mailMessage, function(err) {
                    if (!err) {
                      // Empty the user's cart

                      // Lookup the user
                      _data.read('users', username, function(err, userData) {
                        if (!err && userData) {
                          // Empty the cart
                          userData.cart = [];

                          // Store the order id inside the user's array object
                          var ordersobject = typeof(userData.orders) == 'object' && userData.orders instanceof Array && userData.orders.length > 0 ? userData.orders : [];
                          ordersobject.push(orderId);

                          // Add the object to the userData
                          userData.orders = ordersobject;

                          // Store the new updates
                          _data.update('users', username, userData, function(err) {
                            if (!err) {
                              callback(200);
                            } else {
                              callback(500, {'Error': 'Could not empty the user\'s cart'});
                            }
                          });
                        } else {
                          callback(404);
                        }
                      });
                    } else {
                      callback(500, err);
                    }
                  });
                } else {
                  callback(500, err);
                }
              });
            } else {
              callback(500, {'Error': 'You\'re trying to checkout an empty cart'});
            }
          } else {
            callback(400, {'Error': 'Could not retrieve the menu items'});
          }
        });
      } else {
        callback(400, {'Error': 'Could not retrieve token, or invalid'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields, or invalid'});
  }
};

// The not found handler
handlers.notFound = function(data,callback){
  callback(404);
};

// Export the module
module.exports = handlers
