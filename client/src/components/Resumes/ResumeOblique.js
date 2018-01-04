import React from 'react';
import moment from 'moment';

export const ResumeOblique = ({contact, experience, education, skills, portfolio, clicked }) => {
  	let skillSection = skills.map((skill, i) => {
        if (i%4 === 0){
            return (
                `</tr><tr><td>
                    <i class="fa fa-caret-down" aria-hidden="true" style="font-size:8px;">
                    </i>&nbsp&nbsp${skill.skill}
                </td>`
            )
        } else {
            return (
                `<td>
                    <i class="fa fa-caret-down" aria-hidden="true" style="font-size:8px;">
                    </i>&nbsp&nbsp${skill.skill}
                </td>`
            )
        }
    })
	skillSection = skillSection.join('');
  	let experienceSection = experience.map((experience) => {
			return (
      		`<p><b>${experience.employer}</b></br>
				<i>${experience.title}</i></br>
				${experience.duties}</br>
				${moment(experience.startDate).format('MM/YYYY')} - ${moment(experience.endDate).format('MM/YYYY')}
			</p>`)   
    })
    experienceSection = experienceSection.join('');
  	let educationSection = education.map((education) => {
        return 	(		
          `<p>	<b>${education.major}</b><br/>
			  	<i>${education.schoolName}</i><br/>
				  ${moment(education.startDate).format('MM/YYYY')} - ${moment(education.endDate).format('MM/YYYY')}
			</p>`)
      })
	  educationSection = educationSection.join('');

	  const img = contact ? "<img class='profilePic' src='" + contact.profilePicture + "'></img>" : "";

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
            <div class="container-fluid" style="height:11in; width:8in">
                <div id="rectangle"></div>    
                <div id="triangle-topright"></div>
                <table class="w-100 text-white" style="position: relative;top: 150px;">
                    <tr style="top:200px;"><td class="text-right" style="width:6in"><h2>${contact ? contact.firstName.toUpperCase() : ''}</h2></td>
                        <td rowspan="2">
                            ${img}
                        </td>
                    </tr>
                    <tr>
                        <td class="text-right" style="width:6in"><h2>${contact ? contact.lastName.toUpperCase() : ''}</h2></td></tr>
                    </tr>
                </table>
                <div class="row flex-row flex-wrap" style="height:70%; color:#006666; margin-top:150px">
                    <div class="experience w-75 mx-auto">
                        <h3>Experience</h3>
                        ${experienceSection}
                    </div>                             
                    <div class="education w-75 mx-auto">
                        <h3>Education</h3>
                        ${educationSection}
                    </div>
                    <div class="skills w-75 mx-auto">
                        <h3>Skills</h3>
                        <table class="mx-auto" style="width:100%"><tr>${skillSection}</tr></table>
                    </div>   
                    <div class="contact w-75 mx-auto mt-4">
                        <p>
                            <i class="fa fa-envelope" aria-hidden="true"></i> ${contact ? contact.email:""} | <i class="fa fa-phone" aria-hidden="true"></i> ${contact ? contact.phone:""}</br>									
                            <i class="fa fa-globe" aria-hidden="true"></i>  ${contact ? contact.site:""} | <i class="fa fa-github" aria-hidden="true"></i>  ${contact ? contact.github:""} | <i class="fa fa-linkedin-square" aria-hidden="true"></i>  ${contact ? contact.linkedin:""}
                        </p>
                    </div>                                                
                </div>
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
            margin:auto;
            width:8in;
            height:11in;
        }
        .profilePic{
            width:100px;
            height:100px;
        }
        #rectangle {
            z-index:-1;
            position:fixed;
            top:0;
            height:150px;
            width:8in;
            background: #006666;
            border-bottom: solid #006666;
        } 
        #triangle-topright {
            z-index:-1;
            position:fixed;
            top:150px;
            border-top: 300px solid #006666;
            border-left: 8in solid transparent;
            
        }     
        td {
            padding:5px;
        }   
    </style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}