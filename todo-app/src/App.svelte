<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import TodoForm from "./TodoForm.svelte";

	let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

	function addTodo(todo) {
		todos.push({
			title: todo,
			done: false,
		});
		todos = todos;
	}

	function removeTodo(index){
		todos.splice(index, 1);
		todos = todos;
	}

	$: localStorage.setItem("todos", JSON.stringify(todos));
</script>

<main>
	<h1>Todo App</h1>
	<TodoForm addTodo={addTodo}/>
	{#each todos as todo, index}
		<li class='todo' class:done={todo.done} style='color: #fff'>
			{#if todo.done}
				<span>✅</span>
			{/if}
			<span on:click={() => todo.done = !todo.done}>
				{todo.title}
			</span>
			<span class='delete' on:click={() => {removeTodo(index)}}>🗑️</span>
		</li>
	{/each}
</main>

<style>

	.delete{
		display: inline-block;
	}

	.delete:hover{
		transform: scale(2);
	}

	.done{
		text-decoration: line-through;
		color: #333 !important;
	}
</style>