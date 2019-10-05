import config from '../config';
import TokenService from './token-service';
import moment from 'moment';

const LogsService = {
    getLogByIdDate(logId, date) {
        return fetch(`${config.API_ENDPOINT}/logs/log/${logId}/${date}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    createLog(logId, date) {
        return fetch(`${config.API_ENDPOINT}/logs/log/${logId}/${date}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateLogValue(blockId, date, logId, value) {
        let dateFormatted = moment(date).format('MM-DD-YYYY')
        return fetch(`${config.API_ENDPOINT}/logs/log/${logId}/${dateFormatted}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ values: { [blockId]: value } })

        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },


    getWeeklyRatings(goalId) {
        return fetch(`${config.API_ENDPOINT}/logs/weekly/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getDailyRatings(goalId) {
        return fetch(`${config.API_ENDPOINT}/logs/daily/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getGoalStats(goalId) {
        return fetch(`${config.API_ENDPOINT}/logs/stats/${goalId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default LogsService