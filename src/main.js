import {createSiteMenuTemplate} from './view/site-menu-view'
import {createSiteListTemplate} from './view/site-list-view'
import {createSiteProfileTemplate} from './view/site-profile-view'
import {createSiteBtnShowTemplate} from './view/site-btn-show-view'
import {createSitePopupTemplate} from './view/site-popup-view'
import {RenderPosition, renserTemplate} from './render.js'
import {generateTask, generatePopup} from './mock/task.js'

const TASK_COUNT = 5;

const tasks = Array.from({length: TASK_COUNT}, generateTask)
const popup = generatePopup()

const siteProfileElement = document.querySelector('.header')

renserTemplate(siteProfileElement, createSiteProfileTemplate(), RenderPosition.BEFOREEND)


const siteMainElement = document.querySelector('.main')
const siteListTemplate = siteMainElement.querySelector('.films-list__container')
const siteBtnShowTemplate = siteMainElement.querySelector('.films-list')

renserTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREBEGIN)

for (let i = 0; i < TASK_COUNT; i++) {
    renserTemplate(siteListTemplate, createSiteListTemplate(tasks[i]), RenderPosition.AFTERBEGIN)
}

renserTemplate(siteBtnShowTemplate, createSiteBtnShowTemplate(), RenderPosition.BEFOREEND)


const sitePopupTemplate = document.querySelector('.footer')

renserTemplate(sitePopupTemplate, createSitePopupTemplate(popup), RenderPosition.BEFOREEND)