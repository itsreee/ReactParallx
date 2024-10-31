import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import { Button } from 'react-bootstrap';
 function App() {
  return (
    <>
      <div>
      <Header/>
    <Parallax pages={4} id='main'>
      {/* Page 1 */}
      <ParallaxLayer speed={1} offset={0} id='parallax1'>
        <h1 style={{ fontSize: "52px", color: '#fff', textAlign: 'center', paddingTop: '50vh' }}>Explore The Shades Of Nature.</h1>
        <div className="content">
          <img  width={'500px'} height={'600px'} src="https://th.bing.com/th/id/OIP.gsunctDg942ebqlcaITxRgHaH0?w=800&h=844&rs=1&pid=ImgDetMain" alt="" />
        <img  width={'500px'} height={'600px'} src="https://th.bing.com/th/id/OIP.Sgz8PMIc5FV_tIZYRS8jEQHaLL?rs=1&pid=ImgDetMain" alt="" />
        </div> 
      </ParallaxLayer>

      {/* Page 2 */}
      <ParallaxLayer speed={1} offset={1} style={{ }} id='parallax2'>
      <h1 className="title">Explore Popular Destinations</h1>
          <div className="contents">
            <img width={'500px'} height={'600px'} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/eiffel-tower-bnw-debbie-fenelon.jpg" alt="Eiffel Tower" />
            <img width={'500px'} height={'600px'} src="https://i0.wp.com/thewanderingcore.com/wp-content/uploads/2018/03/qutub-minar-delhi-india-qutub-minar-in-black-and-white-with-moon-in-sky.jpg?resize=612%2C816&ssl=1" alt="Great Wall of China" />
          </div>
        </ParallaxLayer>     

      {/* Page 3 */}
      <ParallaxLayer speed={1} offset={2} style={{ }} id='parallax3'>
      <h1 className="title">Travel Tips</h1>
          <ul className="tips">
            <li>Packing Essentials</li>
            <li>Safety Tips</li>
            <li>Cultural Etiquette</li>
          </ul>
          <Button style={{marginLeft:'690px',marginTop:'150px'}}>Contact Us</Button>   <ImageSlider />    </ParallaxLayer>

      {/* Page 4 */}
      <ParallaxLayer speed={1} offset={3}  id='parallax4'>
        <div>
        <h1 className="title">Contact Us</h1>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <Button className='' style={{marginTop:"300px"}}>Send Message</Button>
          </form>    
  
        </div>
 
          </ParallaxLayer>
    </Parallax>
  </div>
    </>
  
  );
}

export default App;