<template>
    <div>
        <p v-if="articles.length < 1">Aucun article n'est présent dans le panier.</p>
        <ul>
            <ArticleItem
                    v-for="article in articles"
                    v-bind:key="article.id"
                    :article="article"
                    v-on:del-article="$emit('del-article', article.id)"
                    v-on:article-updated="$emit('article-updated', article)"
            ></ArticleItem>
        </ul>
    </div>
</template>

<script>
    import ArticleItem from "./ArticleItem";

    export default {
        name: "Articles",
        components: {
            ArticleItem
        },
        props: ["articles"]
    }
</script>

<style lang="scss" scoped>
    p{
        padding: 0 15px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>