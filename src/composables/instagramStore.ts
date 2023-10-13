import type { IFeedStoreDefinition } from "@/models/feed";
import type { IInstagramMedia, InstagramResponse } from "@/models/instagram/instagramMedia";
import { getFeedStore } from "./ifeedstore";
import { instagramFeedResponseMock, instagramMediaResponseMock } from "@/models/instagram/instagramFeedMock";

class InstagramService implements IFeedService<IInstagramMedia> {

    async loadState(userId: string): Promise<IInstagramMedia[]> {
        var result = await instagramFeedResponseMock
        .then(x => x.json() as Promise<InstagramResponse>)
        .then(p => {
            const d = p.data;
            return d;
        });

        return result;
    }

    async getCarouselItems(mediaId: string): Promise<IInstagramMedia[]>{
        var result = await instagramMediaResponseMock
        .then(x => x.json() as Promise<InstagramResponse>)
        .then(x => x.data);

        return result;
    }

    refeshState(): Promise<IInstagramMedia[]> {
        throw new Error("Method not implemented.");
    }
}

export interface InstagramStoreDefinition extends IFeedStoreDefinition<IInstagramMedia>{}
export function useInstagramStore(name: string, userId: string): InstagramStoreDefinition {return getFeedStore<IInstagramMedia>(name, userId, new InstagramService()) } 

export function getInstagramService(): InstagramService {
    return new InstagramService();
};
