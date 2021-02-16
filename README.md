# Agatha

Agatha is a simple api gateway that fronted [Autan](https://github.com/imamfzn/autan) and [Insan](https://github.com/imamfzn/insan).

# Dependencies

* [Autan](https://github.com/imamfzn/autan), to authenticate client, generate refresh token, and revoke refresh token.
* [Insan](https://github.com/imamfzn/insan), all CRUD operation about user details.

# How-To

1. Download / clone this repository
2. Setup [Autan](https://github.com/imamfzn/autan)
3. Setup [Insan](https://github.com/imamfzn/insan)
4. Install all package dependencies `npm install`
5. Setup all env values (look at `env.sample`)
6. Run `npm start`

# Service Architecture
![](docs/services-architecture.png)

# Flow

## Login
![](docs/login-flow.png)

## Refresh Token
![](docs/refresh-token-flow.png)

## Revoke Token
![](docs/revoke-token-flow.png)

## CRUD
![](docs/crud-flow.png)
