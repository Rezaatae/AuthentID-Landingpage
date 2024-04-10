export default async (req, res) => {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const BASE_URL = process.env.CONVERTKIT_BASE_URL

    const { email } = req.body;

    if (!email || !email.length){
        return res.status(400).json({
            error: "Forgot to add email?",
        });
    }
    try {
        const url = `${BASE_URL}forms/${FORM_ID}/subscribe`
        const data = { email, api_key: API_KEY };

        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });
        if(response.status >= 400){
            return res.status(400).json({
                error: "Oops, something went wrong"
            });
        }
        return res.status(201).json({error : null});
    }catch(error){
        return res.status(400).json({
            error: error.message || error.toString()
        });
    };
};