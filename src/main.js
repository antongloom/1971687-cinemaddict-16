import {createSiteMenuTemplate} from './view/site-menu-view'
import {createSiteListTemplate} from './view/site-list-view'
import {createSiteProfileTemplate} from './view/site-profile-view'
import {createSiteBtnShowTemplate} from './view/site-btn-show-view'
import {createSitePopupTemplate} from './view/site-popup-view'
import {RenderPosition, rensedTemplate} from './render.js'
import {generateTask, generatePopup, arrayComentsTask} from './mock/task.js'
import {generateFilter} from './mock/filter.js'

const TASK_COUNT = 20
const TASK_COUNT_PER_STEP = 5

const tasks = Array.from({length: TASK_COUNT}, generateTask)
const popup = generatePopup()
const array = arrayComentsTask()

const siteProfileElement = document.querySelector('.header')  

rensedTemplate(siteProfileElement, createSiteProfileTemplate(), RenderPosition.BEFOREEND)


const siteMainElement = document.querySelector('.main')
const siteListTemplate = siteMainElement.querySelector('.films-list__container')
const siteBtnShowTemplate = siteMainElement.querySelector('.films-list')

rensedTemplate(siteMainElement, createSiteMenuTemplate(generateFilter, tasks), RenderPosition.BEFOREBEGIN)

for (let i = 0; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
    rensedTemplate(siteListTemplate, createSiteListTemplate(tasks[i]), RenderPosition.AFTERBEGIN)
}

if (tasks.length > TASK_COUNT_PER_STEP) {

    let renderedTaskCount = TASK_COUNT_PER_STEP

    rensedTemplate(siteBtnShowTemplate, createSiteBtnShowTemplate(), RenderPosition.BEFOREEND)
    const loadMoreButton = siteBtnShowTemplate.querySelector('.films-list__show-more')

    loadMoreButton.addEventListener('click', (evt) => {
        evt.preventDefault()
        tasks
            .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
            .forEach((task) => rensedTemplate(siteListTemplate, createSiteListTemplate(task), RenderPosition.AFTERBEGIN))

        renderedTaskCount += TASK_COUNT_PER_STEP

        if (renderedTaskCount >= tasks.length) {
            loadMoreButton.remove()
        }

    })
}


const sitePopupTemplate = document.querySelector('.footer')

rensedTemplate(sitePopupTemplate, createSitePopupTemplate(popup, array), RenderPosition.BEFOREEND)