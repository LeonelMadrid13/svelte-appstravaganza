<script>
    export let PlayerName; // This is a prop that is passed in from the parent component
	export let playerScore = 0;

	function increasePlayerScore() {
		playerScore += 1;
	}

	function DecreasePlayerScore() {
		playerScore -= 1;
		if (playerScore < 0) {
			playerScore = 0;
		}
	}
</script>

<div>
    <h2 class="center">{PlayerName}</h2>
    <h3 class="center">{playerScore}</h3>
	<button on:click={increasePlayerScore}>Up</button>
	<button on:click={DecreasePlayerScore}>Down</button>
</div>

<style>
    .center {
        text-align: center;
    }

    div{
        width: 350px;
        margin: 10px;
    }
</style>