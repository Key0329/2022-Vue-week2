Vue.createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const baseUrl = "https://vue3-course-api.hexschool.io";
      const data = this.user;

      axios
        .post(`${baseUrl}/v2/admin/signin`, data)
        .then((res) => {
          console.log(res.data);
          const { token, expired } = res.data;

          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          window.location = "./products.html";

          this.user.username = "";
          this.user.password = "";
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
  },
}).mount("#app");
