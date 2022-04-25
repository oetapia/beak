const { Configuration, OpenAIApi } = require("openai");
const apiKey = "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"


const configuration = new Configuration({
	apiKey,
});
const openai = new OpenAIApi(configuration);


(async () => {
	try {
		const c = await openai.createCompletion("text-davinci-002", {
			prompt: "create three paragraphs describing the jungle",
			temperature: 0,
			max_tokens: 6,
		})
		console.log(c)

	} catch(err) {
		console.log(err)
	}	
})()
