export enum MediaType {
    VIDEO = "video",
    IMAGE = "image",
    GIF = "gif"
}

export interface IMediaConent {
    type: MediaType;
    url: string;
}