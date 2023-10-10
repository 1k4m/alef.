<template>
    <div id="App">
        <MainHeader></MainHeader>
        <router-view></router-view>
        <MainFooter></MainFooter>
    </div>
</template>

<script>

import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'

export default {
    name: 'App',
    components: {
        MainHeader,
        MainFooter
    },
}

</script>

