import React, { Component } from 'react';

import ContactHeader from './../img/contact.png';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: 'url(' + ContactHeader + ')', backgroundPosition: 'center', backgroundSize: 'cover' }} data-bs-parallax-bg='true' id='contato'>
          <h1 className='text-white' id='bottom-titles'>Contato</h1>
        </div>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              <div className='col-md-6 col-lg-6 item' data-aos='fade-up'>
                <div className='box'>
                  <i className='fa fa-whatsapp icon'></i>
                  <h3 className='name'>Whatsapp</h3>
                  <a href='https://api.whatsapp.com/send?phone=5582996598159&text=Olá,%20Luccas!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank'>Luccas Augusto</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 item' data-aos='fade-up'>
                <div className='box'>
                  <i className='fa fa-envelope-o icon'></i>
                  <h3 className='name'>E-mail</h3>
                  <a href='mailto:engapplabs@gmail.com?cc=luccas@engapp.com.br&subject=Contato:&body=Olá!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank'>engapplabs@gmail.com</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;