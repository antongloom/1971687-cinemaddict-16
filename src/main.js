import {createSiteMenuTemplate} from './view/site-menu-view'
import {RenderPosition, renserTemplate} from './render.js'

const siteMainElement = document.querySelector('.main')

renserTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREBEGIN)