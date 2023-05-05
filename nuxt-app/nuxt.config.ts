// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    generate: {
        dir: 'dist'
    },
    router: {
        base: '/opensimlitest/'
    },
    buildDir: 'build'
})
