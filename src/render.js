export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend'
}

export const renserTemplate = (container, template, place) => {
    container.insertAdjacentHTML(place, template)
}