import React from 'react';
import logo from './assets/logo.png';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import './App.css';
import $ from 'jquery';
import { Card } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import CarouselComponent from './component/carousel0/carousel.component';
import MyCard from './card-component/card';
import { FaArrowCircleUp } from 'react-icons/fa';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import au_logo from './assets/trusted_logo.png';
import au_logo1 from './assets/imgpsh_fullsize_anim.png';
import foodc1s4_1 from './assets/c1s4/index11.jpg';
import foodc1s4_2 from './assets/c1s4/index3.jpg';
import foodc1s4_3 from './assets/c1s4/index4.jpg';
import foodc1s4_4 from './assets/c1s4/index7.jpg';
import foodc1s4_5 from './assets/c1s4/index2.jpg';
import foodc1s4_6 from './assets/c1s4/index8.jpg';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: []
  //   }
  //   this.loginClick = this.loginClick.bind();
  // }

  render() {
     return (
        <div className="homepage_container">
           <Header/>
           <Footer />
           <ScrollArrow />
        </div>
     );
  }
}
const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)
  var auImg = document.getElementById("aboutUs")

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    } else if ( auImg && window.pageYOffset > 1200 && window.pageYOffset < 3000 ) {
      $(".auc_fixed_img").css('backgroundImage', "url('https://websitedemos.net/alex08/wp-content/uploads/sites/194/2018/05/bg-img-03-free-img.jpg')")
    } else if ( auImg && window.pageYOffset > 3000 ) {
      $(".auc_fixed_img").css('backgroundImage', "url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/01/Prepare-dish-image.jpg')")
    } else if ( auImg  && window.pageYOffset < 1200 ) {
      $(".auc_fixed_img").css('backgroundImage', "url('https://websitedemos.net/restro-02/wp-content/uploads/sites/194/2018/05/bg-img-04-free-img.jpg')")
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{color: '#1bddad',display: showScroll ? 'flex' : 'none'}}/>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
       data: 'Initial data...'
    }
    this.foodClick = this.foodClick.bind(this);
    this.navFunction = this.navFunction.bind(this);
    this.ncloseClick = this.ncloseClick.bind(this);
    this.aboutusClick = this.aboutusClick.bind(this);
    this.aboutusClick = this.aboutusClick.bind(this);
    this.linkClick = this.linkClick.bind(this);
    this.loginClick = this.loginClick.bind();
  };

  foodClick() {
    alert("sdf");
  }
  
  navFunction() {
    $(".slide_nav").slideDown("slow");
  }

  ncloseClick() {
    $(".slide_nav").slideUp("slow");
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  aboutusClick(e) {
    console.log(e.target);
  }

  linkClick() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  loginClick() {
    // $(".header_header, .footer").css('display', 'none');
  }


  render() {
    return (
      <Router>
        <div className="header_header">
        <div className="slide_nav">
          <div id="nClose" className="close" onClick={this.ncloseClick}>&times;</div>
          <a href="#" onClick={this.ncloseClick}><div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '85px'}}><img id="nLogo" src={logo} className="App-logo" alt="logo" style={{cursor: 'pointer'}}/></div></a>
          
          <Link className = "link" to="/" onClick={this.linkClick}>
            <div className="ncategory" onClick={this.ncloseClick}> FOOD</div>
          </Link>
          <Link className = "link" to="/aboutus" onClick={this.linkClick}>
            <div className="ncategory" onClick={this.ncloseClick}>ABOUT US</div>
          </Link>
          <Link className = "link" to="/login" onClick={this.linkClick}>
            <div className="ncategory" onClick={this.ncloseClick}>JOIN/LOGIN</div> 
          </Link>
          <div className="ncategory" onClick={this.ncloseClick}>MY CARD</div> 
        </div>
          <header className="App-header">
            <div className="header_container">
              <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}  onClick={this.linkClick}><img src={logo} className="App-logo" alt="logo" style={{cursor: 'pointer'}} /></div>
              <div id="myTopnav" className="header_category topnav">
                  <Link className = "link" to="/" onClick={this.linkClick}>
                    <div id="category1" className="category" onLoad={this.foodClick}>
                      FOOD 
                      {/* <div id="round1" className="under_round"></div> */}
                    </div>
                  </Link>
                  <Link className = "link" to="/aboutus" onClick={this.linkClick}>
                    <div id="category2" className="category" onClick={this.aboutusClick}>
                      ABOUT US 
                      {/* <div id="round2" className="under_round"></div> */}
                    </div>
                  </Link>
                  <Link className = "link" to="/login" onClick={this.linkClick}>
                    <div id="category3" className="category" onClick={this.loginClick}>
                      JOIN/LOGIN 
                      {/* <div id="round3" className="under_round"></div> */}
                    </div>
                  </Link>
                  <a href="" className="icon" onClick={this.navFunction}>
                    <i className="fa fa-bars"></i>
                  </a>
              </div>
              <Link className = "link" to="/card" onClick={this.linkClick}>
                <div className="category">
                  <i className="fas my_card">&#xf217;</i><span className = "card_number">(0)</span>
                </div>
              </Link>
              <a id="after_nav" href="#" className="icon" onClick={this.navFunction}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </header>
        </div>
        <Switch>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/card">
            <MyCard />
          </Route>
          <Route path="/">
            <Food />
          </Route>
        </Switch>
      </Router>
    );
  }
}
class Food extends React.Component {
  render() {
     return (
      <div className = 'content_content'>
        <div className="fixed_img"></div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
     );
  }
}
class Section1 extends React.Component {
  render() {
     return (
      <div className = 'section1'>
        <div className = "zip_container">
          <div className = "zipc_c">
            <MDBBtn className = "zip_btn">Shop now</MDBBtn>
            <MDBInput className = "zip_in" label="Enter Zip code" style = {{height: '100%', display: 'flex', alignItems: 'center', border: 'none', position: 'absolute', boxShadow: '0 0 0 0', fontSize: '24px'}} />
          </div>
        </div>
        <CarouselComponent />
      </div>
     );
  }
}
class Section2 extends React.Component {
  render() {
     return (
      <div className = 'section2'>
        <div className = "welcome_text">
          <h1 className = "wel_title">Welcome to Plate-X food delivery</h1>
          <p className = "detail_text">Food Delivery is the best way to find local restaurants that deliver to you or quickly order food online . Whether looking for breakfast, lunch, dinner or late night snack, we have it all.</p>
        </div>
        <CarouselComponent1 />
      </div>
     );
  }
}
class CarouselComponent1 extends React.Component {
  render() {
     return (
      <div className = 'carousel1_container'>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content">
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><div className="carousel_price">50.4$</div><img className="carousel1_img" src="https://livedemo00.template-help.com/wt_62172/images/index-3-1008x585.jpg"></img></div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><div className="carousel_price">34.5$</div><img className="carousel1_img" src="https://livedemo00.template-help.com/wt_62172/images/index-2-1008x585.jpg"></img></div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><div className="carousel_price">44.8$</div><img className="carousel1_img" src="https://livedemo00.template-help.com/wt_62172/images/index-1-1008x585.jpg"></img></div>
          </div>
        </figure>
      </div>
     );
  }
}
class Section3 extends React.Component {
  render() {
     return (
      <div className = 'section3'>
      <div className="menu_text">Our menu</div>
        <div className = "card_container">
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title className="food_name">Doner Wrap</Card.Title>
            </Card.Body>
            <Card.Img variant="top" className="card_img card_img1" src="https://anitahendrieka.com/wp-content/uploads/2019/04/pad-thai-4034040_960_720.jpg"  />
          </Card>
        </div>
      </div>
     );
  }
}
class Section4 extends React.Component {
  render() {
     return (
      <div className = 'section4'>
        <div className="service_text">Our service</div>
        <div className = "card_container1">
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_1}  />
          </Card>
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_2}  />
          </Card>
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_4}  />
          </Card>
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_5}  />
          </Card>
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_3}  />
          </Card>
          <Card className="card1">
            <Card.Body>
              {/* <Card.Title className="food_name">Doner Wrap</Card.Title> */}
            </Card.Body>
            <Card.Img variant="top" className="card1_img card1_img1" src={foodc1s4_6}/>
          </Card>
        </div>
        <div className="btn_center">
          <MDBBtn className="show_btn">Show more <i className='fas fa-angle-double-right'></i></MDBBtn>
        </div>
      </div>
     );
  }
}

