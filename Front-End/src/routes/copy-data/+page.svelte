<script lang="ts">
    import {enhance} from '$app/forms'

    import whaleImage from '../../static/whale.png';
    export let form;

    let thisForm:HTMLFormElement;
</script>

<div class="flex h-screen">
    <div class="bg-[#2e2e3e] m-auto w-[500px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div class="m-auto">
            <div id="form-div">
                <img class="p-4 mx-auto mb-10" id="mascot" src={whaleImage} alt="Whale">
                <form id="form-section" bind:this={thisForm} use:enhance method="post" action="?/signup">
                    <div class="w-fit m-auto">
                        <div class="form-item">
                            <div>
                                <label class="text-left text-sm font-medium text-[#B8B8B8]" for="TelegramID">TelegramID</label>
                                <br/>
                                <input readonly
                                class="rounded-[10px]
                                border
                                text-sm
                                block
                                p-2.5
                                bg-[#13161E]
                                border-gray-600
                                placeholder-gray-400
                                text-white
                                focus:ring-[#5a70ec]
                                focus:border-[#5a70ec]
                                outline-none mb-2.5 w-[300px]" class:fieldError={form?.telegramIdUsed} value={form?.telegramID ?? ""} id="telegramID" type="text" name="telegramID" required />
                            </div>

                            <div>
                                <label class="text-left text-sm font-medium text-[#B8B8B8]" for="Password">Password</label>
                                <br/>
                                <input readonly
                                class="rounded-[10px]
                                border
                                text-sm
                                block
                                p-2.5
                                bg-[#13161E]
                                border-gray-600
                                placeholder-gray-400
                                text-white
                                focus:ring-[#5a70ec]
                                focus:border-[#5a70ec]
                                outline-none mb-2.5 w-[300px]" class:fieldError={form?.weakPassword, form?.passNotMatch} value={form?.password ?? ""} id="password" type="password" name="password" required />
                            </div>

                            <div>
                                <label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password">Confirm Password</label>
                                <br/>
                                <input readonly
                                class="rounded-[10px]
                                border
                                text-sm
                                block
                                p-2.5
                                bg-[#13161E]
                                border-gray-600
                                placeholder-gray-400
                                text-white
                                focus:ring-[#5a70ec]
                                focus:border-[#5a70ec]
                                outline-none mb-2.5 w-[300px]" class:fieldError={form?.weakPassword, form?.passNotMatch} value={form?.password ?? ""} id="password" type="password" name="password" required />
                            </div>

                            <div>
                                <label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password">Token</label>
                                <br/>
                                <input readonly
                                        class="rounded-[10px]
                                border
                                text-sm
                                block
                                p-2.5
                                bg-[#13161E]
                                border-gray-600
                                placeholder-gray-400
                                text-white
                                focus:ring-[#5a70ec]
                                focus:border-[#5a70ec]
                                outline-none mb-2.5 w-[300px]" class:fieldError={form?.weakPassword, form?.passNotMatch} value={form?.password ?? ""} id="password" type="password" name="password" required />
                            </div>

                            <div>
                                <label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password">Created At</label>
                                <br/>
                                <input readonly
                                class="rounded-[10px]
                                border
                                text-sm
                                block
                                p-2.5
                                bg-[#13161E]
                                border-gray-600
                                placeholder-gray-400
                                text-white
                                focus:ring-[#5a70ec]
                                focus:border-[#5a70ec]
                                outline-none mb-10 w-[300px]" class:fieldError={form?.weakPassword, form?.passNotMatch} value={form?.password ?? ""} id="password" type="password" name="password" required />
                            </div>

                            <button class="bg-[#43444A]
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-[#55565b]
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded-[10px]
                            w-[300px]
                            mb-10">
                                Sign Up
                            </button>

                        </div>

                    </div>


                </form>
            </div>
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

    p#sign-up {
        text-align: center;
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        /*font-weight: 100;*/
        src: url('../../static/fonts/Inter-Regular.ttf');
    }
</style>