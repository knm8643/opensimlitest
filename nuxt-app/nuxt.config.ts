// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    generate: {
        dir: 'dist'
    },
    target: 'static',
    router: {
        base: '/opensimlitest/'
    },
    buildDir: 'build'
})
