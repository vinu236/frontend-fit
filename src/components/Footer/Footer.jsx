import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="heading">
        <h2>
          Faraz<sup>™</sup>
        </h2>
      </div>
      <div class="content">
        
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/vinu236">
               Github
            </a>
          </p>
          <p>
            <a href="#">
             Facebook
            </a>
          </p>
          <p>
            <a href="https://instagram.com/vinayak._23?igshid=OGQ5ZDc2ODk2ZA==">
           Instagram
            </a>
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Blogs</a>
          </p>
          <p>
            <a href="/plan">Plans</a>
          </p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Puthathukuzhiyil House Chengannur
          </p>
          <h4 class="mobile">Mobile</h4>
          <p>
            <a href="#">+91 6238777237</a>
          </p>
          <h4 class="mail">Email</h4>
          <p>
            <a href="#">ajithvinu23@gmail.com</a>
          </p>
        </div>
      </div>
      <footer className="pb-3"> 
        <hr className="bg-custom-gym" /> © 2023 ajithvinu23@gmail.com.
      </footer>
    </div>
  );
};

export default Footer;
