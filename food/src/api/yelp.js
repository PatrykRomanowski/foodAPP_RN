import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ye0h4Y3Q4GDw411W-ggX7CHDA3sOdbxMlC14We0jWZ25jcZLZuq4NxTS_wtLOhniGYtK3hZQKB1yJevwccx-ydXZB5x0j3c0o89bFXwXMEBMqs1Dv5FUEMFop1baY3Yx",
  },
});
