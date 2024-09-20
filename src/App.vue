<script>
  import News from './components/News.vue';

  export default{
    components:{
        News,
    }
  }

</script>

<template>
  <div class="pb-4 bg-beige">
    <div class="bg-sky border-b-2 border-sky mb-6 drop-shadow-lg ">
      <h1 class="text-3xl font-bold text-navy text-center p-5 xs:text-4xl sm:text-4xl lg:text-6xl tracking-wide">Noticias</h1>
    </div>
    <News/>
</div>
</template>