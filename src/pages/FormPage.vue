<template>
    <div class="main">
        <div class="container">
            <div class="main__wrapper">

                <div class="main__form article">

                    <div class="main__title title">Персональные данные</div>

                    <div class="main__items article-sm">

                        <div class="main__field article-mc">
                            <label class="main__label">Имя</label>
                            <input class="main__input" type="text" v-model="userData.name" required />
                            <!-- <div v-if="!userData.name" class="error-message">Пожалуйста, введите имя</div> -->
                        </div>

                        <div class="main__field article-mc">
                            <label class="main__label">Возраст</label>
                            <input class="main__input" type="number" v-model="userData.age" required />
                            <!-- <div v-if="!userData.age" class="error-message">Пожалуйста, введите возраст</div> -->
                        </div>

                    </div>

                </div>

                <div class="main__form article">

                    <div class="main__headline">

                        <div class="main__title title">Дети (макс. 5)</div>

                        <button class="main__btn-add btn" @click="addChild" v-if="userData.children.length < 5">
                            <img class="gallery__icon" :src="require('@/assets/img/plus.svg')" />
                            <span class="main__btn-text">Добавить ребенка</span>
                        </button>

                    </div>

                    <div v-for="(child, index) in userData.children" :key="index" class="main__child">

                        <div class="main__field article-mc">
                            <label class="main__label">Имя</label>
                            <input class="main__input" type="text" v-model="child.name" required />
                            <!-- <div v-if="!child.name" class="error-message">Пожалуйста, введите имя ребенка</div> -->
                        </div>

                        <div class="main__field article-mc">
                            <label class="main__label">Возраст</label>
                            <input class="main__input" type="number" v-model="child.age" required />
                            <!-- <div v-if="!child.age" class="error-message">Пожалуйста, введите возраст ребенка</div> -->
                        </div>

                        <button class="main__btn-delete" @click="removeChild(index)">Удалить</button>

                    </div>

                    <button class="main__btn-save btn" @click="saveData">Сохранить</button>

                </div>

            </div>
        </div>
    </div>
</template>
  

<style lang="scss">
    .main {
        margin-top: 5rem;

        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &__form {
            width: 50%;
            margin-bottom: 3.5rem;
        }

        &__items {
            width: 100%;
        }

        &__field {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border);
            padding: 1rem 2rem;
            color: var(--grey);
            width: 100%;
        }

        &__input {
            font-size: var(--fz);
            color: var(--black);
        }

        &__headline {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__btn-add {
            background: var(--theme);
            color: var(--blue);
            gap: 0.6rem;
        }

        &__btn-delete {
            height: 100%;
            color: var(--blue);
            font-size: 1.6rem;
            background: none;
        }

        &__btn-save {
            color: var(--theme);
            background: var(--blue);
        }

        &__child {
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
        }

        @media(max-width: 426px) {
            &__form {
                width: 100%;
            }
        }

        @media(max-width: 376px) {
            &__child {
                flex-direction: column;
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                userData: {
                    name: '',
                    age: null,
                    children: [],
                },
            };
        },
        methods: {
            addUser() {
                const user = {
                    id: Date.now(),
                    name: '',
                    age: null,
                    children: [],
                };
                this.$store.commit('addUser', user);
            },
            addChild() {
                const newChild = {
                    name: '',
                    age: null,
                };
                this.userData.children.push(newChild);
            },
            removeChild(index) {
                this.userData.children.splice(index, 1);
            },
            saveData() {
                if (!this.userData.name || !this.userData.age) {
                    alert('Пожалуйста, заполните обязательные поля: Имя и Возраст.');
                    return;
                }

                for (const child of this.userData.children) {
                    if (!child.name || !child.age) {
                        alert('Пожалуйста, заполните обязательные поля: Имя и Возраст.');
                        return;
                    }
                }

                this.$store.commit('addUser', this.userData);
                this.$router.push('/preview');
            }
        },
    };
</script>
