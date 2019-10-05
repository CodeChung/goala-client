const config = {
    API_ENDPOINT: 'http://localhost:8000/api' || process.env.API_ENDPOINT,
    TOKEN_KEY: process.env.REACT_APP_API_KEY || 'coach-client-auth-token',
}

export default config