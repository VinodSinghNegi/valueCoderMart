class auth {
  constructor() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;
    cb();
  }
  logout() {
    this.authenticated = false;
    cb();
  }
  isAuth() {
    return this.authenticated;
  }
}

export default auth();
