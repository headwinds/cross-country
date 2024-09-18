import config from "../../../../../../cross-country-config-private";

const PERPLEXITY_API_KEY = config?.PERPLEXITY_API_KEY ?? "";
const perplexityEndpoint = "https://api.perplexity.ai";

const getPerplexityResponse = async (
  question,
  temperature = 0.6,
  elastic = null
) => {
  const url = "https://api.perplexity.ai/chat/completions";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${PERPLEXITY_API_KEY}`, // Fetch from your project's environment variables
  };
  const body = {
    model: "pplx-7b-online",
    stream: false,
    max_tokens: 80,
    temperature, // Adjust for more creative responses
    messages: [
      {
        role: "system",
        content: "Be medieval in your responses.",
      },
      {
        role: "user",
        content: `${question}`,
      },
    ],
  };

  const apiResponse = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const json = await apiResponse.json();

  if (json?.choices && json?.choices.length > 0) {
    const firstMessage = json?.choices[0].message;

    if (firstMessage?.content) {
      const response = firstMessage.content;

      /*
      Elastic search is not necessary for this demo
      if (elastic) {
        const { esClient, esIndex } = elastic;
        await esClient.index({
          index: esIndex,
          body: { question, response },
        });
      }*/

      return response;
    }
  }

  return "";
};

export default getPerplexityResponse;
