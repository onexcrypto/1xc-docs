/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const RequirementPage = () => {
    return (
        <>
            <h1>Prérequis</h1>
            {/* <br /> */}
            <h3>
                <a className="nav-link" href="#apikeys">
                    # Comment obtenir les clés API 1xpay ?
                </a>
            </h3>
            <p className="lead-2" id='apikeys'>
                Pour commencer à utiliser 1xPay, vous devez envoyez vos informations de contact
                à travers ce formulaire de contact ci-dessous pour obtenir vos clés API 1xpay de test.
            </p>
            <div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Formulaire de contact</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            Veuillez remplir le formulaire ci-dessous pour obtenir vos clés API 1xpay de test.
                        </p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nom de L'entreprise</label>
                                    <input type="text" className="form-control" id="name" placeholder="Nom" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nom du Responsable Technique</label>
                                    <input type="text" className="form-control" id="name" placeholder="Entrez le nom " />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Adresse Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Adresse Email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="country">Pays</label>
                                    <select name="country" id="" className='form-control'>
                                        <option value="">--Choisir un pays--</option>
                                        <option value="TOGO">TOGO</option>
                                        <option value="BENIN">BENIN</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Numéro de Téléphone</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Entrez votre numéro de téléphone" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Website</label>
                                    <input type="text" className="form-control" id="phone" placeholder="entrez l'adresse du callback url" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="phone">Description </label>
                                    <textarea name="" id="" className="form-control" placeholder="Entrez une description de votre application">

                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button className="btn btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default RequirementPage;