export const performAIScan = async (text) => {
    const url = "https://api.originality.ai/api/v1/scan/ai";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-OAI-API-KEY': 'xodrg2zq5987kfcsjwimlhtn1by6u3vp',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: text,
                title: "optional title",
                aiModelVersion: "1",
                storeScan: "false"  
            })
        });

        if (!response.ok) {
            throw new Error('Failed to perform AI scan');
        }

        const responseData = await response.json();
        const aiScore = responseData.score;
        console.log('AI Generation Score:', aiScore);
    } catch (e) {
        console.error('Error performing AI scan:', e.message);
        throw e;
    }
  };