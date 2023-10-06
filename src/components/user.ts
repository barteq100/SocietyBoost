import { appStore, props } from './TwitterPost.vue';

const user: IUser = appStore.users.find(x => x.id == props.post.author_id);
