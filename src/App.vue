<template>
  <div id="app">
    <v-app>
      <!-- <v-navigation-drawer app>
      </v-navigation-drawer>
      -->
      <v-app-bar app>
        <v-row justify="center">
          <v-btn class="float-left" icon @click="toggleTheme()">
            <v-icon :dark="this.$vuetify.theme.dark">mdi-theme-light-dark</v-icon>
          </v-btn>
          <v-btn icon @click="startAll()">
            <v-icon color="info">mdi-play</v-icon>
          </v-btn>
          <v-btn icon @click="pauseAll()">
            <v-icon color="error">mdi-pause</v-icon>
          </v-btn>
          <v-btn icon @click="restartAll()">
            <v-icon color="success">mdi-replay</v-icon>
          </v-btn>
        </v-row>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- https://www.youtube.com/watch?v=XmBV7WFdKQY -->
          <v-row justify="center">
            <!-- https://youtu.be/gQngg8iQipk  -->
            <songsnippet
              artist="W2S"
              song="Good afternoon,"
              desc="your mom looks like Kim Jong Un"
              url="https://www.youtube.com/watch?v=AMYhP4H9m1I"
              startTime="396"
            />
            <songsnippet
              artist="Noisestorm"
              song="Crab rave"
              desc="🦀 my dad is gone 🦀"
              url="https://www.youtube.com/watch?v=LDU_Txk06tM"
            />
            <songsnippet
              artist="Noisestorm"
              song="[Bridge]"
              desc="🦀 my dad is gone 🦀"
              url="https://www.youtube.com/watch?v=LDU_Txk06tM"
              startTime="74"
            />
            <songsnippet
              artist="Toby fox"
              song="Undertale"
              desc="You're gonna have a bad time"
              url="https://www.youtube.com/watch?v=c5daGZ96QGU"
            />
            <songsnippet
              artist="the pillar men"
              song="That one thing"
              url="https://www.youtube.com/watch?v=XUhVCoTsBaM"
            />
            <songsnippet
              artist="jojo"
              song="Giorno's theme"
              url="https://www.youtube.com/watch?v=So54Khf7bB8"
            />
            <!-- or 1:12 -->
            <songsnippet
              artist="joJo"
              song="[Bridge]"
              url="https://www.youtube.com/watch?v=So54Khf7bB8"
              startTime="56"
            />
            <!-- or 1:12 -->
            <songsnippet
              artist="Jojo"
              song="[Chorus]"
              url="https://www.youtube.com/watch?v=So54Khf7bB8"
              startTime="71"
            />
            <!-- or 1:12 -->
            <!--             https://www.youtube.com/watch?v=So54Khf7bB8 -->
            <songsnippet
              artist="alright"
              song="alright alright"
              desc="alright alright alright alright alright alright alright alright alright alright alright alright "
              url="https://www.youtube.com/watch?v=8qMtsir0l9k"
              startTime="15"
            />
            <songsnippet
              artist="Luigi"
              song="Luigi Nutting"
              desc="oh you touch my tralala"
              url="https://www.youtube.com/watch?v=XmBV7WFdKQY"
            />
            <songsnippet
              artist="kirito"
              song="sao intro"
              desc="gun gale is bad"
              url="https://youtu.be/OsLY7DXWsF4"
            />
            <songsnippet
              artist="chizz"
              song="idkon"
              desc="something something sand canyon"
              url="https://youtu.be/gQngg8iQipk"
            />
            <songsnippet
              artist="oh hi"
              song="thanks for checking in i'm"
              desc="STILL A PIECE OF GARBAAAAAGE"
              url="https://www.youtube.com/watch?v=FZUcpVmEHuk"
            />
            <songsnippet
              artist="dawud"
              song="i wanna tell u bout my son"
              desc="he so smart"
              url="https://www.youtube.com/watch?v=1qQz3OG7VTw"
            />
            <songsnippet
              artist="a dead guy"
              song="Funeral Dance music"
              desc="f to pay respects"
              url="https://www.youtube.com/watch?v=kiEahw-p9uA"
              startTime="30"
            />
          </v-row>
        </v-container>
      </v-content>

      <!-- <v-footer app>
        
      </v-footer>-->
    </v-app>
  </div>
</template>
<script lang="coffee">
import Snippet from './components/Snippet.vue'
window.ytplayers = []
export default {
  components:
    songsnippet: Snippet
  name: 'app',
  created: ->
    window.onYouTubeIframeAPIReady = ->
      console.log "ready"
      eval(e + "()") for e in window.ytplayers
    ytapi = document.createElement 'script'
    ytapi.setAttribute 'src', "//www.youtube.com/iframe_api"
    document.head.appendChild ytapi

  computed: {
    # time: (->
    #   new Date()
    # )
  }
  methods: {
    toggleTheme: -> this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    # log: (->
    #   console.log "wow"
    # )
    restartAll: ->
      ytplayers.forEach (x) ->
        eval x.replace(/ready$/, 'instance') + '.restartVideo()'
    startAll: ->
      ytplayers.forEach (x) ->
        eval x.replace(/ready$/, 'instance') + '.startVideo(true)'
    pauseAll: ->
      ytplayers.forEach (x) ->
        eval x.replace(/ready$/, 'instance') + '.pauseVideo()'

  }
  data: -> {
    # vue: "great"
    # vuetfiy: "amazing"
    # reactIsBetter: false
    # coffeescriptSupport: true
  }
  mounted: ->
    # log()
    
}
</script>

<style lang="scss">
</style>
