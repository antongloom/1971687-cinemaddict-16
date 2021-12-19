export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend'
}

export const rensedTemplate = (container, template, place) => {
    container.insertAdjacentHTML(place, template)
}