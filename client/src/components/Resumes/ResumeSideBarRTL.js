import React from 'react';
import moment from 'moment';

export const ResumeSideBarRTL = ({contact, experience, education, skills, portfolio, clicked }) => {
  	let skillSection = skills.map((skill, i) => {
		  	i++;
		  	if (i%5 === 0){
				return (
					`</tr><tr><td class="containerCircle">
						<span>${skill && skill.skill ? skill.skill : ''}</span></img>
					</td>`
				)
			} else {
				return (
					`<td class="containerCircle">
						<span>${skill && skill.skill ? skill.skill : ''}</span></img>
					</td>`
				)				
			}
        })
	skillSection = skillSection.join('');
  	let experienceSection = experience.map((experience) => {
			return (
      		`<p><b>${experience && experience.employer ? experience.employer : ''}</b></br>
				<i>${experience && experience.title ? experience.title : ''}</i></br>
				${experience && experience.duties ? experience.duties : ''}</br>
				${experience && experience.startDate ? moment(experience.startDate).format('MM/YYYY') : ''} - ${experience && experience.endDate ? moment(experience.endDate).format('MM/YYYY') : ''}
			</p>`)   
    })
    experienceSection = experienceSection.join('');
  	let educationSection = education.map((education) => {
        return 	(		
          `<p>	<b>${education && education.major ? education.major : ''}</b><br/>
			  	<i>${education && education.schoolName ? education.schoolName : ''}</i><br/>
				  ${education && education.startDate ? moment(education.startDate).format('MM/YYYY') : ''} - ${education && education.endDate ? moment(education.endDate).format('MM/YYYY') : ''}
			</p>`)
      })
	  educationSection = educationSection.join('');

	  const img = contact ? "<img src='" + contact.profilePicture + "'></img>" : "";

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
				<div class="container-fluid border border-dark" style="height:11in; width:8.7in">
					<div class="m-4 align-content-center" style="background-color:rgba(255, 255, 255, 0)">
						<div class="text-center p-4 display-4">${contact ? contact.firstName:""} ${contact ? contact.lastName:""}</div>
						<div class="text-center">
							<p>${contact ? contact.bio: ""}</p>
						</div>

					</div>
			
					<table style="width:100%; margin-top:100px;">
						<tr>
							<td align="right">
								<div class="experience">
									<h4>Experience</h4>
								<div class="company"> ${experienceSection}</div>
								</div>                             
								<div class="education">
									<h4>Education</h4>
									<div>${educationSection}</div>
								</div>
								<div class="skills">
									<h4>Skills</h4>
									<div class="skills">
										<table class="text-center">
											<tr>${skillSection}</tr>
										</table>
									</div>
									<div class="circle"></div>
								</div>							
							</td>
							<td valign="top" style="padding-left:50px;">
								<div class="image text-center">
									${img}
								</div>                            
								<div class="contact text-center mt-4">
									<h4>Contact</h4>
									<p>
										${contact ? contact.email:""}</br>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i></br>
										${contact ? contact.phone:""}</br>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i></br>                                            
										${contact ? contact.address:""}</br>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i></br>                                             
										${contact ? contact.site:""}</br>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i></br>                                            
										${contact ? contact.github:""}</br>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i>
										<i class="fa fa-circle" aria-hidden="true"></i></br>                                            
										${contact ? contact.linkedin:""}</br>
									</p>
								</div>	
							</td>
						</tr>
					</table>
				</div>
			</body>
		
			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
			<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
			<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		</html>
		
		<style>
			html {
				height: 0;
				transform-origin: 0 0;
				-webkit-transform-origin: 0 0;
				transform: scale(0.74);
				-webkit-transform: scale(0.745);
			}
			body{
				font-size:16px;
				margin: auto;
				width:8.7in;
				height:11in;
			}
			.contact p{
				line-height:2em;
            }
            .fa{
                color:#D3D3D3;
            }
			img{
				height:200px;
				width:200px;
            }
                        
			.slider {
			-webkit-appearance: none;
			width: 100%;
			height: 15px;
			margin-top:2px;
			margin-right:auto:
			margin-left:auto;
			margin-bottom:10px;
			border-radius: 5px;   
			background: #d3d3d3;
			outline: none;
			opacity: 0.7;
			-webkit-transition: .2s;
			transition: opacity .2s;
			}
		
			.slider::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				width: 25px;
				height: 25px;
				border-radius: 50%; 
				background: #4CAF50;
				cursor: pointer;
			}
			
			.slider::-moz-range-thumb {
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: #4CAF50;
				cursor: pointer;
            }
            .containerCircle {
				background-image: url("http://www.math.com/school/subject3/images/S3U1L6GLcircle.gif");
				background-size: 100px 100px;
				background-repeat: no-repeat;
				background-position: center center;
			}
			td{
				height:100px;
				width:100px;
				color: gray;
				font-size: 12px;
			}                      
		</style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}