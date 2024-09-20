<script>
import moment from 'moment';
import { ref } from 'vue';

export default {
    methods:{
      dateFormat(date){
        if(date)
          return moment(date).format('DD/MM/YYYY');
      },
      manageRead(){
        const button = this.$refs.readButton;
        const card = this.$refs.newsCard;
        if(button.innerText == "Marcar como leída")
          this.read(button,card);
        else
          this.notRead(button,card);
      },
      read(button, card){
        button.innerText = "Marcar como no leída" 
        card.className = "bg-beige border-2 border-solid border-beige shadow-lg m-2 rounded-lg bg-gray-100 grayscale-[40%]"
      },
      notRead(button, card){
        button.innerText = "Marcar como leída"
        card.className = "bg-beige border-2 border-solid border-beige shadow-xl m-2 hover:shadow-2xl hover:scale-105 rounded-lg"
      }
    },props: {
      author: String,
      id: Number,
      date: String,
      title: String,
      subTitle: String,
      index: Number
    },
}

</script>

<template>
  <div class="bg-beige border-2 border-solid border-beige shadow-xl m-2 hover:shadow-2xl hover:scale-105 rounded-lg" ref="newsCard">
    <img src="../assets/prueba.png" class="object-fill rounded-t-lg"/>
    <div class="grid grid-rows-3 p-4 xs:p-6 sm:p-10 lg:p-10 text-navy">
      <div class="row-start-1 row-span-2 font-cabin text-ellipsis overflow-hidden ">
        <h2 class="text-base xs:text-xl sm:text-xl lg:text-xl font-bold"> {{ title }}</h2>
        <h3 class="text-sm xs:text-base sm:text-base lg:text-base"> {{ subTitle }}</h3>
      </div>
      <div class="row-start-3 row-span-1 font-cabin text-sm xs:text-base sm:text-base lg:text-base">
        <p> Por: {{author}}</p>
        <div class="grid grid-cols-3"> 
          <div class="col-start-1 col-span-2">
            <p>{{ dateFormat(date) }}</p>
            <p class="text-slate-400">Id: {{ id }}</p>
          </div>
          <button ref="readButton" class="rounded-full bg-sky hover:bg-dark-sky text-xs" @click="manageRead()">Marcar como leída</button>
        </div>
      </div>
    </div>
  </div>
</template>

