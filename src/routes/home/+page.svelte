<script>
	import { User } from '$lib/User';
import { isAuthenticated } from '$lib/auth';
	import { onMount } from 'svelte';
    
    let user = new User("", "", "");

    isAuthenticated.subscribe(value => {
        user = value;
    });

    onMount(() => { //This method redirect you to "login" if you aren't login.
        if (user.username == "") {
            window.location.href = '/login';
        }
    });

</script>

<h1>Welcome home, { user.username }</h1>