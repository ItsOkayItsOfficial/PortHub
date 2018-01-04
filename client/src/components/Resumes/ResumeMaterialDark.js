import React from 'react';
import moment from 'moment';

export const ResumeMaterialDark = ({contact, experience, education, skills, portfolio, clicked }) => {
  	let skillSection = skills.map((skill) => {
          return (
            `${skill.skill}
            <div class="slider white"></div>`
          )
        })
	skillSection = skillSection.join('');
  	let experienceSection = experience.map((experience) => {
			return (
              ` <div class="card card-body mb-2">
                    <p><b>${experience.employer}</b></br>
                    ${moment(experience.startDate).format('MM/YYYY')} - ${moment(experience.endDate).format('MM/YYYY')}              
                    <i>${experience.title}</i></br>
                    ${experience.duties}</br>
                    </p>
                </div>`)   
    })
    experienceSection = experienceSection.join('');
  	let educationSection = education.map((education) => {
        return 	(		
            `<div class="card card-body mb-2">
                <p>	<b>${education.major}</b><br/>
                    <i>${education.schoolName}</i><br/>
                    ${moment(education.startDate).format('MM/YYYY')} - ${moment(education.endDate).format('MM/YYYY')}
                </p>
            </div>`)
      })
	  educationSection = educationSection.join('');

	  const img = contact ? "<img src='" + contact.profilePicture + "' class='rounded-circle'></img>" : "";

	const html =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">   
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> 
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
    
        <title>${contact ? contact.firstName:""} ${contact ? contact.lastName:""} Resume</title>
    </head>
    
    <body>
        <table style="width:9in; height:9.975in;">
            <tr>
                <td style="width:3in; height:11in; background:darkslategray; padding:50px;">
                    <div class="image">
                        ${img}
                    </div>
                    <div class="my-auto">
                        <div class="contact text-muted mt-4 mb-2">
                            <h5>Contact</h5>
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>  ${contact ? contact.email:""} </br>
                                <i class="fa fa-phone" aria-hidden="true"></i>  ${contact ? contact.phone:""}</br>
                                <i class="fa fa-home" aria-hidden="true"></i>  ${contact ? contact.address:""}</br> 
                                <i class="fa fa-globe" aria-hidden="true"></i>  ${contact ? contact.site:""}</br>
                                <i class="fa fa-github" aria-hidden="true"></i>  ${contact ? contact.github:""}</br>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>  ${contact ? contact.linkedin:""}</br>
                            </p>
                        </div>
                        <div class="text-muted">
                            <h5>Skills</h5>
                            ${skillSection}   
                        </div>
                    </div>            
                </td>
                <td style="width:5in; height:11in; background:gray; padding:20px;">
                <div class="text-left mt-4">
                    <h3>	${contact ? contact.firstName:""} ${contact ? contact.lastName:""}</h3>
                    <p>${contact ? contact.bio: ""}</p>
                    </div>
                    <div>
                        <h4>Experience</h4>
                        <div> ${experienceSection}</div>
                    </div>
                    <div>
                        <h4>Education</h4>
                    <div>${educationSection}</div>            
                </td>       
            </tr>
        </table>

    </body>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
    $( document ).ready(function() {
        $(".slider").slider({
          orientation: "horizontal",
          range: "min",
          max: 100,
          value: 100,
          animate: 1300
        });
        $(".slider").slider( "value", 100 );
      });
      
    </script>
    </html>
            
    <style>
        html {
            height: 0;
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            transform: scale(0.72);
            -webkit-transform: scale(0.72);
        }
        body{
            font-size:16px;
            margin: auto;
            width:9in;
            height:10in;
        }
        img{
            height:100%;
            width:100%;
        }
        p{
            line-height:2em;
        }

        .sliderset {
            margin-top: 70px; 
          }
          
          .slider {
            position: relative;
            margin-top: 5px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom:15px;
            width: 250px;
            display: block;
            background: #565656;
            height: 7px;
            box-shadow: 0 1px 0px rgba(255,255,255,0.25),
              inset 0 0 4px rgba(0,0,0,0.9);
            @include border-radius(20px);
            div.ui-slider-range {
              display: block;
              height: 7px;
              @include border-radius(7px);
              @include transition-property(background-color);
              @include transition-duration(100ms);
            }

            &.white div.ui-slider-range {
               background-color: #e3e3e3;
               box-shadow: inset 0 0 4px rgba(88, 88, 88, 0.5),
                inset 0 0 2px rgba(0, 0, 0,0.3);
               &.hilite, &.dragging {
                background-color: #f0f0f0;
               }
            }
            
            a.ui-slider-handle {
              position: absolute;
              top: -5px;
              margin-left: -9px;
              z-index: 2;
              height: 16px;
              width: 16px;
              @include border-radius(20px);
              background-color: #d4d4d4;
              @include background-image($chromeurl);
              @include background-size(100% 100%);
              border: 0px solid rgba(0,0,0,0.1);
              box-shadow: 0 0px 2px rgba(0,0,0,0.4),
                inset 0 0px 1px rgba(0,0,0,0.3),
                0 1px 2px rgba(0,0,0,0.6),
                0 4px 2px rgba(0,0,0,0.2),
                0 9px 4px rgba(0,0,0,0.1),
                inset 0 2px 1px rgba(255,255,255,1.0);
              outline: none;
            }
            
            a.ui-slider-handle:after {
             content: "";
              position: absolute;
              width: 15px;
              height: 15px;
              left: -1px;
              top: -4px;
              background-color: none;
              @include border-radius(12px);
              @include background-image(radial-gradient(rgba(255,255,255,1.0), rgba(255,255,255,0.05) rgba(255,255,255,0.0)));
            }
          }

    </style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}