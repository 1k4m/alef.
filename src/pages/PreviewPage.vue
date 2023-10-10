<template>
    <div class="preview">
        <div class="container">
            <div class="preview__wrapper">
                <div class="preview__info">

                    <div class="preview__title title">Персональные данные</div>

                    <div class="preview__data" v-for="(user, userIndex) in users" :key="userIndex">

                        <div class="preview__person article-lg">

                            <div>{{ user.name }},&nbsp;</div>
                            <div>{{ user.age }} лет</div>
                        
                        </div>

                        <div class="article" v-if="user.children.length > 0">

                            <div class="title">Дети</div>

                            <div v-for="(child, childIndex) in user.children" :key="childIndex">
                                
                                <div class="preview__children">

                                    <div>{{ child.name }},&nbsp;</div>
                                    <div>{{ child.age }} лет</div>

                                </div>
                                
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .preview {
        margin-top: 5rem;

        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &__info {
            width: 50%;
            margin-bottom: 3.5rem;
            font-size: 1.6rem;
        }

        &__person {
            display: flex;
            font-weight: 600;
        }

        &__children {
            display: flex;
            background: var(--grey-light);
            width: fit-content;
            padding: 1.5rem 2rem;
            border-radius: 5px;
            font-weight: 600;
        }

        &__data {
            margin: 2rem 0 5rem 0;
        }

        @media(max-width: 426px) {
            &__info {
                width: 100%;
            }
        }
    }
</style>

<script>
    export default {
        computed: {
            users() {
                return this.$store.state.users;
            },
        },
    };
</script>
