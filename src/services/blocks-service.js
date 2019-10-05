import config from '../config'
import TokenService from './token-service';

const BlocksService = {
    getBlocksByIds(ids) {
        console.log(ids, 'Thine ids')
        return fetch(`${config.API_ENDPOINT}/blocks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(ids)
        })
            .then(res =>{
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                })
    },
    updateBlockSequence(sequence, type, id) {
        console.log(`Type, type, reading all about it ${ type }`)
        return fetch(`${config.API_ENDPOINT}/blocks/${type}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ block_sequence: sequence })
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                })
    }

    // getActions() {
    //     return fetch(`${config.API_ENDPOINT}/actions`, {
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

export default BlocksService