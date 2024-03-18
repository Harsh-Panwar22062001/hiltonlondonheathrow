import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* Social links section */}
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        {/* Social icons */}
        <div className='socion'>
          <a href='https://www.facebook.com/hiltonnewsroom/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.youtube.com/user/hiltonworldwide' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a href='https://www.instagram.com/hiltonnewsroom/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/hilton/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Column 1: About */}
            <MDBCol md="6" lg="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Hilton London Heathrow Airport
              </h6>
              <p>
                With more than one million rooms worldwide, we’re one of the largest hospitality companies in the world. See how our success can help drive yours.
              </p>
            </MDBCol>

         
            <MDBCol md="6" lg="3" className='mx-auto mb-4  '>
              <h6 className='text-uppercase fw-bold mb-4 '>Products</h6>
              <div className='colnum'>
              <p>
                <a href='#!' className='text-reset'>
                  Hotel
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Restaurant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Parking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shopping Complex
                </a>
              </p>

              </div>
      
           
            </MDBCol>

           
            <MDBCol md="6" lg="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>

          <div className='colnum'>

          <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>

          </div>
             
            </MDBCol>

            
            <MDBCol md="6" lg="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className='colnum-io'>

              <p>
                <MDBIcon icon="home" className="me-2" />
                Singapore
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>

              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

     
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://www.hilton.com/en/'>
          Hilton London Heathrow Airport
        </a>
      </div>
    </MDBFooter>
  );
}
