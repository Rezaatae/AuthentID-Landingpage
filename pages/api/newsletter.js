import axios from "axios";

function getRequestParams(email){
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID

    const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1]

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/`

    const data = {
        email_address: email,
        status: "subscribe",
    };

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64ApiKey}`,
    };

    return {
        url,
        data,
        headers,
    };
};

export default async (req, res) => {
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
        const { url, data, headers } = getRequestParams(email);
        const response = await axios.post(url, data, { headers });
        return res.status(201).json({error : null});
    }catch(error){
        console.log("reztest something wen wong mush")
        return res.status(400).json({
            error: "Oops, something wen wong mush!"
        });
    };
};