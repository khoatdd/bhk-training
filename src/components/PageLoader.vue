<template>
    <div id="loader" class="pageload-overlay" data-opening="M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
            <path :d="getPath" @change=""/>
        </svg>
    </div>
    <!-- /pageload-overlay -->
</template>
<script>
export default {
    name: 'pageloader',
    methods: {
        resetPath() {
            this.$store.commit('resetPath')
            console.log(this.$store.state.path)
        }
    },
    computed: {
        getPath() {
            return this.$store.getters.getPath
        }
    },
    // watch: {
    //     path: function(path) {
    //         console.log(path)
    //     }
    // },
    created() {
        console.log('created')
    },
    beforeUpdate: function () {
        console.log('beforeUpdate')
        this.$store.commit('resetPath')
    },
    updated() {
        console.log('updated')
        this.$store.commit('resetPath')
    },
    beforeDestroy(){
        console.log('Before destroy home component')
        this.resetPath()
    },
    destroyed() {
        console.log('destroyed')
    }


}
</script>
<style>
.pageload-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
}

.pageload-overlay.show {
    visibility: visible;
}

.pageload-overlay svg {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}

.pageload-overlay svg path {
    fill: #fff;
}
</style>
