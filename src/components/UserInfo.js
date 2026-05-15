export default class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector)


    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._jobElement.textContent
        };
   
        

    }

    setUserInfo({name: name, about: about, avatar: avatar}) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = about;
        this._avatar.src = avatar;

        
    }
}