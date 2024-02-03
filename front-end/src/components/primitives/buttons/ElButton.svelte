<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import {handleLoadEventsSignIn} from "../../../stores/loginStore";
    import Loader from "../../shared/Loader.component.svelte";
    export let testid: string = 'not-set'

    export let id: string = 'not-set'

    export let label: string = 'label-not-set'

    export let disabled = false

    export let addCss: string = ''

    const dispatch = createEventDispatcher()

    $: cssClass = (): string => {
        const result = ['']
        if (disabled) {
            result.push('mb-10 w-[300px] rounded-[10px] bg-[#43444A] px-4 py-2 font-bold text-white transition duration-500 ' +
                'ease-in-out hover:bg-[#55565b] flex justify-center align-middle disabled:text-gray-600 disabled:bg-gray-900')
        } else {
            result.push('mb-10 w-[300px] rounded-[10px] bg-[#43444A] px-4 py-2 font-bold text-white transition duration-500 ' +
                'ease-in-out hover:bg-[#55565b] flex justify-center align-middle')
        }
        // addCss will have additional CSS classes
        // we want to apply from where we consume this component
        if ((addCss || '').trim().length > 0) {
            result.push(addCss.trim())
        }
        return result.join(' ')
    }

    function handleClick () {
        // proceed only if the button is not disabled, otherwise ignore the click
        if (!disabled) {
            // dispatch a 'clicked' even through Svelte dispatch
            dispatch('clicked', id)
        }
    }
</script>

<button type="button"
    aria-label={label}
    data-testid={testid}
    disabled={disabled}
    class={cssClass()}
    on:click={() => handleClick()}>
    {label}
</button>

