import React from 'react';
import moment from 'moment';

export const ResumeLeftRightRTL = ({contact, experience, education, skills, portfolio, clicked }) => {
  	let skillSection = skills.map((skill) => {
          return (
			`${skill && skill.skill ? skill.skill : ''}<br/>
			<input type="range" min="1" max="100" class="slider w-75 mt-2 mb-3fffff" value=${skill.rating}></input><br/>`
          )
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
				<div class="container-fluid" style="height:11in">
					<div class="m-4 align-content-center" style="background-color:rgba(255, 255, 255, 0)">
						<div class="text-center border border-dark p-4 display-4">${contact ? contact.firstName:""} ${contact ? contact.lastName:""}</div>
						<div class="text-center">
							<p>${contact ? contact.bio: ""}</p>
						</div>
						<div class="image text-center">
							${img}
						</div>
					</div>
					  
					<table style="width:100%">
						<tr>
							<td valign="top" align="left" style="width:40%; padding:20px; padding-left:10%">
								<div class="experience">
									<h4>Experience</h4>
									<div class="company"> ${experienceSection}</div>
								</div>
								<div class="contact">
									<h4>Contact</h4>
									<p>
										${contact ? contact.email:""} &nbsp<i class="fa fa-envelope" aria-hidden="true"></i></br></br>
										${contact ? contact.phone:""} &nbsp<i class="fa fa-phone" aria-hidden="true"></i></br></br>
										${contact ? contact.address:""} &nbsp<i class="fa fa-home" aria-hidden="true"></i></br></br> 
										${contact ? contact.site:""} &nbsp<i class="fa fa-globe" aria-hidden="true"></i></br></br>
										${contact ? contact.github:""} &nbsp<i class="fa fa-github" aria-hidden="true"></i></br></br>
										${contact ? contact.linkedin:""} &nbsp<i class="fa fa-linkedin" aria-hidden="true"></i></br></br>
									</p>
								</div>							
							</td>
							<td align="right" valign="top" style="width:40%; padding:20px; padding-right:10%">
								<div class="education">
									<h4>Education</h4>
									<div>${educationSection}</div>
								</div>
								<div class="skills">
									<h4>Skills</h4>
									<div class="skills">
										<p>${skillSection}</p>                    
									</div>
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
			<script>
				$( function() {
				$( ".slider" ).slider({
					range: "min",
					value: 10,
					min: 1,
					max: 10,
				});
				} );
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
			margin:auto;
        }
			jumbtron{
				margin:0;
			}
			p{
				line-height:1.5em;
			}
			.skills p{
				line-height:.75em;
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
			img{
				height:100px;
				width:100px;
			}
		</style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}