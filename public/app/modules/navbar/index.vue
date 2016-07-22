<style lang="less">
    @import "style.less";
</style>
<template>
    <div class="navbar">
        <div class="navbar-inner">
            <div class="left">
                <slot name="left">
                    <a><i class="iconfont icon-back"></i><span>返回</span></a>
                </slot>
            </div>
            <div class="center">
                <slot>主页</slot>
            </div>
            <div class="right">
                <slot name="right">
                    <a><i class="iconfont icon-menu"></i></a>
                </slot>
            </div>
        </div>
    </div>
</template>