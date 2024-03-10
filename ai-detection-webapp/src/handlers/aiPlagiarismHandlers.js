export const performAIPlagiarismScan = async (text) => {
    const url = "https://api.originality.ai/api/v1/scan/ai-plag";

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
            throw new Error('Failed to perform AI & Plagiarism scan');
        }

        const responseData = await response.json();

        const results = {
            aiScore: responseData.ai.score.ai,
            humanScore: responseData.ai.score.original,
            plagiarismScore: responseData.plagiarism.total_text_score,
        }

        return results;
    } catch (e) {
        console.error('Error performing AI & Plagiarism scan:', e.message);
        throw e;
    }
  };