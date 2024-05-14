<script>
	import { goto } from '$app/navigation';
	import { userlist } from '$lib/User';
	import { isAuthenticated } from '$lib/auth';

    let username = "";
    let password = "";
    let error = "";

    function validateUser() {
        let user = userlist.find(value => (value.username == username.toLocaleLowerCase() || value.email == username.toLocaleLowerCase()) && value.password == password)

        if (user) {
            isAuthenticated.set(user);
            goto("home");
        }else{
            error = "Email or password are incorrect"
        }
    }
</script>

<div id="container">
    <div id="login">
        <h1>Sing in</h1>
        <div class="input-group">
            <i class="fa-solid fa-user icon"></i>
            <input bind:value={username} type="text" placeholder="Email">
        </div>
        <div class="input-group">
            <i class="fa-solid fa-key icon"></i>
            <input bind:value={password} type="password" placeholder="Password">
        </div>
        <button on:click={validateUser}>Login</button>
        {#if error}
        <p style="color: red;">{error}</p>
    {/if}
    </div>
</div>

<style>
    #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #login {
        color: white;
        width: 40%;
        height: auto;
        background-color: #293029;
        border-radius: 5px;
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input-group {
        color: white;
        width: 70%;
        display: flex;
        align-items: baseline;
        justify-content: center;
    }

    input {
        display: inline;
        width: 100%;
        min-height: 3vh;
        width: 180px;
        padding: 5px 5px;
        margin-bottom: 15px;
    }

    button {
        width: 30%;
        font-size: 14px;
        border-radius: 5px;
        padding: 0.5rem;
        margin-top: 10px;
        background-color: #fbff49;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        background-color: darkcyan;
    }

    .icon {
        font-size: 15px;
        display: inline;
        color: black;
        padding: 9px;
        background-color: #d6d829;
        border: 2px solid black;
    }
</style>