export default class UserService {

  constructor(resource){
    this._resource = resource('posts');
  }

  signToNewsletter(user) {
    return this._resource.save(user);
  }

}
