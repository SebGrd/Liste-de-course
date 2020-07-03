<template>
    <div class="add-article">
        <input type="text" placeholder="Nom de l'article" v-on:keyup.enter="createArticleObject" v-model="title">
        <button v-on:click="createArticleObject">Ajouter</button>
    </div>
</template>

<script>
    import * as uuid from 'uuid'

    export default {
        name: "ArticleAdd",
        data() {
            return{
                title: ''
            }
        },
        methods: {
            createArticleObject(){
                if (this.title !== ''){
                    this.$emit('add-article', {
                        id: uuid.v4(),
                        title: this.title,
                        completed: false
                    })
                    this.title = ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .add-article{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 8px 15px;
        background: #f1f1f1;
        margin-bottom: 6px;
        box-shadow: 0px 4px 4px 0px #d2d2d2a1;
        input{
            width: 100%;
            border: 2px solid transparent;
            border-radius: 15px;
            background: white;
            padding: 6px;
            margin-right: 10px;
        }
        button{
            border: 2px solid #ac54ef;
            border-radius: 15px;
            background: white;
            padding: 6px;
            font-weight: 600;
            color: #ac54ef;
            cursor: pointer;
        }
    }

</style>