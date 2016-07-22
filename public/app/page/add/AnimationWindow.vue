<template>
    <div class="window-outer animation" v-if="show">

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            show:{
                type:Boolean,
                twoWay:true,
                default:false
            }
        }
    }
</script>