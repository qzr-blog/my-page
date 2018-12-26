<template>
    <div class="container">
        <div v-for="(item) in data" :key="item.data">
            <h1>{{item.title}}</h1>
            <p>{{item.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
.container
    color black
</style>


