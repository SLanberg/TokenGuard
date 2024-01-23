<script lang="ts">
    import {enhance} from '$app/forms'

    import whaleImage from '../../static/whale.png';
    export let form;

    let thisForm:HTMLFormElement;
</script>

<div class="flex h-screen">
    <div class="bg-[#2e2e3e] m-auto w-[500px] h-[500px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div class="m-auto">
            <img src={whaleImage}
                 class="rounded-full bg-blue-950 p-4 mx-auto mb-10 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
                 alt="Whale Avatar" />
        </div>
    </div>
</div>


<style>
    :global(body) {
        background: linear-gradient(to bottom, #1F232F, #151A26);
        color: #FFFFFF;
        font-family: Inter, ui-serif;
    }

    a {
        text-decoration: none;
        color: white;
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        src: url('../../static/fonts/Inter-Regular.ttf');
    }
</style>