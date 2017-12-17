import React from 'react';

export const ResumeLeftRightRTL = ({contact, experience, education, skills, portfolio, clicked }) => {
  let skillSection = skills.map((skill, i) => {
        const offset = i===3 ? "col-lg-offset-3" : ''; 
          return (
        `<div class="col-lg-3 centered ${offset}" >
					<canvas id=${skill.skill} height="130" width="130"></canvas>
					<p>${skill.skill}</p>
					<br>
					<script>
						var doughnutData = [{
								value: 100,
								color: "#1abc9c"
							},
							{
								value: 0,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("${skill.skill}").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>`
          )
        })
    skillSection = skillSection.join('');
  let experienceSection = experience.map((experience, i) => {
       const offset = i!== 0 ? "col-lg-offset-3" : '';
			return (
      `<div class="col-lg-6 ${offset}">
				<p>
					<t>${experience.title}</t>
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
          `<div class="col-lg-6 ${offset}">
            <p>
              <t>${education.major}</t>
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

		// let portfolioSection = portfolio.map((portfolio, i) => {
		//      const offset = i!== 0 ? "col-lg-offset-3" : '';
		//       return (
		//         `<div class="col-lg-6 ${offset}">
		//           <p>
		//             <img class="img-responsive" src="${portfolio.img}" alt="${portfolio.title}">
		//           </p>
		//         </div>
		//         <div class="col-lg-3">
		//           <p>${portfolio.title}</p>
		//           <p>
		//             <more>${portfolio.description}
		//               <br/>
		//               <br/>
		//               <sm>
		//             </more>
		//           </p>
		//         </div>`
		//       )
		//     })
		//     portfolioSection = portfolioSection.join('');
  const html =  `<!DOCTYPE html>
		<html lang="en">
			<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<meta name="theme-color" content="#000000">   
			<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
			<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
		
			<title>${contact ? contact.firstName:""} ${contact ? contact.lastName:""} Resume</title>
			</head>
		
			<body>
			<div class="container-fluid border border-dark">
				<div class="jumbotron align-content-center" style="background-color:rgba(255, 255, 255, 0); height:2.5in">
				<div class="text-center border border-dark">${contact ? contact.firstName:""} ${contact ? contact.middleName:""} ${contact ? contact.lastName:""}</div>
				<div class="text-center">
					<p>${contact ? contact.bio: ""}</p>
				</div>
				<div class="image text-center">
					<div class="img">img</div>
				</div>
				</div>
		
				<div class="container bg-info" style="height:8.5in">
					<div class="row align-items-top h-100">
					<div class="col text-right">
							<div class="experience">
							<h3>Experience</h3>
							<<div class="experience-block" v-for="experience in contact.experience" :key="experience.company">>
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
			</body>
		
			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script><script src="assets/bootstrap/js/bootstrap.min.js"></script>
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
		</style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}