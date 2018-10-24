<template>
    <div>
        <div v-for="item in data" :key="item.data">{{item.tag}}</div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
</style>


