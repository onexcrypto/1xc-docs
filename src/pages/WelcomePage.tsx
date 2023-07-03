/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const WelcomePage = () => {
    return (
        <>
            <h1>Introduction</h1>
            {/* <br /> */}
            <h3><a className="nav-link" href="#why"># Qu'est-ce que 1xPay</a></h3>
            <p className="lead-2" id='why'>
                1xpay est une passerelle de paiement en ligne et hors ligne conçue pour résoudre le problème
                récurrent de la collecte des paiements en ligne des petits et moyens commerçants ouest africains
                dont la digitalisation est de plus en plus essentielle. Il s'agit d'une plateforme de paiement numérique
                qui permet aux commerçants de collecter des paiements web/mobiles via 1XPOS/1XCARD ou par des transferts 
                de portefeuille à portefeuille entre utilisateurs de 1xpay.
            </p>
            <a href="https://1xcrypto.net">
                En savoir plus sur 1xPay
            </a>
            {/* <img src="/assets/img/onexcard.png" alt="" width={450} height={350} /> */}
            <br />
            <h3><a className="nav-link" href="#objectifs"># Objectifs</a></h3>
            <p className="lead-2" id='objectifs'>
                1xpay a pour objectif de faciliter la collecte des paiements en ligne et hors ligne des commerçants,
                de permettre aux utilisateurs de 1xpay de faire des achats en ligne et hors ligne, de permettre aux
                utilisateurs de 1xpay de faire des transferts de portefeuille à portefeuille, de permettre aux utilisateurs
                de 1xpay de faire des retraits d'argent dans les points de vente 1xpay, de permettre aux utilisateurs de 1xpay
                d'effectuer leurs divers transactions financières en toute sécurité et qualité.
            </p>
        </>
    )
};

export default WelcomePage;