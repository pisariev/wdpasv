import BasePage from './base.page';

class ChatPage extends BasePage {
    get headerItem() { return $('//div[@title=\'Channels\']')}
    get headerItem() { return $('//div[@title=\'Direct Messages\']')}

}
export default new ChatPage();