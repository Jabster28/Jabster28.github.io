<template>
  <div class="e">
    <div :id="'video-placeholder-' + escName.replace(/_/gi, '-')"></div>
    <v-col>
      <v-card
      :loading="!ready"
      class="mx-auto"
      width="300"
              cols="12"
        sm="4"
              :color="playing ? 'info' : null"
      outlined
      >
      <!-- https://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg -->
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{artist}}</div>
            <v-list-item-title class="headline mb-1">{{ song }}</v-list-item-title>
            <v-list-item-subtitle>{{desc}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
           <v-img :src="`https://img.youtube.com/vi/${youtube_parser(url)}/sddefault.jpg`"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>          
          <v-btn text  @click="startVideo(true)" color="primary" :disabled="!ready">        
            <v-icon dark>mdi-play</v-icon>
          </v-btn>          
          <v-btn text  @click="pauseVideo()" color="error" :disabled="!ready">        
            <v-icon dark>mdi-pause</v-icon>
          </v-btn>          
          <v-btn text  @click="restartVideo()" color="success" :disabled="!ready">  
            <v-icon dark>mdi-replay</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
  </div>
</template>

<script lang="coffee">
export default 
  name: 'Snippet'
  props: [
    'song'
    'artist'
    'url'
    'startTime'
    'desc'
  ]
  computed:
    escName: -> @esc(@song) + @esc(@artist)
  methods:            
    mute: -> window[@escName + "_player"].mute()
    esc: (name) -> name.replace(/[^[^a-zA-Z_$]|[^\w$]/gi, "_").toLowerCase()
                          #      ^ matches stuff that shouldnt be in a js variable name
    restartVideo: -> window[@escName + "_player"].seekTo(@startTime || 0)
    startVideo: (e) -> 
      @playing = true
      window[@escName + "_player"].unMute() if e?
      window[@escName + "_player"].playVideo()
      setTimeout window[@escName + "_player"].playVideo, 10
    
    pauseVideo: -> 
      window[@escName + "_player"].pauseVideo()
      @playing = false
    youtube_parser: (url) ->
      regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      match = url.match(regExp)
      if match and match[7].length == 11 then match[7] else false

  data: ->
    ready: false
    playing: false
  mounted: ->
    window[@escName + "_instance"] = this
    window[@escName + "_init"] = (e) ->
      # Update the controls on load
      # window.updateTimerDisplay()
      # window.updateProgressBar()
      # Clear any old interval.
      window[e + "_instance"].mute()
      window[e + "_instance"].startVideo()
      setTimeout (->
                  window[e + "_instance"].ready = true
                 ), 800  
      setTimeout window[e + "_instance"].pauseVideo, 300
      setTimeout window[e + "_instance"].restartVideo, 500
                
      clearInterval window.time_update_interval
      # Start interval to update elapsed time display and
      # the elapsed part of the progress bar every second.
      window.time_update_interval = setInterval((->
        # window.updateTimerDisplay()
        # window.updateProgressBar()
      ), 1000)
    
    window.updateTimerDisplay = ->
      # Update current time text display.
      # $('#current-time').text formatTime(player.getCurrentTime())
      # $('#duration').text formatTime(player.getDuration())
      return

    window.formatTime = (time) ->
      time = Math.round(time)
      minutes = Math.floor(time / 60)
      seconds = time - (minutes * 60)
      seconds = if seconds < 10 then '0' + seconds else seconds
      minutes + ':' + seconds
    window.ytplayers.push(@escName + "_ready")
    window[@escName + "_ready"] = =>
      window[@escName + "_player"] = new (window.YT.Player)('video-placeholder-' + @escName.replace(/_/gi, '-'),
        width: 0.001
        height: 0.001 
        videoId: @youtube_parser(@url)
        playerVars:
          start: @startTime
        events: 
          onReady: (=> window[@escName + "_init"](@escName))
          onStateChange: window.onPlayerStateChange
          )
      return
    window.onPlayerStateChange = ->
      # console.log "change"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#player {
  display: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
