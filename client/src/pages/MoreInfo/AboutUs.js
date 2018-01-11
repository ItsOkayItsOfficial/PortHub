import React from "react";
import "./MoreInfo.css";
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/BootstrapModal';

const AboutUs = () =>
  <div className="row d-flex align-items-center moreInfoText" style={{width:"100vw", position:"absolute", top:"80px"}} >
        {/* for large devices */}
        <div className="d-lg-block d-none mx-auto w-100">
                <div className="row w-100 border border-left-0 border-top-0 border-right-0 no-shadow pb-2 mt-4">
                    <div className="col-lg-6 border border-left-0 border-top-0 border-bottom-0 no-shadow">
                        <div className="d-flex flex-row justify-content-end">
                            <figure class="figure m-0">
                            <button type="button" class="btn no-shadow btn-hover-pointer" data-toggle="modal" data-target="#alexModal">                     
                                <img className="figure-img d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/alex2.jpg" alt="Alex"></img>                        
                            </button>
                                <figcaption class="figure-caption text-center">Front-end Development</figcaption>
                            </figure>                    
                        </div>
                        <div style={{position:"relative", bottom:"0"}}>
                            <div className="text-right aboutTitle">Alex Pugh</div>
                        </div>
                    </div>
                    <div className="col-lg-6 border-right-0">
                        <figure class="figure m-0">
                                <button type="button" class="btn no-shadow btn-hover-pointer" data-toggle="modal" data-target="#jasonModal"> 
                                    <img className="figure-img d-block img-fluid rounded-circle aboutUsImg" src="/assets/images/ph/jason2.jpg" alt="Jason"></img>
                                </button>                            
                                <figcaption class="figure-caption text-center">DevOps</figcaption>
                        </figure>                         
                        <div className="text-left aboutTitle">Jason Summers</div>
                    </div>
                </div>
                <div className="row w-100 pt-2">
                    <div className="col-6 d-flex flex-column align-content-center border border-left-0 border-top-0 border-bottom-0 no-shadow ">
                            <div className="text-right aboutTitle">Cody Crozier</div>
                            <div>
                            <figure class="figure m-0 pull-right">
                                <figcaption class="figure-caption text-center mt-1">Back-end Development</figcaption>
                                <button type="button" class="btn no-shadow btn-hover-pointer" data-toggle="modal" data-target="#codyModal">                          
                                    <img className="figure-img pull-right d-block img-fluid rounded-circle aboutUsImg" src="/assets/images/ph/cody2.jpg" alt="Cody"></img>
                                </button>
                        </figure> 
                            </div>
                    </div>
                    <div className="col-lg-6">
                            <div className="text-left aboutTitle">Kui Eugenio</div>
                            <figure class="figure m-0">
                                <figcaption class="figure-caption text-center mt-1">Back-end Development</figcaption> 
                                <button type="button" class="btn no-shadow btn-hover-pointer" data-toggle="modal" data-target="#kuiModal">                        
                                    <img className="figure-img d-block img-fluid rounded-circle aboutUsImg no-shadow" src="/assets/images/ph/kui2.jpg" alt="Kui"></img>                        
                                </button>

                                
                            </figure> 
                    </div>
                </div>
        </div>
        {/* for small devices */}
        <div className="d-sm-block d-md-block d-lg-none w-100">
            <div className="row w-100 p-3 d-flex flex-row justify-content-center align-items-center border">
                <div className="col">
                    <figure class="figure m-0">
                        <button type="button" class="btn no-shadow" data-toggle="modal" data-target="#alexModal">                     
                            <img className="figure-img d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/alex2.jpg" alt="Alex"></img>                        
                        </button>
                    </figure>
                </div>
                <div className="col">
                    <div>
                        <p className="aboutTitle">Alex Pugh</p><p>Front-end Development</p>
                    </div>
                </div>
            </div>

            <div className="row w-100 p-3 d-flex flex-row justify-content-center align-items-center border">
                <div className="col">
                    <div>
                        <p className="smAboutTitle">Jason C. Summers</p><p>DevOps</p>
                    </div>
                </div>
                <div className="col">
                    <figure class="figure m-0">
                        <button type="button" class="btn no-shadow" data-toggle="modal" data-target="#jasonModal">                     
                            <img className="figure-img d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/jason2.jpg" alt="Jason"></img>                        
                        </button>
                    </figure>
                </div>
            </div> 

            <div className="row w-100 p-3 d-flex flex-row justify-content-center align-items-center border">
                <div className="col">
                    <figure class="figure m-0">
                        <button type="button" class="btn no-shadow" data-toggle="modal" data-target="#codyModal">                     
                            <img className="figure-img d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/cody2.jpg" alt="Alex"></img>                        
                        </button>
                    </figure>
                </div>
                <div className="col">
                    <div>
                        <p className="aboutTitle">Cody Crozier</p><p>Back-end Development</p>
                    </div>
                </div>
            </div>

            <div className="row w-100 p-3 d-flex flex-row justify-content-center align-items-center border">
                <div className="col">
                    <div>
                        <p className="smAboutTitle">Kui Eugenio</p><p>Back-end Development</p>
                    </div>
                </div>
                <div className="col">
                    <figure class="figure m-0">
                        <button type="button" class="btn no-shadow" data-toggle="modal" data-target="#kuiModal">                     
                            <img className="figure-img d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/kui2.jpg" alt="Kui"></img>                        
                        </button>
                    </figure>
                </div>
            </div>                        
        </div>
        <Modal title="kui eugenio" modalName="kuiModal">
            <img className="figure-img d-block img-fluid rounded-circle aboutUsImg float-left mr-3" src="/assets/images/ph/kui.jpg" alt="Kui"></img>
            <p>Highly trained and skilled developers are rare to come by but Kui is here and ready made. Problem solving is a crucial skill to have in web development; Kui Eugenio has turned that skill into a way of life. Find a challenge. Find a solution. Create a more efficient solution. Kui excels at API development. Kui excels at finding the best use of technology at low cost to the user and business. He can flawlessly execute even the most complex coding procedures. Whittling them down into small, creative and functional lines of code. He continues to shatter the mold of "good" developer and forces his way into the conversation of "great" developer.</p>
        </Modal>
        <Modal title="cody crozier" modalName="codyModal">
            <img className="float-right ml-3 d-block img-fluid rounded-circle aboutUsImg" src="/assets/images/ph/cody.jpg" alt="Cody"></img>
            <p>Expert in all things functionality and connectivity. Highly proficient in server side scripting and database connections. Skilled in creating deep web applications that can be used across multiple platforms. Cody is what we like to call in the development world a "prodigy". Capable of learning even the most complex coding languages. He continually shows that he can learn, break down and re-use any language in a effective, efficient manner. Thinking outside the box to complete a complex problem...That's Cody Crozier's breakfast.</p>
        </Modal>
        <Modal title="alex pugh" modalName="alexModal">
            <img className="float-left mr-3 d-block img-fluid rounded-circle aboutUsImg d-none" src="/assets/images/ph/alex.jpg" alt="Alex"></img>                            
            <p>Creating front-end content utilizing cutting edge styling and design best practices. Expert in Front End CMS. Expert use in mainstay design tools (Adobe Photoshop, Illustrator) Blending cutting edge web development and design is Alex's forte'. Seamless UI/UX breeds for better content and Alex proves that time and time again. If it's new and can be used to execute front end code flawlessly, you can count on Alex to have already mastered it.</p>
        </Modal>
        <Modal title="jason c. summmers" modalName="jasonModal">
            <img className="float-right ml-3 d-block img-fluid rounded-circle aboutUsImg" src="/assets/images/ph/jason.jpg" alt="Jason"></img>    
            <p>Sometimes you just need results. Enter Jason C. Summers. Need a database connected? Done. Need a JQuery method on the front end? Done. A jack of all trades and master of none. Proficient in the most widely used programming languages, but always on the hunt to learn more. Whether it be a navbar that needs to be updated or an API that needs integration, Jason is there to do it all. Marketing, Advertising, Content Management and Development Operations is Jason's bread and butter. Success comes from hard work and preparation, that's a Jason Summers lifestyle.</p>
        </Modal> 
        <div style={{marginTop:"-25px", width:"100%"}}>
            <Footer />
        </div>
    </div>
export default AboutUs;
