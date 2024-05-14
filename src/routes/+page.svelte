<script>

function redirectToLogin() {
        window.location.href = "login";
}

</script>

<div id="welcome">
    <h1>Welcome to Demo</h1>
    <button id="loginButton" on:click={redirectToLogin}>Login</button>
</div>

<style>

    h1 {
        text-align: center;
        color: darkcyan;
    }

    button a {
        text-decoration: none;
        color: black;
    }

    button {
        width: 10%;
        font-size: 14px;
        border-radius: 5px;
        padding: 0.5rem;
        background-color: #fbff49;
    }

    button:active {
        background-color: darkcyan;
    }

    button:hover {
        cursor: pointer;
    }

    #welcome {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>