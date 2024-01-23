<script lang="ts">
	import { enhance } from '$app/forms';

	import whaleImage from '../../static/whale.png';
	import eye_white from '../../static/eye_white.png';
	export let form;

	let thisForm: HTMLFormElement;
</script>

<div class="flex h-screen">
	<div class="m-auto w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
		<div class="m-auto">
			<div id="form-div">
				<img class="mx-auto mb-10 p-4" id="mascot" src={whaleImage} alt="Whale" />
				<form id="form-section" bind:this={thisForm} use:enhance method="post" action="?/signup">
					<div class="m-auto w-fit">
						<div class="form-item">
							<div>
								<label class="text-left text-sm font-medium text-[#B8B8B8]" for="TelegramID"
									>TelegramID</label
								>
								<br />
								<input
									class="mb-2.5
                                block
                                w-[300px]
                                rounded-[10px]
                                border
                                border-gray-600
                                bg-[#13161E]
                                p-2.5
                                text-sm
                                text-white
                                placeholder-gray-400
                                outline-none focus:border-[#5a70ec] focus:ring-[#5a70ec]"
									class:fieldError={form?.telegramIdUsed}
									value={form?.telegramID ?? ''}
									id="telegramID"
									type="text"
									name="telegramID"
									required
								/>
							</div>

							<div>
								<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Password"
									>Password</label
								>
								<br />
								<input
									class="mb-2.5
                                block
                                w-[300px]
                                rounded-[10px]
                                border
                                border-gray-600
                                bg-[#13161E]
                                p-2.5
                                text-sm
                                text-white
                                placeholder-gray-400
                                outline-none focus:border-[#5a70ec] focus:ring-[#5a70ec]"
									class:fieldError={(form?.weakPassword, form?.passNotMatch)}
									value={form?.password ?? ''}
									id="password"
									type="password"
									name="password"
									required
								/>
								<button class="relative float-right -mt-[41px] mr-2"
									><img src={eye_white} alt="see password" /></button
								>
							</div>

							<div>
								<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password"
									>Confirm Password</label
								>
								<br />
								<input
									class="mb-5
                                block
                                w-[300px]
                                rounded-[10px]
                                border
                                border-gray-600
                                bg-[#13161E]
                                p-2.5
                                text-sm
                                text-white
                                placeholder-gray-400
                                outline-none focus:border-[#5a70ec] focus:ring-[#5a70ec]"
									class:fieldError={(form?.weakPassword, form?.passNotMatch)}
									value={form?.password ?? ''}
									id="password"
									type="password"
									name="password"
									required
								/>
								<button class="relative float-right -mt-[51px] mr-2"
									><img src={eye_white} alt="see password" /></button
								>
							</div>

							<button
								class="mb-10
                            w-[300px]
                            rounded-[10px]
                            bg-[#43444A]
                            px-4
                            py-2
                            font-bold
                            text-white
                            transition
                            duration-500
                            ease-in-out
                            hover:bg-[#55565b]"
							>
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
</style>
