<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let posts = data.props.posts;
</script>


{#each posts as post }
<div class='container'>
  <!-- <pre>{JSON.stringify(post.data, null, 2)}</pre> -->
  <div class='post'>
    <h4>
      <a 
      target="_blank" 
      rel="noopener noreferrer" 
      href={`https://www.reddit.com${post.data.permalink}`}>
        {post.data.title}
      </a>
    </h4>
    <div class='media'>
      {#if post.data.secure_media?.reddit_video}
        <video muted autoplay loop src={post.data.secure_media.reddit_video.fallback_url}></video>
      {:else if post.data.preview?.reddit_video_preview}
        <video muted autoplay loop src={post.data.preview.reddit_video_preview.fallback_url}></video>
      {:else if post.data.post_hint === 'image'}
        <img src={post.data.url} alt="">
      {/if}
    </div>
  </div>
</div>
{/each}

<style>
  .post{
    display: flex;
    outline: 2px solid white;
    padding: 1rem;
    margin: 1rem;
    width: 750px;
  }
  video{
    width: 100%;
    height: 100%;
  }

  img{
    width: auto;
    height: 100%;
  }

  .media{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
  }
  .container{
    display: flex;
    justify-content: center;
  }
</style>