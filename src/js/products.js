Vue.createApp({
  data() {
    return {
      products: [],
      productDetail: {},
      apiPath: "key0329",
      baseUrl: "https://vue3-course-api.hexschool.io",
    };
  },
  methods: {
    checkAdmin() {
      axios
        .post(`${this.baseUrl}/v2/api/user/check`)
        .then(() => {
          // console.log(res.data);
          this.getProductsData();
        })
        .catch((err) => {
          // console.log(err);
          alert(err.response.data.message);
          windows.location = "./login.html";
        });
    },
    getProductsData() {
      axios
        .get(`${this.baseUrl}/v2/api/${this.apiPath}/admin/products`)
        .then((res) => {
          // console.log(res.data);
          this.products = res.data.products;
        })
        .catch((err) => {
          // console.log(err);
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
}).mount("#app");
