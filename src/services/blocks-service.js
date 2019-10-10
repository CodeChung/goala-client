import config from '../config'
import TokenService from './token-service';

const BlocksService = {
    createNewBlocks(newBlocks, goal_id, reminder_id) {
        const newBlock = { newBlocks, goal_id, reminder_id }
        return fetch(`${config.API_ENDPOINT}/blocks/new`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newBlock)
        })
            .then(res => {
                let result = res.clone()
                return (!res.ok)
                    ? result.json().then(e => Promise.reject(e))
                    : result.json()
                })

    },

    async getBlocksByIds(ids) {
        return await fetch(`${config.API_ENDPOINT}/blocks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(ids)
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                })
    },
    updateBlock(id, value) {
        return fetch(`${config.API_ENDPOINT}/blocks/block/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ value })
        })
            .then(res => {
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
    },
    updateTitle(blockId, title, type) {
        return fetch(`${config.API_ENDPOINT}/blocks/title`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'type': type,
            },
            body: JSON.stringify({ typeId: blockId, title })
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