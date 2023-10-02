interface IFacebookPost {
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
    photosUrls: string[];
}

class FacebookPost implements IFacebookPost {
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
    photosUrls: string[];

    constructor(
        _id: string, 
        _text: string, 
        _created_at: Date, 
        _author_id: string, 
        _photosUrls: string[]
        ) {
        this.id = _id;
        this.text = _text;
        this.created_at = _created_at;
        this.author_id = _author_id;
        this.photosUrls = _photosUrls;
    }
    
}