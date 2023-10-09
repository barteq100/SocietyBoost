import type { IContentModel } from "../iconentmodel";
import { MediaType } from "../mediaContent";

export enum InstagramMediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  CAROUSEL_ALBUM = "CAROUSEL_ALBUM",
}

export interface IInstagramMedia extends IContentModel{
    id: string;
    media_type: InstagramMediaType;
    media_url: string;
    created_time: EpochTimeStamp;
    caption: string;
    likes: {
      count: number;
    };
    comments: {
      count: number;
    };
    owner: IUser
  }
  
export interface InstagramResponse {
    data: IInstagramMedia[];
  }

export class InstagramMedia implements IInstagramMedia {
  id: string;
  media_type: InstagramMediaType;
  media_url: string;
  created_time: number;
  caption: string;
  likes: { count: number; };
  comments: { count: number; };
  owner: IUser;

  public get text(): string {
    return this.caption;
  }

  public get created_at(): Date {
    return new Date(this.created_time);
  }

  public constructor(id: string, media_type: InstagramMediaType, media_url:string, created_time: number, caption: string, likes: {count: number}, comments: {count: number}, owner: IUser)
  {
    this.id = id;
    this.media_type = media_type;
    this.media_url = media_url;
    this.created_time = created_time;
    this.caption = caption;
    this.likes = likes;
    this.comments = comments;
    this.owner = owner;
  }

  public static FromIInstagramMedia(media: IInstagramMedia) { 
    return new InstagramMedia(media.id, media.media_type, media.media_url, media.created_time, media.caption, media.likes, media.comments, media.owner);
  }

}

  export function ToMediaType(twitterMediaType: InstagramMediaType): MediaType {
    switch (twitterMediaType) {
        case InstagramMediaType.VIDEO:
            return MediaType.VIDEO
        case InstagramMediaType.IMAGE:
            return MediaType.IMAGE;
        default:
            return MediaType.IMAGE
    }
}