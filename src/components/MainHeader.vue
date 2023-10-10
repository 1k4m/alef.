<template>
    <div class="header">
        <div class="container">
            <div class="header__wrapper">

                <router-link to="/" class="header__logo">
                    <img class="header__img" :src="require('@/assets/img/logo.png')" />
                </router-link>

                <div class="header__nav">
                    <router-link to="/" class="header__link">
                        <div>Форма</div>
                    </router-link>

                    <router-link to="/preview" class="header__link">
                        <div>Превью</div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .header {
        background: var(--theme);
        padding: 2rem 0;
        border-bottom: 1px solid var(--border);

        &__wrapper {
            display: flex;
            
            align-items: center;
            color: var(--white);
        }

        &__nav {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        &__img {
            width: 15rem;
            object-fit: contain;
        }

        &__link {
            color: var(--grey);
        }
    }
</style>