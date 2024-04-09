export default async (req, res) => {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const BASE_URL = "https://api.covertkit.com/v3"
        
    const { email } = req.body;
    console.log("reztest email")
    console.log(email)

    if (!email || !email.length){
        console.log("reztest Forgot to add email")
        return res.status(400).json({
            error: "Forgot to add email?",
        });
    }
    try {
        console.log("reztest hit addListMember");
        const url = [BASE_URL, `forms`, FORM_ID, `subscribe`].join('/');
        const data = {
            api_key: API_KEY,
            email: email,
        }

        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            method: 'POST'
        });
        if(response.status == 200){
            return res.status(200).json({error : null});
        }
    }catch(error){
        console.log("reztest something wen wong mush")
        return res.status(400).json({
            error: "Oops, something wen wong mush!"
        });
    };
};