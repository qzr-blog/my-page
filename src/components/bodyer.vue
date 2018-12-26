<template>
    <div class="bodyer">
        <div class="left">
            <writing :data="writingList"></writing>
        </div>
        <div class="right">
            <tag :data="tagList"></tag>
        </div>
    </div>
</template>


<script>
import writing from "components/bodyer/writing";
import tag from 'components/bodyer/tag';

export default {
    components: {
        writing,
        tag
    },
    data () {
        return {
            writingList: [{ title: "test", content: '123123123123' }, { title: "test1", content: '123123123123' }],
            tagList: [{ tag: '记录' }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.bodyer
    width 60vw
    margin 0 auto
    display flex
</style>

