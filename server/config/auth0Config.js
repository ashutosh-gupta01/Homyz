import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE || "http://localhost:8000",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || "https://dev-1g8w4qve3eqwwrti.us.auth0.com/",
    tokenSigningAlg: "RS256"
}) 

export default jwtCheck