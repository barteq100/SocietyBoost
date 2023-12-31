<script setup lang="ts">
import {ToMediaType} from '@/models/twitter/twitterTweetResponse'
import { useAppState } from '@/composables/appStore'
import type { TwitterTweet } from '@/models/twitter/twitterTweet'
import TwitterIcon from './icons/TwitterIcon.vue';
const props = defineProps<{
  post: TwitterTweet
}>()
const appStore = useAppState()
const fuser = appStore.users.find((x) => x.id == props.post.author_id)
const user = fuser as IUser
const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })
const date = `${formatter.format(props.post.created_at)}`;
</script>

<template>
  <div class="block bg-white border border-gray-200 rounded-lg shadow text-clip overflow-auto h-fit">
    <div class="grid grid-col">
      <div class="twitter-banner relative">
        <TwitterIcon class="absolute inset-y-0 right-0 w-12 h-12"/>
      </div>
      <div class="twitter-style">
        <link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

        <div class="tweet-wrap">
          <div class="tweet-header">
            <img :src="user.profile_image" alt="" class="avator" />
            <div class="tweet-header-info">
              {{ user.name }} <span>@{{ user.name }}</span
              ><span>. {{ date }} </span>
              <p>
                {{ post.text }}
              </p>
            </div>
          </div>
          <div class="tweet-img-wrap">
            <!-- <MediaComponent :media="media"/> -->
          </div>
          <div class="tweet-info-counts">
            <div class="comments">
              <svg
                class="feather feather-message-circle sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                ></path>
              </svg>
              <div class="comment-count">{{ post.comment_count }}</div>
            </div>

            <div class="retweets">
              <svg
                class="feather feather-repeat sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              <div class="retweet-count">{{ post.retweets_count }}</div>
            </div>

            <div class="likes">
              <svg
                class="feather feather-heart sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
              <div class="likes-count">{{ post.likes_count }}</div>
            </div>

            <div class="message">
              <svg
                class="feather feather-send sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.twitter-banner {
  height: 3rem;
  width: 100%;
  background: rgb(208, 208, 208);
  background: linear-gradient(90deg, rgba(208, 208, 208, 1) 0%, rgba(255, 255, 255, 1) 100%);
}
.twitter-style {
  background: #e6ecf0;
  font-family: 'Asap', sans-serif;
  font-family: 'Roboto', sans-serif;
}

.avator {
  border-radius: 100px;
  width: 48px;
  margin-right: 15px;
}

.tweet-wrap {
  background: #fff;
  border-radius: 3px;
  padding: 30px;
  border-bottom: 1px solid #e6ecf0;
  border-top: 1px solid #e6ecf0;
}

.tweet-header {
  display: flex;
  align-items: flex-start;
  font-size: 14px;
}
.tweet-header-info {
  font-weight: bold;
}
.tweet-header-info span {
  color: #657786;
  font-weight: normal;
  margin-left: 5px;
}
.tweet-header-info p {
  font-weight: normal;
  margin-top: 5px;
}
.tweet-img-wrap {
  padding-left: 60px;
}

.tweet-info-counts {
  display: flex;
  margin-left: 60px;
  margin-top: 10px;
}
.tweet-info-counts div {
  display: flex;
  margin-right: 20px;
}
.tweet-info-counts div svg {
  color: #657786;
  margin-right: 10px;
}
@media screen and (max-width: 430px) {
  .twitter-style {
    padding-left: 20px;
    padding-right: 20px;
  }
  .tweet-header {
    flex-direction: column;
  }
  .tweet-header img {
    margin-bottom: 20px;
  }
  .tweet-header-info p {
    margin-bottom: 30px;
  }
  .tweet-img-wrap {
    padding-left: 0;
  }
  .tweet-info-counts {
    display: flex;
    margin-left: 0;
  }
  .tweet-info-counts div {
    margin-right: 10px;
  }
}
</style>
