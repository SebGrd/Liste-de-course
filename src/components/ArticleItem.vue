<template>
    <li :class="{'is-complete':article.completed}">
        <span class="title">{{ article.title }} <span v-if="article.completed" class="green">✔</span></span>
        <div class="controls">
            <input type="checkbox" v-on:change="markComplete" :checked="article.completed">
            <button v-on:click="$emit('del-article', article.id)">❌</button>
        </div>
    </li>

</template>

<script>
    export default {
        name: "ArticleItem",
        props: ["article"],
        methods: {
            markComplete() {
                this.article.completed = !this.article.completed
            }
        },
        watch: {
            'article.completed' : {
                handler: function (article) {
                    this.$emit('article-updated', article)
                },
                deep: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        border-bottom: 1px solid #989797;
        background: #fcfcfc;

        &.is-complete {
            .title {
                text-decoration: line-through;
                opacity: 0.5;
            }
        }

        .title {
            position: relative;
            padding-left: 25px;
            font-size: 20px;
            font-weight: 600;
            .green{
                color: green;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }


        .controls{
            display: flex;
            align-items: center;
            input{
                width: 30px;
                height: 30px;
                margin: 0;
                border-radius: 3px;
                border: 1px solid gray;
                background: white;
                color: white;
                cursor: pointer;
            }
            button{
                margin-left: 20px;
                padding: 2px;
                border-radius: 3px;
                border: none;
                background: transparent;
                cursor: pointer;
            }
        }
    }


</style>