export const createSiteListTemplate = (task) => {

    
    
    const {title, poster, rating, year, time, genre, description, commentCounts, actions } = task


    const activeClassName = (active) => active ? 'film-card__controls-item--active' : ''



    return `<article class="film-card">
        <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${time}</span>
            <span class="film-card__genre">${genre}</span>
        </p>
        <img src=${poster} alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <span class="film-card__comments">${commentCounts} comments</span>
        </a>
        <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${activeClassName(actions.watchlist)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${activeClassName(actions.watched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${activeClassName(actions.favorites)}" type="button">Mark as favorite</button>
        </div>
  </article>`
};