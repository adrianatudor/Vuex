<template>
  <div class="about">
    <h1> Images </h1>
    <b-loading :active.sync="getLoadingNewData"></b-loading>
        <ul>
            <li>
                <img v-for="(user, index) in getNewData" :src="user.url" :key="index">
            </li>
        </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex' 
export default {
    name: 'about',
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('newModule', ['getNewData', 'getLoadingNewData'])
    },
    methods: {
        ...mapActions('newModule', ['requestNewData'])
    },
    mounted() {
        console.log("It ain't much, but it's honest work!");
        this.requestNewData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>
