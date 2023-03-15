/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MDBFooter  , MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./App.css";
export default function App() {
  return (
    <MDBFooter   className='text-center text-lg-start text-muted'>
      <section className='border-bottom'>
      </section>

      <section className='foot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Brownies
              </h6>
              <p className='ddd'>
              Brownies Patissier Is One Of The Most Famous Sweet Shops In The Arab World
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className=' sss'>
                  oriental
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  gateau
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  bakery
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  about us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <a href='#!' className=' sss'>
                  contact
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  menu
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  Orders
                </a>
              </p>
              <p>
              <a href='#!' className=' sss'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className=' sss'>
                <MDBIcon icon="home" className="me-2" />
                Egypt Sharkia Zagazig
              </p>
              <p className=' sss'>
                <MDBIcon icon="envelope" className="me-3" />
                sayedosama088@gmail.com
              </p>
              <p className=' sss'>
                <MDBIcon icon="phone" className="me-3" /> + 02 01210304516
              </p>
              <p className=' sss'>
                <MDBIcon icon="print" className="me-3" /> + 02 01030608819
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='sss text-center p-4 '>
        © 2023 Copyright: 
        <a className='aaa fw-bold' href='#'>
           sayed osama
        </a>
      </div>
    </MDBFooter>
  );
}