const taskToFilterMap = {
    watchlist: {
        name: 'Watchlist',
        count: (tasks) => tasks.filter((task) => task.actions.watchlist === true).length
    },
    watched: {
        name: 'History',
        count: (tasks) => tasks.filter((task) => task.actions.watched === true).length
    },
    favorites: {
        name: 'Favorites',
        count: (tasks) => tasks.filter((task) => task.actions.favorites === true).length
    }
}

export const generateFilter = (tasks) => Object.entries(taskToFilterMap).map(
    ([url, objectTasks]) => ({
        name: objectTasks.name,
        url,
        count: objectTasks.count(tasks)
    })
)