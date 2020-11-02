export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lvup nuxt js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'og:description',
        content: '레벨업지지를 이용하는 오거나이즈들을 위한 소개 페이지입니다.',
      },
      {
        hid: 'title',
        name: 'og:title',
        content: '레벨업지지 오거나이저 페이지입니다',
      },
      {
        name: 'og:keywords',
        content:
          '레벨업지지, 이스포츠, 아레나, 아레나, 팀, 리그, 코치, 게임, 게이밍, 게이머, 티어, 렙식, 레인보우식스 시즈, 롤, 리그 오브 레전드, 오버워치, 포아너, 디스코드, 상금, 보상, 대진표, 싱글 엘리미네이션, 더블 엘리미네이션, 라운드 로빈, 한국',
      },
      {
        name: 'og:image',
        content: 'assets/images/testimg.png',
      },
      {
        name: 'og:author',
        content: '레벨업지지',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
