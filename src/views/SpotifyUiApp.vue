<template>
  <div class="bg-dark ">
    <div class="flex" style="height:88vh">
      <!-- sidenav -->
      <div class="h-full bg-black w-56 flex-none overflow-y-scroll scrollbar scrollbar-thumb-black scrollbar-track-black">
        <div class="p-6">
          <img src="@/assets/logoTitleBlack.png" class="h-10" style="filter:brightness(0) invert(1);">
        </div>
        <div class="mx-2 mb-5">
          <button class="my-2 flex bg-light text-white px-3 py-2 w-full text-sm font-semibold rounded items-center justify-start">
            <img src="@/assets/home3.png" class="mr-4 h-4 w-4" alt="">
            <p class="opacity-75 hover:opacity-100">Home</p>
          </button>
          <button class="hover:bg-light my-2 flex text-white px-3 py-2 w-full text-sm font-semibold rounded items-center justify-start">
            <img src="@/assets/search.png" class="mr-4 h-4 w-4" alt="">
            <p class="opacity-75 hover:opacity-100">Search</p>
          </button>
          <button class="hover:bg-light my-2 flex text-white px-3 py-2 w-full text-sm font-semibold rounded items-center justify-start">
            <img src="@/assets/barchart.png" class="mr-3 h-4 w-4" alt="">
            <p class="opacity-75 hover:opacity-100">Your Library</p>
          </button>
        </div>
         <div class="mx-5">
           <h1 class="mb-3 text-sm text-lighttest tracking-widest uppercase">Playlist</h1>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <div class="bg-white h-8 w-8 mr-4 my-2 rounded-lg">
              <img src="@/assets/add2.png" class="mr-4 h-8 w-8" alt="">
            </div>
            <p class="text-sm text-white font-semibold">Create Playlist</p>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <img src="@/assets/liked2.png" class="mr-4 h-8 w-8" alt="">
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <div class="w-full h-px bg-light my-3"></div>
        </div>
        <div class="mx-5">
          <div class="my-2 w-full h-24 overflow-y-scroll scrollbar scrollbar-thumb-black scrollbar-track-black">
            <p v-for="album in albums" :key="album" 
              class="text-lighttest hover:text-white">{{ album.name }}
            </p>
          </div>
          <button class="mb-5 justify-start flex items-center text-lighttest hover:text-white">
           <div class="h-3 w-4 mr-4">
              <img src="@/assets/download.png" class="w-5 h-5">
           </div>
            <p class="mt-2 text-sm  font-semibold">Install App</p>
          </button>
        </div>
        <div class="relative ">
          <div class="absolute  h-full flex justify-end items-start w-full px-5 py-3 opacity-0 hover:opacity-100">
            <img src="@/assets/arrow.png" class="w-5 h-5">
          </div>
          <img src="@/assets/cover1.jpg" alt="">
        </div>
      </div>
        <!-- main -->
        <div class="flex flex-col relative px-5 w-full h-full bg-dark scrollbar scrollbar-thumb-lighttest scrollbar-track-black">  
        <!-- header -->
        <div class="w-full sticky bg-dark top-0 p-2 flex items-center justify-between">
          <div class="flex items-center">
            <button
              @click="back"
              class="rounded-full bg-black h-10 w-10 mr-4 mt-2">
              <img class="rounded-full h-6 w-6 ml-2" src="@/assets/arrowLeft.png" alt="">
            </button>
            <button class="rounded-full bg-black h-10 w-10 mt-2">
              <img class="rounded-full h-6 w-6 ml-2" src="@/assets/arrowRight.png" alt="">
            </button>
          </div>
          <div class="relative mr-5" >
            <button class="bg-light rounded-full p-1 flex items-center">
              <img src="@/assets/foto.png" alt="" class="h-8 w-8 rounded-full ">
              <p @click="showDropDown = true" class="text-white font-semibold mx-3 uppercase opacity-75 hover:opacity-100">Lionel Cassar</p>
              <img v-if="showDropDown === false" src="" alt="">
              <img v-else src="" alt="">
            </button>
            <div class="absolute bg-light w-full rounded mt-1" v-if="showDropDown === true">
              <button @click="showDropDown = false" class="text-sm border-b border-lighttest w-full py-2 text-lighttest hover:text-white hover:bg-lighttest opacity-75 hover:opacity-100">Account</button>
              <button @click="showDropDown = false" class="text-sm w-full py-2 text-lighttest hover:text-white hover:bg-lighttest opacity-75 hover:opacity-100">LogOut</button>
            </div>
          </div>
        </div>
        <!-- cards -->
        <div class="px-6 py-3">
          <div class="flex justify-between items-center">
            <h1 class="tracking-wider text-2xl text-white font-semibold hover:underline cursor-pointer">Recently Played</h1>
            <h2 class="pr-8 justify-end mb-3 tracking-wider mt-2 text-xs text-white font-semibold uppercase hover:underline cursor-pointer">See All</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="recent in recents" :key="recent.img" class="p-2 w-48 relative">
              <div class="absolute justify-end flex items-end p-8 w-full h-full transition duration-700 opacity-0 hover:opacity-100">
                <div class="rounded-full bg-green h-8 w-8 flex justify-center">
                  <img src="@/assets/playIcon.png" class="cursor-pointer h-4 w-4 mt-2 hover:scale-150">
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 shadow rounded-lg">
                <img :src="`${ recent.img }`" class="w-full h-auto shadow mb-2 hover:cursor-pointer">
                <h1 class="text-white text-sm tracking-wide font-semibold text-left">{{ recent.title }}</h1>
                <h2 class="text-lighttest text-xs tracking-wide pb-8 text-left">{{ recent.artist }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- playbar -->
    <div class="bg-light w-full flex justify-between" style="height:12vh;">
      <div class="items-center flex">
        <img src="@/assets/discovery.jpg" class="w-20 ml-5 p-2" style="height:12vh;">
        <div class="align-center">
          <h1 class="text-sm text-white tracking-wide text-left">Face To Face</h1>
          <h2 class="text-xs text-lighttest tracking-wide text-left">Daft Punk</h2>
        </div>
        <img src="@/assets/likeSong.png" class="h-8 w-8 ml-10">
        <img src="" alt="">
      </div>
      <div class="justify-center w-1/2">
        <div class="items-center flex mt-3 justify-center">
          <button><img src="" alt=""></button>
          <button><img src="@/assets/randomIcon.png" class="h-3 w-4 mr-5 opacity-50 hover:opacity-100"></button>
          <button><img src="@/assets/prevIcon.png" class="h-4 w-4 opacity-50 hover:opacity-100"></button>
          <button class="h-6 w-9 mx-5 mb-3" v-if="play" @click="toPlay(song)"><img src="@/assets/playIcon.png" ></button>
          <button class="h-9 w-9 mx-5" v-else @click="toPause"><img src="@/assets/pauseIcon.png" ></button>
          <button><img src="@/assets/nextIcon.png" class="h-4 w-4 opacity-50 hover:opacity-100"></button>
          <button><img src="@/assets/repeat.png" class="h-3 w-4 ml-5 opacity-50 hover:opacity-100"></button>
        </div>
        <div class="flex justify-center ">
          <p class="text-xs text-white align-center mr-4">0:28</p>
          <div class=" w-full h-0.5 bg-lighttest rounded-full mt-2"></div>
          <p class="text-xs text-white align-center ml-4">2:48</p>
        </div>
      </div>
      <div class="items-center flex mr-10">
        <img src="" alt="">
        <img src="" alt="">
        <img src="@/assets/volume.png" class="h-5 w-5 mr-5 opacity-50 hover:opacity-100">
        <div class="bg-lighttest w-20 rounded-full h-0.5 ml-3">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//import PracticasList from '@/components/PracticasList'

export default {
  name: 'Home',
  components:{
      //PracticasList
  },
  data() {
    return {
      albums:[
        {name:'Thriller'},
        {name:'The Wall'},
        {name:'Out Of Our Heads'},
        {name:'Legend'},
        {name:'Discovery'},
        {name:'Trilogy'},
        {name:'Abbey Road'},
        {name:'Nero Nemesis'},
        {name:'Trone'},
        {name:'Ultra'},
      ], 
      showDropDown:false,
      recents:[
        {img:require("@/assets/cover1.jpg"), title:'Thriller', artist:'Mickael Jackson'},
        {img:require("@/assets/the_wall.jpg"), title:'The Wall', artist:'Pink Floyd'},
        {img:require("@/assets/rolling_stones.jpg"), title:'Out Of Our Heads', artist:'The Rolling Stones'},
        {img:require("@/assets/bob_marley.jpg"), title:'Legend', artist:'Bob Marley'},

      ],
      play:true,
      song:require('@/assets/face_to_face.mp3'),
      player: new Audio(),
      current:{}
    }
  },
  methods:{
    toPlay(song){
      this.play = false
      if(song){
        this.current = song
        this.player.src = this.current
      }
      this.player.play()
    },
    toPause(){
      this.player.pause()
      this.play = true
    },
    back(){
      this.$router.push('/practicas')
    }
  }
}
</script>