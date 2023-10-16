<script lang="ts">
import { type IMediaConent, MediaType } from '@/models/mediaContent'
import { defineProps, h } from 'vue'

export default {
  props: ['media'],
  setup(props) {

    function getRendererType(media: IMediaConent): string {
      switch (media.type) {
        case MediaType.GIF:
        case MediaType.IMAGE:
          return 'img'
        case MediaType.VIDEO:
          return isYouTube(media.url) ? "iframe" : "video"
      }
    }
    function isYouTube(url: string): boolean {
        return url.includes("youtu.be") || url.includes("youtube.com");
    }
    function parseUrlToEmbed(url: string) {
        const videoHashMatch = url.match("(be|com)\\/(.*)(\\/|\\?)?");
        if(videoHashMatch != null && videoHashMatch.length > 2){
            return `https\\\\youtube.com\\embed\\${videoHashMatch[2]}`
        }
        return url;
    }
    function getYouTubePoperties(media: IMediaConent) {
        const hasEmbed = media.url.includes("embed");
        const url = hasEmbed ? media.url : parseUrlToEmbed(media.url);
        return {src: url, width: "720", height: "480", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen: true, class: "object-cover max-w-md"}
    }
    function getRenderProperties(media: IMediaConent): object {
        switch (media.type) {
        case MediaType.GIF:
        case MediaType.IMAGE:
          return {src: media.url, class: "object-cover max-w-md"};
        case MediaType.VIDEO:
            if(isYouTube(media.url)){
                return getYouTubePoperties(media);
            } else {
                return {src: media.url}
            }
      }
    }

    return () => {
       return h(getRendererType(props.media), getRenderProperties(props.media));
    }
  }
}
</script>

<style lang="" scoped></style>
