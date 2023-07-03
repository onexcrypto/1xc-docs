import React from 'react';
import { CopyBlock, hybrid } from "react-code-blocks";

const InstallationPage = () => {
    const code = `npm install onexpay-js`;
    const yarnCode = `yarn add onexpay-js`;

    const usageCode = `
    import { Onexc } from "onexcpay-js";
    function App() {
        const onexcpay = ()=>{
            Onexc.gateway.launch({
                mode: "test",
                apiKey: "pb_-QDD6x0KeTSIxsGHJXU3O.pr_kqDMuejX2QzdL39aydt3G",
                intentId: "hello world",
            });
        }
        return (
            <div className="App">
                <button onClick={() =>onexcpay()}>
                    Pay now
                </button>
            </div>
        );
    }
    export default App;
    `;

    return (
        <>
            <h1>Installation du package 1xPay</h1>
            <p>
                Le package 1xPay est un module JavaScript qui vous permet d'intégrer facilement la fonctionnalité de paiement de 1xPay dans votre application React. Pour commencer, vous devez installer le package à l'aide de npm ou yarn.
                Vous pouvez installer le package 1xPay en utilisant npm ou yarn. Voici les commandes pour chaque méthode :
            </p>

            <h3># Installation avec npm</h3>
            <CopyBlock
                text={code}
                language={'bash'}
                showLineNumbers={true}
                theme={hybrid}
                codeBlock
                onCopy={() => alert('copied')}
            />;

            <h3># Installation avec yarn</h3>
            <CopyBlock
                text={yarnCode}
                language={'bash'}
                showLineNumbers={true}
                theme={hybrid}
                codeBlock
                onCopy={() => alert('copied')}
            />;

            <h3># Utilisation du package 1xPay</h3>
            <p>
                Pour utiliser le package 1xPay, vous devez importer le module Onexc et appeler la méthode launch() de l'objet gateway.
                La méthode launch() prend un objet de configuration en paramètre.
                Voici un exemple de code pour utiliser le package 1xPay :
            </p>

            <CopyBlock
                text={usageCode}
                language={'tsx'}
                showLineNumbers={true}
                theme={hybrid}
                codeBlock
                onCopy={() => alert('copied')}
            />;
        </>
    )
};

export default InstallationPage;