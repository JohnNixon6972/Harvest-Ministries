import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className="body">
    <div class="container">
        <header>
            <h1>Contact Us</h1>
            <p>Thank you for visiting our church website. We are delighted to hear from you and welcome your inquiries, suggestions, or any feedback you may have. Please feel free to reach out to us through any of the following methods:</p>
        </header>
        <div class="content">
            <div class="content-form">
                <section>
                    
                    <h2><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i> Address</h2>
                    <p>
                        <h2>Sunday Serive 9:00am</h2>
                    Gogte RangmandirJanata colony,<br/>
                    Kallehol, Camp, Belagavi,<br/>
                    Karnataka 590001, India
                <br/>
                <br/>
                <h2>Church Land</h2>
                Kallehol, Belagavi 591128, <br/>
                Karnataka Kallehol Belagavi India
                    </p>
                </section>

                <section>
                    <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <h2>Phone</h2>
                    <p>+91 9611375677</p>
                </section>

                <section>
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <h2>E-mail</h2>
                    <p>dghdgqd@temporary.net</p>
                </section>
            </div>
        </div>

      <form>
        <div class="form">
            <div class="right">
              <div class="contact-form">
                  <input type="text" required/>
                  <span>Full Name</span>
              </div>
  
              <div class="contact-form">
                  <input type="E-mail" required/>
                  <span>E-mail Id</span>
              </div>
              <div class="contact-form">
                  <textarea name="text">
                    
                  </textarea>
                  <span> Type your Message....</span>
              </div>
  
              <div class="contact-form">
                  <input type="submit" name="submit"/>
              </div>
              </div>
            </div>
         
    </form>
        <div class="media">
            <li><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></li>
            <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
            <li><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li>
        </div>
        <div class="empty">

        </div>
    </div>  
    </div>  
  )
}
