Vue.createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      baseUrl: "https://vue3-course-api.hexschool.io",
    };
  },
  methods: {
    login() {
      const data = this.user;
      axios
        .post(`${this.baseUrl}/v2/admin/signin`, data)
        .then((res) => {
          // console.log(res.data);
          const { token, expired } = res.data;

          document.cookie = `myToken=${token};expires=${new Date(expired)};`;
          window.location = "./products.html";

          // this.user.username = "";
          // this.user.password = "";
        })
        .catch((err) => {
          // console.log(err);
          alert(err.response.data.message);
        });
    },
  },
}).mount("#app");
