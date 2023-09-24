import decode from "jwt-decode";

class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  isTokenExpired() {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      window.alert("Your session has expired. Please log in again.");
      window.location.assign("/signin");
      return true;
    }
    return false;
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem("id_token", idToken);
    // localStorage.setItem("trainer_id", data.login.user._id);
    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will relocate to the home page
    window.location.assign("/");
  }
}

export default new AuthService();
