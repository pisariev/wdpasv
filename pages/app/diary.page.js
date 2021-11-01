import BasePage from './base.page';

class DiaryPage extends BasePage {
    get headerItem() { return $('//h1[.=\'Daily reports\']') }
}

export default new DiaryPage();