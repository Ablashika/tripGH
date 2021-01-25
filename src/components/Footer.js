import React, {useEffect} from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can send as an email.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Email Us</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>0240095584</Link>
            <Link to='/'>0241195584</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.instagram.com/abla_shika/">Instagram</a>
            <a target="_blank" href="https://www.instagram.com/abla_shika/">Twitter</a>
            <a target="_blank" href="https://www.instagram.com/abla_shika/">facebook</a>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRIPGH
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRIPGH © 2020</small>
          <div class='social-icons'>
           
            <a target="_blank" href="https://www.instagram.com/abla_shika/"
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'>
            <i class='fab fa-facebook-f' />
            </a>

           

           <a target="_blank" href="https://www.instagram.com/abla_shika/"
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
           >
            <i class='fab fa-instagram' />
            </a>
            <a target="_blank" href="https://www.instagram.com/abla_shika/"
             class='social-icon-link youtube'
             to='/'
             target='_blank'
             aria-label='Youtube'
           >
            <i class='fab fa-youtube' />
            </a>

            
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



export default Footer;
