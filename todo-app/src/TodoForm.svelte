<script>
    export let addTodo;
    let newTodo = "";

    function formSubmitted() {
        if (newTodo !== "") {
            addTodo(newTodo)
        }
        newTodo = "";
    }
</script>

<form on:submit|preventDefault={formSubmitted}>
    <label>
        <input bind:value={newTodo} placeholder="Enter a todo..." type="text">
    </label>
    <button>Add Todo</button>
</form>