export const performURLScan = async (text) => {
    const url = "https://api.originality.ai/api/v1/scan/url";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-OAI-API-KEY': 'xodrg2zq5987kfcsjwimlhtn1by6u3vp',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: text,
            })
        });

        if (!response.ok) {
            throw new Error('Failed to perform URL scan');
        }

        const responseData = await response.json();
        
        const results = {
            aiScore: responseData.score.ai,
            humanScore: responseData.score.original,
        }

        return results;
        
    } catch (e) {
        console.error('Error performing AI scan:', e.message);
        throw e;
    }
  };