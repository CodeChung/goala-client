import config from '../config'
import TokenService from './token-service';

const RemindersService = {
    getReminders() {
        return fetch(`${config.API_ENDPOINT}/reminders`, {
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
    getRemindersByDate(date) {
        return fetch(`${config.API_ENDPOINT}/reminders/date/${date}`, {
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
    getRemindersByDay(day) {
        return fetch(`${config.API_ENDPOINT}/reminders/day/${day}`, {
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

export default RemindersService