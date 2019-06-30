<template>
  <div class="home">
    <h1> Titles </h1>
    <b-loading :active.sync="getLoadingNewData"></b-loading>
        <ul>
            <li v-for="(user, index) in getNewData" :key="index">
                {{user.title}}
            </li>
        </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'home',
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