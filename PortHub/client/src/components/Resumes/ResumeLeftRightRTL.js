import React from 'react';

export const ResumeLeftRightRTL = ({contact, experience, education, skills, portfolio, clicked }) => {
  let skillSection = skills.map((skill, i) => {
        const offset = i===3 ? "col-lg-offset-3" : ''; 
          return (
        `<div class="col-lg-12 centered ${offset}" >
					<canvas id=${skill.skill} height="130" width="130"></canvas>
					<p>${skill.skill}</p>
					<br>
		</div>`
          )
        })
    skillSection = skillSection.join('');
  let experienceSection = experience.map((experience, i) => {
       const offset = i!== 0 ? "col-lg-offset-3" : '';
			return (
      `<div class="col-lg-12 ${offset}">
				<p>
					<p>${experience.title}</p>
					<br/>${experience.employer}
					<br/>
				</p>
				<p>
					<more>${experience.duties}
					</more>
				</p>
			</div>
			<div class="col-lg-3">
				<p>
					<sm>${experience.startDate} - ${experience.endDate}</sm>
				</p>
			</div>`)   
    })
    experienceSection = experienceSection.join('');
  let educationSection = education.map((education, i) => {
        const offset = i!== 0 ? "col-lg-offset-3" : '';
        return 	(		
          `<div class="col-lg-12 ${offset}">
            <p>
              <p>${education.major}</p>
              <br/>${education.schoolName}
              <br/>
            </p>
          </div>
          <div class="col-lg-3">
            <p>
					    <sm>${education.startDate} - ${education.endDate}</sm>
              <br/>
            </p>
          </div>`)
      })
	  educationSection = educationSection.join('');
	  const img = contact.profilePicture ? "<img src='" + contact.profilePicture + "' class='rounded-circle'></img>" : "";
  const html =  `<!DOCTYPE html>
		<html lang="en">
			<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<meta name="theme-color" content="#000000">   
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
			<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
		
			<title>${contact ? contact.firstName:""} ${contact ? contact.lastName:""} Resume</title>
			</head>
		
			<body>
				<div class="container-fluid border border-dark">
					<div class="m-4 align-content-center" style="background-color:rgba(255, 255, 255, 0)">
						<div class="text-center border border-dark p-4 display-4">${contact ? contact.firstName:""} ${contact ? contact.lastName:""}</div>
						<div class="text-center">
							<p>${contact ? contact.bio: ""}</p>
						</div>
						<div class="image text-center">
							${img}
						</div>
					</div>
			
					<div class="container bg-info">
						<div class="row align-items-top h-100">
							<div class="col text-right">
									<div class="experience">
										<h3>Experience</h3>
										<div class="experience-block" v-for="experience in contact.experience" :key="experience.company">
											<div class="company"> ${experienceSection}</div>
										</div>
									</div>
									<div class="contact">
										<h3>Contact</h3>
										<table class="table-sm border-0">
											<tr>
											<td><i class="fa fa-envelope" aria-hidden="true"></i></td>
											<td><a href="'mailto:'+contact.contact.email">${contact ? contact.email:""}</a></td>
											</tr>
											<tr>
											<td><i class="fa fa-phone" aria-hidden="true"></i></td>
											<td><a href="'tel:'+contact.contact.phone">${contact ? contact.phone:""}</a></td>
											</tr>
											<tr>
											<td><i class="fa fa-home" aria-hidden="true"></i></td>
											<td>${contact ? contact.address:""}<br> ${contact ? contact.city:""}</td>
											</tr>
											<tr v-if="contact.contact.website">
											<td><i class="fa fa-globe" aria-hidden="true"></i></td>
											<td><a href="contact.contact.website">${contact ? contact.website:""}</a></td>
											</tr>
											<tr v-if="contact.contact.github">
											<td><i class="fa fa-github" aria-hidden="true"></i></td>
											<td><a href="https://github.com/'+${contact ? contact.github:""}">https://github.com/${contact ? contact.github:""}</a></td>
											</tr>
										</table>
									</div>
							</div>
							<div class="col text-right align-items-center">
									<div class="education">
										<h3>Education</h3>
										<div class="degree">${educationSection}</div>
									</div>
									<div class="skills">
										<h3>Skills</h3>
										<div class="skills">
											<div style="width:100%" class="d-flex flex-row">
												${skillSection}
												<label for="slider-range-min">{{skillName}}</label>
												<div class="slider w-100"></div>                     
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
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
			body{
			height: 11in;
			width: 8.5in;
			margin: auto;
			}
			jumbtron{
				margin:0;
			}
		
			.slider {
			-webkit-appearance: none;
			width: 100%;
			height: 15px;
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