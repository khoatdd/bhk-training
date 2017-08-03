<template>
  <div id="app">
    <transition name="slide" appear mode="in-out">
      <router-view></router-view>
    </transition>
    <app-navigation></app-navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import PageLoader from './components/PageLoader.vue'
export default {
  name: 'app',
  components: {
    appNavigation: Navigation,
  }
}
</script>

<style>
body {
  background: rgba(255, 218, 163, 1);
  background: -moz-radial-gradient(center, ellipse cover, rgba(255, 218, 163, 1) 0%, rgba(242, 183, 94, 1) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(255, 218, 163, 1)), color-stop(100%, rgba(242, 183, 94, 1)));
  background: -webkit-radial-gradient(center, ellipse cover, rgba(255, 218, 163, 1) 0%, rgba(242, 183, 94, 1) 100%);
  background: -o-radial-gradient(center, ellipse cover, rgba(255, 218, 163, 1) 0%, rgba(242, 183, 94, 1) 100%);
  background: -ms-radial-gradient(center, ellipse cover, rgba(255, 218, 163, 1) 0%, rgba(242, 183, 94, 1) 100%);
  background: radial-gradient(ellipse at center, rgba(255, 218, 163, 1) 0%, rgba(242, 183, 94, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffdaa3', endColorstr='#f2b75e', GradientType=1);
}
#app {
  width: 100vw;
  hight: 100vh;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /*opacity: 1;*/
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  /* opacity: 0; */
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 5s ease-out;
  /* transition: opacity 1s; */
}

.slide-leave {}

.slide-leave-active {
  animation: slide-out 5s ease-out;
  transition: opacity 5s;
  opacity: 0;
  position: absolute;
}


@keyframes slide-in {
  from {
    transform: translate3d(0, 150px, 200px);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-out {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, -150px, -500px) scale(1);
  }
}
</style>
