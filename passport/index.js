module.exports = (Users) =>{
  var passport = require('passport');
  var GitHubTokenStrategy = require('passport-github-token');
  var FacebookTokenStrategy = require('passport-facebook-token');
  var TwitterTokenStrategy = require('passport-twitter-token');
  var TwitterStrategy = require('passport-twitter');
  
  //passport serialize
  passport.serializeUser((user, done)=>{
    done(null, user);
  });
 
  passport.deserializeUser((obj, done)=>{
    done(null, obj);
  });

  //passport setting
  passport.use(new GitHubTokenStrategy({
    clientID: '6a6ed9d97c15319414a5',
    clientSecret: '48a2a6badc826ea8c1536cd95868e89e3ab67ceb',
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, next) =>{
      return next(null, profile);
  }))

  .use(new FacebookTokenStrategy({
    clientID: "420689554941701",
    clientSecret: "80a11ca8ffa2eb20ce58f9412751d6b8",
    profileFields: ['id', 'displayName', 'photos'],
  }, (accessToken, refreshToken, profile, done)=>{
    done(null, profile);
  }))

  .use(new TwitterTokenStrategy({
    consumerKey: "yLLVmWwfmfTZdBn0gFUzKGriK",
    consumerSecret: "AZ5KK7DOJwErRLelub2YOu09V0ETLHcxXHIKuBT3XCmRku9RhE",
  },(accessToken, refreshToken, profile, done)=>{
    console.log(accessToken);
    done(null, profile);
  }))

  return passport;
}
