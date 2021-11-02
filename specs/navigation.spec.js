import ProfilePage from '../pages/app/profile.page';
import CoursesPage from '../pages/app/courses.page';
import CardsPage from '../pages/app/cards.page';
import DiaryPage from '../pages/app/diary.page';
import ChallengesPage from '../pages/app/challenges.page';
import ChatPage from '../pages/app/chat.page';
import GoalsPage from '../pages/app/goals.page';
import GroupsPage from '../pages/app/groups.page'

describe('Navigation', function() {
    before(async function() {
        await browser.logIn();
        await ProfilePage.open();
    });

    it('Courses module opens', async function() {
        await ProfilePage.coursesLink.click();
        await expect(browser).toHaveUrlContaining('/course');
        await expect(CoursesPage.headerItem).toBeDisplayed();
    });

    it('Cards module opens', async function() {
        await ProfilePage.cardsLink.click();
        await expect(browser).toHaveUrlContaining('/flash');
        await expect(CardsPage.headerItem).toBeDisplayed();
    });

    it('Diary module opens', async function() {
        await ProfilePage.diaryLink.click();
        await expect(browser).toHaveUrlContaining('/diary');
        await expect(DiaryPage.headerItem).toBeDisplayed();
    });

    it('Challenges module opens', async function() {
        await ProfilePage.challengesLink.click();
        expect(browser).toHaveUrlContaining('/challenge');
        await expect(ChallengesPage.headerItem).toBeDisplayed();
    });

    it('Chat module opens', async function() {
        await ProfilePage.chatLink.click();
        expect(browser).toHaveUrlContaining('/chat');
        await expect(ChatPage.headerItem).toBeDisplayed();
    });

    it('Goals module opens', async function() {
        await ProfilePage.GoalsLink.click();
        expect(browser).toHaveUrlContaining('/goal');
        await expect(GoalsPage.headerItem).toBeDisplayed();
    });

    it('Groups module opens', async function() {
        await ProfilePage.groupsLink.click();
        expect(browser).toHaveUrlContaining('/group');
        await expect(GroupsPage.headerItem).toBeDisplayed();
    });
});