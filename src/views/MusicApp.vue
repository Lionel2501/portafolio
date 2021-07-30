<template>
  <div id="app">
    <div class="flex">
    <PracticasList/>
    <main class="container">
      <section class="player">
      <h1 class="header">My music</h1>
        <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
        <div class="controls" v-on-clickaway="stop">
          <button class="prev" @click="prev">Prev</button>
          <button 
            class="play" 
            v-if="notPlaying" @click="play()" 
            >Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
      </section>
      <section class="playlist">
        <button v-for="song of songs" :key="song.src" @click="play(song)" 
          :class="(song.src == current.src) ? 'song-playing' : 'song'">
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </main>
  </div>
  </div>
</template>

<script>
import PracticasList from '@/components/PracticasList'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'MusicApp',
  mixins: [ clickaway ],
  components:{
      PracticasList
  },
  data(){
    return {
      current: {},
      index: 0,
      notPlaying: true,
      songs:[
        {
          title:'Good Life',
          artist:'Kanye West',
          src: require('../assets/good_life.mp3')
        },
        {
          title:'Rock With You',
          artist:'Michael Jackson',
          src: require('../assets/rock_with_you.mp3')
        },
        {
          title:'La Vida Tombola',
          artist:'Manu Chau',
          src: require('../assets/la_vida_tombola.mp3')
        },
      ],
      player: new Audio()
    }
  },
  methods: {
    stop(){
      this.player.pause();
      this.notPlaying = true
    },
    play(song){
      if (typeof song != "undefined") {
        this.current = song
        this.player.src = this.current.src
      }
      this.player.play();
      this.notPlaying = false
      this.player.addEventListener('ended', function (){
        this.index++
        if(this.index > this.songs.length -1){
        this.index = 0
        }
        this.current = this.songs[this.index]
        this.play(this.current)
      }.bind(this))
    },
    pause(){
      this.player.pause();
      this.notPlaying = true
    },
    prev(){
      this.index--
      if(this.index < 0){
        this.index = this.songs.length - 1
      }
      this.current = this.songs[this.index]
      this.play(this.current)
    },
    next(){
      this.index++
      if(this.index > this.songs.length -1){
        this.index = 0
      }
      this.current = this.songs[this.index]
      this.play(this.current)
    }
  },  
  created(){
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    //this.player.play()
  },  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif
}

.header{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}

.container{
  width: 100%;
  margin: 0 auto;
  padding: 25px;
}

.song-title{
  color: #53565A;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-title span{
  font-weight: 400;
  font-style: italic;
}

.controls{
  display: flex;
  justify-content: center;
  padding: 30px 15px;
  align-items: center;
}

button{
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.play, .pause{
    width: 100px;
  font-size: 20px;
  font-weight: 700;
  margin: 0 15px;
  padding: 15px 25px;
  border-radius: 8px;
  color: #fff;
  background-color: #CC2E5D;
}

.play:hover, .prev:hover, .next:hover, .pause:hover{
  background-color: #e61352;
  border-radius: 9px;
  transform: scale(1.001);
}

.prev, .next{
  font-size: 15px;
  font-weight: 600;
  margin: 5px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #CC2E5D;
}

.playlist{
  padding: 0 30px;
}

.playlist h3{
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.playlist, .song{
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

.playlist, .song:hover{
  color: #ff5858;
}

.playlist .song-playing{
  color: #fff;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
}
</style>
