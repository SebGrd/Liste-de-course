<template>
    <div id="app">
        <h1>Liste de course</h1>
        <ArticleAdd v-on:add-article="addArticle"></ArticleAdd>
        <Articles :articles="articles"
                  v-on:del-article="deleteArticle"
                    v-on:article-updated="updateList"
        ></Articles>
    </div>
</template>

<script>

    import ArticleAdd from "./components/ArticleAdd";
    import Articles from "./components/Articles";

    export default {
        name: 'App',
        components: {
            Articles,
            ArticleAdd
        },
        data() {
            return {
                msg: 'Hello Word!!',
                articles: []
            }
        },
        methods: {
            deleteArticle(id) {
                this.articles = this.articles.filter(article => article.id !== id)
            },
            addArticle(object) {
                this.articles.push(object)
            },
            updateList() {
                localStorage.articles = JSON.stringify(this.articles)
            }
        },
        mounted() {
            if (localStorage.articles) {
                this.articles = JSON.parse(localStorage.articles)
            }
        },
        watch: {
            articles(articles) {
                localStorage.articles = JSON.stringify(articles)
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #232f3b;
    }
    h1{
        text-align: center;
        text-decoration: underline;
        text-decoration-color: #ac54ef;
    }
</style>
