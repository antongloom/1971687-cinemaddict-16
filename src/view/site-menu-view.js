const createFilterItemTemplate = (filter) => {
  const {name, count, url} = filter
  return `
    <a href="#${url}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>`
}

export const createSiteMenuTemplate = (generateFilter, tasks) => {
  const filterItemsTemplate = generateFilter(tasks).map((filter) => createFilterItemTemplate(filter)).join('')
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>

  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
};