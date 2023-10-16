export const instagramFeedResponseMock = async () => {
  const response = new Response(JSON.stringify(
  {
  data: [
    {
      id: "1234567890",
      media_type: "IMAGE",
      media_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f35f8862-e4fc-4928-b060-47ac0293a112/dfybyat-c5aeed3c-8352-4500-a978-c21963b7dd27.png/v1/fit/w_828,h_1168,q_70,strp/i_saw_it_on_tv_by_ccdriver_dfybyat-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2OSIsInBhdGgiOiJcL2ZcL2YzNWY4ODYyLWU0ZmMtNDkyOC1iMDYwLTQ3YWMwMjkzYTExMlwvZGZ5YnlhdC1jNWFlZWQzYy04MzUyLTQ1MDAtYTk3OC1jMjE5NjNiN2RkMjcucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VkSbs1apJ1jQ5IZPpB84xFwblFpkoNYL-EYJ5qTKzhw",
      created_time: 1669932327,
      caption: "This is a caption.",
      likes: {
        count: 100
      },
      comments: {
        count: 20
      },
      owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    },
    {
      id: "9876543210",
      media_type: "VIDEO",
      media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      created_time: 1669932200,
      caption: "This is a video caption.",
      likes: {
        count: 50
      },
      comments: {
        count: 10
      },
      owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    },
    {
      id: "abcdefghijklmnopqrstuvwxyz",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://www.instagram.com/p/abcdefghijklmnopqrstuvwxyz/",
      created_time: 1669930001,
      caption: "This is a carousel album caption.",
      likes: {
        count: 25
      },
      comments: {
        count: 5
      },
      owner: {
        id: '88911236',
        username: 'instagramuser'
      }
    }
  ]
}))
return response;
};


export const instagramMediaResponseMock = async () => { 
  const response = new Response(JSON.stringify({
  "data": [
    {
      "id": "1234567890",
      "media_type": "IMAGE",
      "media_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf5e2425-d8f3-4390-8d33-efaa129af554/dg5m24d-13b975d5-6996-4570-a18f-80119b229d4d.png/v1/fill/w_1063,h_752/nin_o_chithaeglir_by_eviraitari_dg5m24d-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmNWUyNDI1LWQ4ZjMtNDM5MC04ZDMzLWVmYWExMjlhZjU1NFwvZGc1bTI0ZC0xM2I5NzVkNS02OTk2LTQ1NzAtYTE4Zi04MDExOWIyMjlkNGQucG5nIiwiaGVpZ2h0IjoiPD05MDUiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9jZjVlMjQyNS1kOGYzLTQzOTAtOGQzMy1lZmFhMTI5YWY1NTRcL2V2aXJhaXRhcmktNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.iLM6V64c4ODiPK0zKVj_0ORDmnf72PBSdNSL1VFwT0g",
      "caption": "This is the caption for the first image."
    },
    {
      "id": "9876543210",
      "media_type": "IMAGE",
      "media_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb46368b-fd3d-494a-a601-8228e41a98ad/dg97bnt-997baf5c-6283-4859-915c-e99f5435bda8.png/v1/fill/w_1163,h_687,q_70,strp/basegrad_by_antonkurbatov_dg97bnt-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA2MiIsInBhdGgiOiJcL2ZcL2ViNDYzNjhiLWZkM2QtNDk0YS1hNjAxLTgyMjhlNDFhOThhZFwvZGc5N2JudC05OTdiYWY1Yy02MjgzLTQ4NTktOTE1Yy1lOTlmNTQzNWJkYTgucG5nIiwid2lkdGgiOiI8PTM0OTEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8vSNQeeiTLUdnPb97x23PuxAYf9g-TDDKuhZRdFmmes",
      "caption": "This is the caption for the second image."
    },
    {
      "id": "abcdefghijklmnopqrstuvwxyz",
      "media_type": "IMAGE",
      "media_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b5d42ccf-8d4e-4a86-bb3a-c7108fdf8484/dg9lktw-5c8e09e0-c608-4c1d-bf56-882cf264667e.jpg/v1/fit/w_828,h_1162,q_70,strp/araras_by_ricardoafranco_dg9lktw-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5NSIsInBhdGgiOiJcL2ZcL2I1ZDQyY2NmLThkNGUtNGE4Ni1iYjNhLWM3MTA4ZmRmODQ4NFwvZGc5bGt0dy01YzhlMDllMC1jNjA4LTRjMWQtYmY1Ni04ODJjZjI2NDY2N2UuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gSOKDA9yvRJ20xAPrhF-G2LvRoU23qKVEfQum2Xnv8k",
      "caption": "This is the caption for the third image."
    }
  ]
}))
  return response;
};