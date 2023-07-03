import React from 'react';
import MyCodeBlock from '../components/widgets/MyCodeBlock';

const AuthenticatePage = () => {
    return (
        <>
            <h1>Authentification</h1>
            {/* Section Objectifs */}
            <h3>
                <a className="nav-link" href="#objectifs">
                    # Objectifs
                </a>
            </h3>
            <div id="objectifs">
                <p>
                    L'objectif de cette section est de vous expliquer les objectifs de l'authentification avec 1xPay.
                </p>
                <p>Voici les principaux objectifs :</p>
                <ul>
                    <li>Obtenir un token d'authentification pour accéder aux fonctionnalités de paiement de 1xPay.</li>
                    <li>Assurer la sécurité des transactions et des informations sensibles.</li>
                </ul>
                <p>
                    Pour en savoir plus sur les fonctionnalités de 1xPay et la manière d'utiliser le token d'authentification, veuillez consulter la documentation officielle de 1xPay à l'adresse <a href="https://1xcrypto.net">https://1xcrypto.net</a>.
                </p>

                {/* Section Obtenir un token d'authentification */}
                <h3># Générer une intention de paiment </h3>
                <p>
                    Pour obtenir un token d'authentification, vous devez suivre les étapes suivantes :
                </p>
                <ol>
                    <li>
                        Obtenez votre clé d'accès (access key) et votre ID de projet (project ID) auprès de 1xPay.
                    </li>
                    <li>
                        Effectuez une requête d'authentification à l'API de 1xPay en utilisant les informations d'authentification.
                    </li>
                    <li>
                        Si l'authentification est réussie, l'API de 1xPay renverra un token d'authentification.
                    </li>
                </ol>
            </div>

            <p>Voici un exemple de code pour effectuer la requête d'authentification en utilisant la bibliothèque `axios` :</p>
            <div className="code-toolbar">
                {/* <pre className=' line-numbers '>
                    <code className=''>
                        {`
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
                        `}
                    </code>
                </pre> */}
                <MyCodeBlock />
                
            </div>

            
        </>
    );
};

export default AuthenticatePage;
