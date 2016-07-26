<template>
    <div class="window-outer animation" v-if="show">
        <svg width="100%" height="100%">
            <line x1="0" y1="100%" x2="100%" y2="100%"
                  style="stroke:rgb(0,0,0);stroke-width:1"/>
        </svg>
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