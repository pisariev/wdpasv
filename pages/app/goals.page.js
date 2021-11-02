import BasePage from './base.page';

class GoalsPage extends BasePage{
    get headerItem() { return $('//h1[normalize-space()=\'Goals\']') }
}

export default new GoalsPage();