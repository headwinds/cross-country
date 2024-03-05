function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to chain API requests in series
async function runApiRequestsInSeries(apiEndpoints) {
  const results = [];
  for (const previewUrl of apiEndpoints) {
    try {
      const result = await fetchTitleFromUrl(previewUrl);
      if (JSON.parse(result)) {
        const title = JSON.parse(result).title;
        console.log("title: ", title);
        results.push(title);
      }
      await sleep(5000);
    } catch (err) {
      console.log("err: ", err);
    }

    // Optionally, you can handle each result here or perform additional logic
  }
  return results;
}

// Execute the function and handle all results after completion
/*runApiRequestsInSeries(urls)
            .then((allResults) => {
              console.log("All API requests completed", allResults);
            })
            .catch((error) => {
              console.error("An error occurred during API requests", error);
            });*/

// weird logs as mant! not many
// "Too mant requests" - Unexpected token 'T', "Too mant requests" is not valid JSON
// "Unprocessable Entity"
