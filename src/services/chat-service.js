import config from '../config'
import TokenService from './token-service';

const ChatService = {
    postMessage(goalId, msg='new goal') {
        return fetch(`${config.API_ENDPOINT}/chat/${goalId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                msg
            })
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    // gets entire conversation for the day
    getChat(goalId) {
        return fetch(`${config.API_ENDPOINT}/chat/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default ChatService