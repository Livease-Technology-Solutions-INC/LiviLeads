import React from "react";
class Photography extends React.Component{
    
    render(){
        return(

    <div class="site-content">
        <header class="site-header default-header-style">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="navigation-area">
                            <div class="header-navigation-left">
                               
                                <div class="site-branding">
                                    <a href="index.html">
                                        <img src="assets/images/logo/loogg.png"  style="height: 40px; width: 120px;" alt="Site Logo" />
                                    </a>
                                </div>
                                <div class="header-search-form">
                                    <form action="#">
                                        <input type="search" placeholder="What are you looking for?" />
                                        <button type="submit"><span class="icon-search32"></span></button>
                                    </form>
                                </div>
                                <div class="mobile-element-meta">
                                    <div class="search-wrap">
                                        <div class="search-btn">
                                            <span class="icon-search32"></span>
                                        </div>
                                        <div class="search-form">
                                            <form action="#">
                                                <input type="search" placeholder="Search" />
                                                <button type="submit"><span class="icon-search32"></span></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="mobile-user-registration"></div>
                                </div>
                            </div>

                            <div class="header-navigation-right-area">  
                            
                                <div class="site-navigation">
                                    <div class="hamburger-menus">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <nav class="navigation">
                                        <div class="overlaybg"></div>
                                          
                                        <div class="menu-wrapper">
                                            <div class="menu-content">
                                                <ul class="mainmenu">         
                                                    <li>
                                                        <a href="#">Home</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="index.html">Home </a></li>  
                                                        </ul>
                                                    </li>        
                                                    <li>
                                                        <a class="" href="#">Services</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="#">Wedding Photography   </a></li>
                                                            <li><a href="#"> Event Photography</a></li>
                                                            <li><a href="#"> Portrait Photography</a></li>
                                                            <li><a href="#">  Fine Art Photography</a></li>
                                                            <li><a href="#"> Architectural Photography</a></li>
                                                            <li><a href="#"> Travel Photography</a></li>
                                                        </ul>
                                                    </li>                                   
                                                </ul> 
                                            </div> 
                                        </div>
                                    </nav>
                                </div>

                                <div class="header-navigation-right">
                                    <div class="user-registration-area">
                                        <a class="user-reg-btn" href="#">
                                            <span class="icon icon-user-1"></span>
                                            <span class="text">Sign In</span>
                                        </a>
                                        <div class="user-register-area">
                                           
                                            <div class="user-signin-area">
                                                <div class="form-content">
                                                    <div class="form-content-signin">
                                                        <form class="default-form signin-form">
                                                            <div class="form-group">
                                                                <input id="email" name="email" class="form-controllar" type="email" placeholder="Email Address" />
                                                                <span class="icon-user-1"></span>
                                                            </div>
                        
                                                            <div class="form-group">
                                                                <input id="pass" name="password" class="form-controllar" type="password" placeholder="Password" />
                                                                <span class="icon-key3"></span>
                                                                <div class="forget-pass">
                                                                    <a class="btn-password" href="#">Forget?</a>
                                                                </div>
                                                            </div>
                        
                                                            <div class="form-btn-group">
                                                                <button type="submit" class="btn btn-default btn-black">
                                                                    Login in
                                                                    <span class="fas fa-caret-right"></span>
                                                                </button>
                                                            </div>
                                                            <div class="reg-others-midea">
                                                                <div class="text">
                                                                    Or Login With
                                                                </div>
                                                                <div class="midea-icons">
                                                                    <ul class="social-share">
                                                                        <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                                        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                                                        <li><a class="google-plus" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                                        <li><a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </form>  
                                                        <div class="login-form-register-now">
                                                            Dont have an account? <a class="btn-register-now" href="#">Register Now</a>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="form-content-password">
                                                        <form class="default-form password-form">
                                                            <div class="form-group">
                                                                <input id="re-email" name="email" class="form-controllar" type="email" placeholder="Email Address" />
                                                                <span class="icon-user-1"></span>
                                                            </div>
                                                            
                                                            <div class="form-group">
                                                                <input id="re-pass-up" name="password" class="form-controllar" type="password" placeholder="Password" />
                                                                <span class="icon-key3"></span>
                                                            </div>
                        
                                                            <div class="form-group">
                                                                <input id="re-pass-up-confirm" name="password" class="form-controllar" type="password" placeholder="Confirm Password" />
                                                                <span class="icon-key3"></span>
                                                            </div>
                        
                                                            <div class="form-btn-group pt-10">
                                                                <button type="submit" class="btn btn-default btn-recet">
                                                                    Recet Password
                                                                </button>
                                                                <button type="button" class="btn btn-default btn-back">Back</button>
                                                            </div>
                                                        </form> 
                                                    </div>
                                                </div>
                                            </div>

                                             
                                             <div class="user-signup-area">
                                                <div class="form-content">
                                                    <form id="signup-form" class="default-form signup-form" method="post">
                                                        <div class="form-group">
                                                            <input id="name" name="name" class="form-controllar" type="text" placeholder="Username" />
                                                            <span class="icon-user-1"></span>
                                                        </div>
                                           <div class="form-group">
                                                            <input id="email-up" name="email" class="form-controllar" type="email" placeholder="Email Address" />
                                                            <span class="icon-user-1"></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <input id="pass-up" name="password" class="form-controllar" type="password" placeholder="Password" />
                                                            <span class="icon-key3"></span>
                                                        </div>
                                                        
                                                        <div class="form-group">
                                                            <input id="pass-up-confirm" name="password" class="form-controllar" type="password" placeholder="Confirm Password" />
                                                            <span class="icon-key3"></span>
                                                        </div>
                                                        
                                                        <div class="login-form-remember"> 
                                                            <label><input id="remembermesignup" value="" type="checkbox" /><span>I Agree to the </span> <a href="#"> Privacy Policy</a></label>
                                                        </div>
                                                        <div class="form-btn-group">
                                                            <button type="submit" class="btn btn-default btn-register">
                                                                Register
                                                            </button>
                                                            <button type="button" class="btn btn-default btn-signin btn-back">
                                                                Sign In
                                                            </button>
                                                            <div class="reg-others-midea">
                                                                <div class="text">
                                                                    Or Connect With
                                                                </div>
                                                                <div class="midea-icons">
                                                                    <ul class="social-share">
                                                                        <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                                        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                                                        <li><a class="google-plus" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                                        <li><a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    

        <div class="single-listing-todo-block pd-b-100">
            <div class="listing-todo-thumbnail-carousel carousel-nav-rectangle owl-carousel">
               
                <div class="item">
                    <img src="assets/images/todo/single/slide/img1.jpg" alt="thumb" />
                </div>
                <div class="item">
                    <img src="assets/images/todo/single/slide/img2.jpg"  alt="thumb" />
                </div>
                <div class="item">
                    <img src="assets/images/todo/single/slide/img3.jpg" alt="thumb" />
                </div>
                <div class="item">
                    <img src="assets/images/todo/single/slide/img 4.jpg" alt="thumb" />
                </div>
                <div class="item">
                    <img src="assets/images/todo/single/slide/img5.jpg"  alt="thumb" />
                </div>
                <div class="item">
                    <img src="assets/images/todo/single/slide/img6.jpg" alt="thumb" />
                </div>
        </div>
        
        </div>
       
        <div class="todos-block bg-snow ptb-100">
            <div class="container ml-b-30">
                <div class="row">
                       
                    <div class="col-lg-4 col-md-6">
                        <div class="todo-item">
                            <div class="todo-thumbnail-area">
                                <figure class="item-thumb">  
                                    <img src="assets/images/todo/single/photo/wedd.jpg" alt="Thmubnail" /> 
                                </figure>
                                <div class="todo-overlay-info">
                                    <div class="todo-type-cat">
                                        <div class="todo-rating">
                                            <span>4.8</span>19 Ratings
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="todo-content">
                                <h3 class="title"><a href="Photography.html">Wedding Photography</a></h3>
                               <div class="todo-price-status">
                                    <div class="todo-price">$12 - $33</div>
                                </div> 

                                <label class="container"><a href="#">Zoom Photography</a> 
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>
                                  </label>
                               
                                <div class="todo-meta">
                                   
                                        <div class="todo-summary">
                                            <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="todo-item">
                            <div class="todo-thumbnail-area">
                                <figure class="item-thumb">  
                                    <img src="assets/images/todo/single/photo/travel.jpg" alt="Thmubnail" /> 
                                </figure>
                                <div class="todo-overlay-info">
                                    <div class="todo-type-cat">
                                        <div class="todo-rating">
                                            <span>4.8</span>19 Ratings </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="todo-content">
                                <h3 class="title"><a href="Photography.html">Portait Photography</a></h3>
                               <div class="todo-price-status">
                                    <div class="todo-price">$12 - $33</div>
                                </div> 
                                <label class="container"><a href="#">Zoom Photography</a> 
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>
                                  </label>
                                <div class="todo-meta">
                                    
                                        <div class="todo-summary">
                                            <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

  
  <div class="col-lg-4 col-md-6">
    <div class="todo-item">
        <div class="todo-thumbnail-area">
            <figure class="item-thumb">  
                <img src="assets/images/todo/single/photo/event.jpg" alt="Thmubnail" /> 
            </figure>
            <div class="todo-overlay-info">
                <div class="todo-type-cat">
                    <div class="todo-rating">
                        <span>4.8</span>19 Ratings
                    </div>
                </div>
            </div>
        </div>
        <div class="todo-content">
            <h3 class="title"><a href="Photography.html">Event Photography</a></h3>
           <div class="todo-price-status">
                <div class="todo-price">$12 - $33</div>
            </div> 
            <label class="container"><a href="#">Zoom Photography</a> 
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            <div class="todo-meta">
                
                    <div class="todo-summary">
                        <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                    </div>
            </div>
        </div>
    </div>
</div>

  <div class="col-lg-4 col-md-6">
                        <div class="todo-item">
                            <div class="todo-thumbnail-area">
                                <figure class="item-thumb">  
                                    <img src="assets/images/todo/single/photo/travel.jpg" alt="Thmubnail" /> 
                                </figure>
                                <div class="todo-overlay-info">
                                    <div class="todo-type-cat">
                                        <div class="todo-rating">
                                            <span>4.8</span>19 Ratings
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="todo-content">
                                <h3 class="title"><a href="Photography.html">Travel Photography</a></h3>
                               <div class="todo-price-status">
                                    <div class="todo-price">$12 - $33</div>
                                </div> 
                                <label class="container"><a href="#">Zoom Photography</a> 
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>
                                  </label>
                                <div class="todo-meta">
                                    
                                        <div class="todo-summary">
                                            <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                                        </div>
                                </div>            
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="todo-item">
                            <div class="todo-thumbnail-area">
                                <figure class="item-thumb">  
                                    <img src="assets/images/todo/single/photo/ar.jpg" alt="Thmubnail" /> 
                                </figure>                               
                                 <div class="todo-overlay-info">
                                    <div class="todo-type-cat">
                                        <div class="todo-rating">
                                            <span>4.8</span>19 Ratings
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="todo-content">
                                <h3 class="title"><a href="Photography.html">Architecture Photography</a></h3>
                               <div class="todo-price-status">
                                    <div class="todo-price">$12 - $33</div>
                                </div> 
                                <label class="container"><a href="#">Zoom Photography</a> 
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>
                                  </label>
                                <div class="todo-meta">
                                    
                                        <div class="todo-summary">
                                            <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                                        </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                      <div class="col-lg-4 col-md-6">
                        <div class="todo-item">
                            <div class="todo-thumbnail-area">
                                <figure class="item-thumb">  
                                    <img src="assets/images/todo/single/photo/wedd.jpg" alt="Thmubnail" /> 
                                </figure>
                                <div class="todo-overlay-info">
                                    <div class="todo-type-cat">
                                        <div class="todo-rating">
                                            <span>4.8</span>19 Ratings
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="todo-content">
                                <h3 class="title"><a href="Photography.html">Fine-art-Photography</a></h3>
                               <div class="todo-price-status">
                                    <div class="todo-price">$12 - $33</div>
                                </div> 
                                <label class="container"><a href="#">Zoom Photography</a> 
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmark"></span>
                                  </label>
                                <div class="todo-meta">
                                    
                                        <div class="todo-summary">
                                            <p>The path of the righteous man is beset on allave side by the iniquities. Nam in mauris quis liberos sod eleifend spectra online.</p>
                                        </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar-todos mrt-md-60">

                            <div class="form-submit">
                                <button class="btn bttn-default">Send Message</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="features-cat-list-area bg-blue-violet">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="cat-list-item">
                            <div class="cat-title">
                                <div class="icon">
                                    <span class="icon-sunbed"></span>
                                </div>
                                <div class="cat-name">Photography</div>
                            </div>
                            <ul class="list">
                                <li><a href="#">Portrait<span>4</span></a></li>
                                <li><a href="#">Wedding Shoot<span>6</span></a></li>
                                <li><a href="#">Fashion Photography<span>7</span></a></li>
                                <li><a href="#">Fine Art Photography<span>10</span></a></li>
                            </ul>
                        </div>
                    </div>
                 
                    <div class="col-lg-3 col-md-6">
                        <div class="cat-list-item">
                            <div class="cat-title">
                                <div class="icon">
                                    <span class="icon-fast-food"></span>
                                </div>
                                <div class="cat-name">Home Service</div>
                            </div>
                            <ul class="list">
                                <li><a href="#">Painting<span>4</span></a></li>
                                <li><a href="#"> Grocery Delivery<span>6</span></a></li>
                                <li><a href="#">Electrician<span>7</span></a></li>
                                <li><a href="#">Carpenter<span>10</span></a></li>
                            </ul>
                        </div>
                    </div>
                  
                    <div class="col-lg-3 col-md-6">
                        <div class="cat-list-item">
                            <div class="cat-title">
                                <div class="icon">
                                    <span class="icon-cafe"></span>
                                </div>
                                <div class="cat-name">Programming-Tech</div>
                            </div>
                            <ul class="list">
                                <li><a href="#">Web Developer<span>4</span></a></li>
                                <li><a href="#">WordPress Developer<span>6</span></a></li>
                                <li><a href="#">SEO<span>7</span></a></li>
                                <li><a href="#">Software Developer<span>10</span></a></li>
                            </ul>
                        </div>
                    </div>
                  
                    <div class="col-lg-3 col-md-6">
                        <div class="cat-list-item">
                            <div class="cat-title">
                                <div class="icon">
                                    <span class="icon-bag-1"></span>
                                </div>
                                <div class="cat-name">Service Market</div>
                            </div>
                            <ul class="list">
                                <li><a href="#">Plumbing Service<span>4</span></a></li>
                                <li><a href="#">cleaning Service<span>6</span></a></li>
                                <li><a href="#">Laundry services<span>7</span></a></li>
                                <li><a href="#">Beauty services<span>10</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        <footer class="site-footer bg-blue-violet footer-default-style pd-t-60 pd-b-60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="footer-logo">
                            <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt="Logo" /></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul class="footer-menu">                        
                            <li><a href="#">Join Us</a></li>
                            <li><a href="#">Privcay Policy</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="footer-social">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
    );
        
    }
    }

    export default Photography;
  