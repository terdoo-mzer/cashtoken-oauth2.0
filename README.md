### Preamble
OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It enables Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.


### Your task is as follows
Implement the complete authorization_code flow using any of  vanilla javascript, php, typescript(no external openId Client should be used) against our in-house test identity server - id-sandbox.cashtoken.africa

You can find the openid-configuration here:
https://id-sandbox.cashtoken.africa/.well-known/openid-configuration

client_id: wprQYMZBqqx-dgszFUfQG
scope: openid email profile

In development mode, these redirect_uris have been preconfigured
http://localhost:3000/oauth-callback, http://localhost:3000/callback

You may align your work to fit this

### Test Login Details
Email: mailto:test@test.com
Password: password123

### Deliverable
A simple project(tracked in git) containing a simple landing page and a protected profile page. 

NB: To complete this task above one must be familiar with the oauth2.0 authorization protocol and how the OpenId Connect protocol works with the oauth2 protocol to provide authentication.
