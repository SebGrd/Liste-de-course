<template>
    <div id="app">
        <header>
            <h1>Liste de course</h1>
        </header>
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
        background: #fcfcfc;
        font-family: 'Nunito', sans-serif;
        color: #232f3b;
    }

    header{
        background: #f1f1f1;
        padding: 10px 0;
    }
    h1{
        text-align: center;
        margin: 0;
        color: #ac54ef;
        text-shadow: 0px 1px 3px #ad59edc9;
    }
</style>
