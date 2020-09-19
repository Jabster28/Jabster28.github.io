<template>
  <div id="app">
    <v-app>
      <!-- <v-navigation-drawer app>
      </v-navigation-drawer>
      -->
      <v-app-bar app>
        <v-row justify="center">
          <v-btn class="float-left" icon @click="toggleTheme()">
            <v-icon :dark="this.$vuetify.theme.dark"
              >mdi-theme-light-dark</v-icon
            >
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
              artist="Iyaz"
              song="Replay"
              desc="shawty"
              url="https://www.youtube.com/watch?v=pCJzsTP12jo"
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
              song="Megalovania"
              desc="You're gonna have a bad time"
              url="https://www.youtube.com/watch?v=c5daGZ96QGU"
            />
            <songsnippet
              artist="The Pillar Men"
              song="Pillar Men Theme"
              url="https://www.youtube.com/watch?v=XUhVCoTsBaM"
            />
            <songsnippet
              artist="JoJo"
              song="Giorno's Theme"
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
              desc="alright alright alright alright alright alright alright alright alright alright alright alright"
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
              artist="Kirito"
              song="SAO Intro"
              desc="gun gale was bad"
              url="https://www.youtube.com/watch?v=OsLY7DXWsF4"
            />
            <songsnippet
              artist="Ferris"
              song="Ferris' Sand Canyon"
              desc="something something sand canyon"
              url="https://www.youtube.com/watch?v=gQngg8iQipk"
            />
            <songsnippet
              artist="oh hi"
              song="me rn"
              desc="thanks for checking in i'm STILL A PIECE OF GARBAAAAAGE"
              url="https://www.youtube.com/watch?v=FZUcpVmEHuk"
            />
            <songsnippet
              artist="Dawud"
              song="I wanna tell u about my son"
              desc="He's so smart and he's so dumb"
              url="https://www.youtube.com/watch?v=1qQz3OG7VTw"
            />
            <songsnippet
              artist="A dead guy"
              song="Funeral dance Music"
              desc="f to pay respects"
              url="https://www.youtube.com/watch?v=kiEahw-p9uA"
              startTime="30"
            />
            <!-- https://www.youtube.com/watch?v=dNQs_Bef_V8&feature=youtu.be&t=4 -->
            <songsnippet
              artist="Senzawa"
              song="Copypasta rap"
              desc="x3"
              url="https://www.youtube.com/watch?v=h6DNdop6pD8"
              startTime="12"
            />
            <songsnippet
              artist="Fist of the North Star"
              song="Omae wa mou shindeiru"
              desc="NANI!?!?"
              url="https://www.youtube.com/watch?v=dNQs_Bef_V8"
              startTime="4"
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
    console.info "running on commit #{process.env.VUE_APP_GIT_HASH}"
    # window.onYouTubeIframeAPIReady = ->
    #   console.log "ready"
    #   eval(e + "()") for e in window.ytplayers
      
    # ytapi = document.createElement 'script'
    # ytapi.setAttribute 'src', "//www.youtube.com/iframe_api"
    # document.head.appendChild ytapi

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
