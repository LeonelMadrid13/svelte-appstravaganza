<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let posts = data.props.posts;
</script>

<!-- <pre>{JSON.stringify(posts, null, 2)}</pre> -->

{#each posts as post }
<div class='container'>
  <div class='post'>
    <h4>
      <a 
      target="_blank" 
      rel="noopener noreferrer" 
      href={`https://www.reddit.com${post.data.permalink}`}>
        {post.data.title}
      </a>
    </h4>
    {#if post.data.selftext !== ''}
      <md-block> {post.data.selftext} </md-block>
    {/if}
  </div>
</div>
{/each}

<style>
  .post{
    outline: 2px solid white;
    padding: 1rem;
    margin: 1rem;
    width: 750px;
  }
  .container{
    display: flex;
    justify-content: center;
  }
</style>