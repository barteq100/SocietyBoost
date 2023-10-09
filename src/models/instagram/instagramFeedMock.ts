export const instagramFeedResponseMock: Promise<Response> = Promise.resolve(Response.json(`{
  "data": [
    {
      "id": "1234567890",
      "media_type": "IMAGE",
      "media_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example.jpg/1200px-Example.jpg",
      "created_time": 1669932327,
      "caption": "This is a caption.",
      "likes": {
        "count": 100
      },
      "comments": {
        "count": 20
      },
      "owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    },
    {
      "id": "9876543210",
      "media_type": "VIDEO",
      "media_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "created_time": 1669932200,
      "caption": "This is a video caption.",
      "likes": {
        "count": 50
      },
      "comments": {
        "count": 10
      },
      "owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    },
    {
      "id": "abcdefghijklmnopqrstuvwxyz",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://www.instagram.com/p/abcdefghijklmnopqrstuvwxyz/",
      "created_time": 1669930001,
      "caption": "This is a carousel album caption.",
      "likes": {
        "count": 25
      },
      "comments": {
        "count": 5
      },
      "owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    }
  ]
}
  `));


export const instagramMediaResponseMock: Promise<Response> = Promise.resolve(Response.json(`{
  "data": [
    {
      "id": "1234567890",
      "media_type": "IMAGE",
      "media_url": "https://instagram.com/p/Cjd2zL3M4j6/",
      "caption": "This is the caption for the first image."
    },
    {
      "id": "9876543210",
      "media_type": "IMAGE",
      "media_url": "https://instagram.com/p/Cjct539MS2x/",
      "caption": "This is the caption for the second image."
    },
    {
      "id": "abcdefghijklmnopqrstuvwxyz",
      "media_type": "IMAGE",
      "media_url": "https://instagram.com/p/CjcqR1Xsu8s/",
      "caption": "This is the caption for the third image."
    }
  ]
}`));