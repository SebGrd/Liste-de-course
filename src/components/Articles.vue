<template>
    <div>
        <div class="sort">
            <button @click="sort">Filtrer 🧾</button>
        </div>
        <p v-if="articles.length < 1">Aucun article n'est présent dans le panier.</p>

        <div v-if="!sorted" class="unsorted">
            <ul>
                <ArticleItem
                        v-for="article in articles"
                        v-bind:key="article.id"
                        :article="article"
                        v-on:del-article="$emit('del-article', article.id)"
                        v-on:article-updated="$emit('article-updated', article)"
                />
            </ul>
        </div>


        <div v-if="sorted" class="sorted">
            <ul>
                <ArticleItem
                        v-for="article in uncompletedItems()"
                        v-bind:key="article.id"
                        :article="article"
                        v-on:del-article="$emit('del-article', article.id)"
                        v-on:article-updated="$emit('article-updated', article)"
                />
            </ul>
            <ul>
                <ArticleItem
                        v-for="article in completedItems()"
                        v-bind:key="article.id"
                        :article="article"
                        v-on:del-article="$emit('del-article', article.id)"
                        v-on:article-updated="$emit('article-updated', article)"
                />
            </ul>
        </div>

    </div>
</template>

<script>
    import ArticleItem from "./ArticleItem";

    export default {
        name: "Articles",
        components: {
            ArticleItem
        },
        props: ["articles"],
        data() {
          return {
              sorted: false,
              completedArticles: [],
              uncompletedArticles: []
          }
        },
        methods: {
            completedItems() {
                return this.articles.filter(article => article.completed)
            },
            uncompletedItems() {
                return this.articles.filter(article => !article.completed)
            },
            sort() {
                this.sorted = !this.sorted
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        text-align: right;
        border: none;
        padding: 0;
        background: transparent;
        color: #ac54ef;
    }
    .sort{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 15px;
    }
    p{
        padding: 0 15px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>