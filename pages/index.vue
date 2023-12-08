<template>
    <div class="guide-content">
        <div class="guide-tabs">
            <nuxtLink class="tab-item" v-for="(guideMenuItem, index) in guideMenu" :key="index" :to="guideMenuItem.link">
                {{ guideMenuItem.menu }}
            </nuxtLink>
        </div>

    </div>
</template>

<script setup lang="ts">
    const guideMenu: string[][] = [
        { menu: "가이드", link: "/guide" },
        { menu: "메인", link: "/" },
        { menu: "상품", link: "/" },
        { menu: "상품리스트", link: "/" },
        { menu: "이벤트", link: "/" },
        { menu: "주문/결제", link: "/" },
        { menu: "마이페이지", link: "/" },
        { menu: "회원", link: "/" },
        { menu: "고객센터", link: "/" }
    ]

</script>

<style lang="scss">
    @use "~/assets/scss/guide.scss";
</style>