class Aboutus extends React.Component {
  render() {
     return (
      <div id="aboutUs" className = 'aboutus_content'>
        <div id="fixedImg" className = 'auc_fixed_img'></div>
        <h1 className = 'aboutus_title'>ABOUT</h1>
        <div className = 'au_few_words'>
          <div className = 'au_few_logo'>
            <img className = "aufl_img" src = "https://websitedemos.net/restaurant-04/wp-content/uploads/sites/194/2020/02/image-01-free-img.png"></img>
          </div>
          <div className = 'au_few_content'>
            <div className = 'aufc_title'>A Few Words About Our Plate-X</div>
            <div className = 'aufct_line'></div>
            <div className = 'aufc_detail'>Our Plate-X is the website that is user friendly. In other words, visiting this Plate-X you can choose and order the foods and fruits that you like, it is the important advantage that you can easily visit and find foods, the price is cheap and the delivery is kindness and fast. Please visit a lot. Thanks. </div>
          </div>
        </div>
        <div className = 'au_story'>
          <div className = 'au_story_bg'></div>
          <div className = 'au_story_logo'></div>
          <div className = 'au_few_content'>
            <div className = 'aufc_title'>Our Story And How It All Started</div>
            <div className = 'aufct_line'></div>
            <div className = 'aufc_detail'>Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.</div>
          </div>
        </div>
        <div className = 'au_story'>
          <div className = 'au_few_content'>
            <div className = 'aufc_title' style = {{paddingBottom: '150px'}}>
              <img className = "au_logo" src = {au_logo}></img>
              <img className = "au_logo" src = {au_logo1} style = {{marginLeft: '180px', width: 'auto'}}></img>
            </div>
            {/* <div className = 'aufc_title'>
              <img className = "au_logo1" src = {au_logo1} style = {{marginTop: '50px'}}></img>
            </div> */}
            {/* <div className = 'aufct_line'></div> */}
            <div className = 'aufc_carousel'>
              {/* <CarouselComponent3 /> */}
            </div>
          </div>
        </div>
        <h1 className = 'aboutus_title'>CONTACT</h1>
        <div className = '' style={{paddingBottom: '0px'}}>
              <ContactComponent />
        </div>
        <div className="phone_container">
          <div className='phone_center'>
            {/* <MDBIcon icon="blender-phone" className = "phone_icon" /> */}
            <img src='https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/old-typical-phone.png'></img>
          </div>
          <div className = "react_us">You can reach us</div>
          <div className = 'phone_num'>+1 123 456 7890</div>
        </div>
      </div>
     );
  }
}
class ContactComponent extends React.Component {
  render () {
    return (

      <section className="my-5 contact_container">
      <MDBRow style={{display:'block'}}>
        <MDBCol lg="12" className="lg-0 mb-4" style = {{display: 'block'}}>
          <MDBCard className = "mdb_card" style = {{width: 'auto', height: 'auto', display: 'block', boxShadow: 'none'}}>
            {/* <h3 className = "write_title" style={{display:'block'}}>Please write us, we are ready to response.</h3> */}
            <MDBCardBody>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  style={{minHeight: '200px'}}
                />
              </div>
              <div className="text-right">
                <MDBBtn style = {{width: '300px', fontSize: '24px'}} color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="12">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          {/* <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow> */}
        </MDBCol>
      </MDBRow>
    </section>
    );
  }
}
class Login extends React.Component {
  constructor () {
    super ();
    this.state = {
      data: []
    }
    this.signupViewClick = this.signupViewClick.bind(this);
    this.loginViewClick = this.loginViewClick.bind(this);
  }

