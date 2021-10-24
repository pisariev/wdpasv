import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page'

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('ipisaryev@gmail.com', '31101967');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


