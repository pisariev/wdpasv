import BasePage from './base.page';

class GroupsPage extends BasePage{
    get headerItem() { return $('//h1[contains(text(),\'Groups\')]') }
}

export default new GroupsPage();