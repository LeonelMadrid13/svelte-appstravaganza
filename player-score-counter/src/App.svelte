<script>
	import PlayerScore from "./PlayerScore.svelte"; // This is the component we want to use

	let player1Score = 0; // This is a reference to the component
	let player2Score = 0; // This is a reference to the component

	function reset (){
		player1Score = 0;
		player2Score = 0;
	}
</script>

<main>
	<div class='playerContainer'>
		<PlayerScore bind:playerScore={player1Score} PlayerName='Player 1'/> <!--// This is how we use the component and pass in a prop -->
		<PlayerScore bind:playerScore={player2Score}  PlayerName='Player 2'/>
	</div>
	<button on:click={reset} class='contrast outline'>RESET</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	.playerContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	button{
		width: 350px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>