  signupViewClick() {
    $("#loginContainer").hide('show');
    $("#signupContainer").show('show');
  }

  loginViewClick() {
    $("#loginContainer").show('show');
    $("#signupContainer").hide('show');
  }

  render() {
     return (
      <div className = 'login_content'>
        <div className = 'dark_background'></div>
        <div>
          <div id = 'loginContainer'>
            <div className = 'ls_container'>
              <div className = 'login_container'>
                <h1 className = 'login_title'>Welcome back</h1>
                <MDBCard className = 'login_main' style = {{boxShadow: 'none'}}>
                  <MDBCardBody>
                    <MDBInput 
                      icon="user"
                      label = 'User Name / Mail'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="key"
                      label = 'Password'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                  </MDBCardBody>
                  <div className = 'forget_title'>Forgot password?</div>
                  <div>
                    <MDBBtn className = 'login_btn'>Log in</MDBBtn>
                    {/* <MDBBtn className = 'face_btn'>Connect with Facebook</MDBBtn> */}
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                      <h2 className = 'signup_title1' onClick = {this.signupViewClick}>SIGN UP</h2>
                    </div>
                  </div>
                </MDBCard>
              </div>
              <div className = 'signup_container'>
                  <div>
                  <h1 className = 'new_here'>New here?</h1>
                  <h4 className = 'new_content' style = {{marginTop: '30px'}}>Sign up and discover thousands of great products!</h4>
                  <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <h2 className = 'signup_title' onClick = {this.signupViewClick}>Sign up</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id = 'signupContainer'>
            <div className = 'ls_container'>
              <div className = 'signup_container1'>
                  <div>
                  <h1 className = 'new_here'>Do you have?</h1>
                  <h4 className = 'new_content' style = {{marginTop: '30px'}}>Log in and select your products for a healthier life</h4>
                  <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <h2 className = 'signup_title' onClick = {this.loginViewClick}>Log in</h2>
                  </div>
                </div>
              </div>
              <div className = 'login_container1'>
                <h1 className = 'login_title'>Create account</h1>
                <MDBCard className = 'login_main' style = {{boxShadow: 'none'}}>
                  <MDBCardBody>
                    <MDBInput 
                      icon="user"
                      label = 'User Name'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="envelope"
                      label = 'Mail'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="unlock-alt"
                      label = 'Password'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="lock"
                      label = 'Confirm'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="phone-alt"
                      label = 'Phone Number'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                    <MDBInput 
                      icon="question-circle"
                      label = 'Verification code'
                      iconClass = 'grey-text'
                      type = 'text'
                    />
                  </MDBCardBody>
                  <div>
                    <MDBBtn className = 'login_btn'>Sign up</MDBBtn>
                    {/* <MDBBtn className = 'face_btn'>Connect with Facebook</MDBBtn> */}
                    <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
                      <h2 className = 'signup_title1' onClick = {this.loginViewClick}>LOG IN</h2>
                    </div>
                  </div>
                </MDBCard>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
class Footer extends React.Component {
  render() {
     return (
      <div className = 'footer'>
        <div className = "footer_container">
          <div className = "left">
            Copyright@2020 PLATE-X <br></br>
            Contact: 4702631970
          </div>
          <div className = "right">
            [ Privacy Policy ]  &  [ Terms of Use ] <br></br>
            Email: postmaster@plate-x-com
          </div>
        </div>
      </div>
     );
  }
}
export default App;