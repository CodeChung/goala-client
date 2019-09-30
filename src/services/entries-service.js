import config from '../config'
import TokenService from './token-service';
import moment from 'moment';

const EntriesService = {
    getEntryByDate(date) {
        return fetch(`${config.API_ENDPOINT}/entries/date/${date}`, {
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
    getEntriesById() {
        return fetch(`${config.API_ENDPOINT}/entries/`, {
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
    getEntriesByMonth(month) {
        const monthString = moment(month + 1, 'MM').format('YYYY-MM-DD')
        return fetch(`${config.API_ENDPOINT}/entries/month/${monthString}`, {
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

    // postGoal(goal) {
    //     return fetch(`${config.API_ENDPOINT}/goals`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `bearer ${TokenService.getAuthToken()}`
    //         },
    //         body: JSON.stringify(goal)
    //     })
    //         .then(res =>
    //             (!res.ok)
    //                 ? res.json().then(e => Promise.reject(e))
    //                 : res.json()
    //         )
    // },
    // getGoalById(id) {
    //     return fetch(`${config.API_ENDPOINT}/goals/${id}`, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `bearer ${TokenService.getAuthToken()}`
    //         },
    //     })
    //         .then(res =>
    //             (!res.ok)
    //                 ? res.json().then(e => Promise.reject(e))
    //                 : res.json()
    //         )
    // },
    // deleteGoal(goalId) {
    //     return fetch(`${config.API_ENDPOINT}/goals/${goalId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res =>
    //         (!res.ok)
    //             ? res.json().then(e => Promise.reject(e))
    //             : res.json()
    //     )
    // }
}

export default EntriesService