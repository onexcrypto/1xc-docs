import React from 'react';
import { CopyBlock, arta } from "react-code-blocks";

const MyCodeBlock = () => {

    const code = `
        import axios, { AxiosError } from "axios";
        import { config } from "dotenv";
        
        const run = (async () => {
            config();
            let accessKey = process.env['1XC_ACCESS_KEY'];
            let projectId = process.env['1XC_PROJECT_ID'];
        
            let client = new axios.Axios({ baseURL: 'https://sandbox-api.1xcrypto.net/', 
            headers: { 'Authorization': "uat ${'accessKey'}" } });
            client.interceptors.response.use((v) => {
                console.log("Data is ", v.data);
                if (v.data) {
                    let out = JSON.parse(v.data);
                    v.data = out;
                }
                return v;
            });
        
            let intentData = {
                reason: 'Airpods x2',
                amount: 1000,
                currency: 'XOF',
                responseURL: 'http://localhost:3000'
            }
        
            let intent = await client.post(
                projects/payments/intents,
                JSON.stringify(intentData),
                {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
                .then((res) => {
                    let out = res.data;
                    if (out.success) {
                        return out.data;
                    }
                    return undefined;
                })
                .catch((err: AxiosError) => {
                    console.log("Error is ", err);
                    return undefined;
                });
        
            console.log(intent);
        })
        
        run();
        
    `;

    return (
        <>
            <CopyBlock
                text={code}
                language={'typescript'}
                showLineNumbers={true}
                theme={arta}
                codeBlock
                onCopy={() => alert('copied')}
            />;
        </>
    );
};

export default MyCodeBlock;