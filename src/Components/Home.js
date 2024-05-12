import React from 'react'
import './Home.css'
function Home() {

  const testimonial=[
    {
    id:1,
    image:'/Images/p2.png',
    name:'James Young',
    Text:"Jiachilie's chatbot is like having a supportive friend in my pocket. It's there whenever I need a listening ear and offers practical advice that's helped me manage my anxiety better."
  },
  {
    id:2,
    image:'/Images/p3.png',
    name:"Tiny Jane ",
    Text:'Booking therapy sessions through Jiachilie is effortless, and the therapists are top-notch Ive already noticed positive changes in my mental health since starting sessions.',
    
  },
  {
    id:3,
    image:'/Images/p2.png',
    name:'Lovely Jess',
    Text:"Jiachilie's community events are a breath of fresh air. Connecting with others who understand what I'm going through has been invaluable on my journey to better mental well-being"
  },
  ]
  return (
    
<div>
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ color: '#e4a3d4 '}}>Welcome to jiachilie</h1>
    <p>Your trusted companion on your journey to mental well-being</p>
    <ul>
      <li>Community Events </li>
      <li>Therapy Sessions </li>
      <li>ChatBot support </li>
    </ul>
  </div>
  <div style={{ width: '50%' }}>
    {/* Add your image here */}
    <img src="/Images/Pic1.jpeg" alt="jiachilie" style={{ width: '100%' }} />
  </div>
</div>

  <div className='about'>
        <h2>About Us</h2>
        {/* Add your about us content here */}
        <h1>Mission</h1>
       
       <p>At Jiachilie, we believe that everyone deserves access to support 
         resources to enhance their mental health. Our mission is to provide
          a safe, welcoming space where individuals can find comfort, guidance, 
          and empowerment on their path to emotional wellness..</p>
      <h1> Approach </h1>
      <p>
      We understand that seeking support for mental health can be daunting, 
      which is why we've created Jiachilie as a user-friendly platform that 
      combines cutting-edge technology with compassionate human touch. Our 
      chatbot is here to lend a listening ear, offer guidance, and connect 
      you with the resources you need. Whether you're navigating daily stressors or facing more complex 
      challenges, we're here to support you every step of the way.
      </p>
      </div>
      </div>
      <div className='testi'>
        <h2>Testimonials</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Add your testimonial cards here */}
          {testimonial.map((testimonial) => (
        <div key={testimonial.id}>
          <img src={testimonial.image} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.Text}</p>
        </div>
      ))}
        </div>
      </div>
      <div>

  <div className='contact'>
  <h2>Contact Us</h2>
  <div class="contact-details">
    <div class="contact-row socials">
      <h3>Socials</h3>
      <ul>
        <li>Twitter: @Jiachilie</li>
        <li>Facebook: Jiachilie</li>
        <li>Instagram: @Jiachilie</li>
      </ul>
    </div>
    <div class="contact-row location">
      <h3>Location</h3>
      <p>123 Nairobi, Mental Health City, MH 5432, Kenya</p>
    </div>
    <div class="contact-row contact-info">
      <h3>Contact</h3>
      <ul>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Email: contact@jiachilie.com</li>
      </ul>
    </div>
  </div>
</div>
</div>
     

      
    </div>
 
  
  )
}

export default Home