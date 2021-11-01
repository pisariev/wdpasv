import BasePage from './base.page';

class ChallengesPage extends BasePage {
    get headerItem() { return $('//div[@class=\'h1 me-4\']') }
}

export default new ChallengesPage();