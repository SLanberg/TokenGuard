<script lang="ts">
    import {enhance} from '$app/forms'
    export let form;

    let thisForm:HTMLFormElement;
</script>

<h2>IMAGE IS HERE</h2>
<form bind:this={thisForm} use:enhance method="post" action="?/signup">
    <div class="form-item">

        <label for="TelegramID">
            Firstname<sup><small>*</small></sup>
            <input class:fieldError={form?.telegramIdUsed} value={form?.telegramID ?? ""} id="telegramID" type="text" name="telegramID" required />
        </label>

        <label for="firstName">
            Firstname<sup><small>*</small></sup>
            <input class:fieldError={form?.weakPassword, form?.passNotMatch} value={form?.password ?? ""} id="password" type="password" name="password" required />
        </label>

        <label for="firstName">
            Firstname<sup><small>*</small></sup>
            <input value={form?.confirmPassword ?? ""} id="confirmPassword" type="password" name="confirmPassword" required />
        </label>
    </div>
</form>