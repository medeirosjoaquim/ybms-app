type ArtistInfoProps = {
  name: string,
  url:string,
  image:string,
  streamable:string,
  ontour:string,
  stats:string,
  similar:string,
  tags:string,
    bio: {
      links: {
        rel: string,
        href: string
      },
      published: string,
      summary: string,
      content: string
   }
  };
