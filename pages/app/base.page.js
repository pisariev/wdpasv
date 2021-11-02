import Page from '../page';

export default class BasePage extends Page {
    get coursesLink() { return $('div[data-qa="topmenu-Courses"]') }
    get cardsLink() { return $('div[data-qa="topmenu-Cards"]') }
    get diaryLink() { return $('div[data-qa="topmenu-Diary"]') }
    get challengesLink() { return $('div[data-qa="topmenu-Challenges"]') }
    get groupsLink() { return $('div[data-qa="topmenu-Groups"]') }
    get chatLink() { return $('div[data-qa="topmenu-Chat"]') }
    get GoalsLink() { return $('div[data-qa="topmenu-Goals"]') }

}