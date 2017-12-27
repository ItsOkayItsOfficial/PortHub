import React from 'react';
import './Websites.css';

export const Lawrence = ({contact, experience, education, skills, portfolio, clicked }) => {
  let skillSection = skills.map((skill, i) => {
          return (
        `<div class="col-lg-3 mt">
					<canvas id="${skill.skill.trim().replace(/\s/g, '')}" height="130" width="130"></canvas>
					<p>${skill.skill.trim()}</p>
					<br>
					<script>
						var doughnutData = [{
								value: 70,
								color: "#74cfae"
							},
							{
								value: 30,
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("${skill.skill.trim().replace(/\s/g, '')}").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>`
          )
        })
    skillSection = skillSection.join('');

  let portfolioSection = portfolio.map((portfolio, i) => {
       const row = i===0||i===3 ? '<div class="row centered mt grid">' : '';
       const rowEnd = i===2||i===5 ? '</div>' : '';
       const header = i===0 ? '<h3>MY LATEST WORK</h3>' : '';
        return (
          `${row}${header}<div class="col-lg-4" style='text-align:center; word-wrap: break-word;'>
            <a id="proj_1" href="${portfolio.url}" target='_blank'>
              <img style='width:300px; height:300px'src="${portfolio.img}" alt="">
            </a>
            <h3 style='margin: 10px auto auto auto'>${portfolio.title}</h3>
              <p style='width: 300px; margin:auto'>${portfolio.description}</p>
          </div>${rowEnd}`
        )
      })
      portfolioSection = portfolioSection.join('');

    const html =
    `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Lawrence Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="">

	<title>${contact ? contact.firstName + ' ' + contact.lastName : ''}</title>

	<!-- Bootstrap 3.0.2 CSS -->
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="https://rawgit.com/ItsOkayItsOfficial/project3/master/templates/lawrence/assets/css/main.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

	<!-- jQuery 1.10.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Chart.js 1.0.1 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1/Chart.min.js"></script>

</head>

<body>

	<!-- Fixed navbar -->
	<div class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">
					<i class="fa fa-bolt"></i>
				</a>
			</div>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="active">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</div>


	<div id="hello">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 centered">
					<h1>${contact ? contact.firstName + ' ' + contact.lastName : ''}</h1>
					<h2>${contact ? contact.currentTitle : ''} | ${contact ? contact.email : ''}</h2>
				</div>
				<!-- /col-lg-8 -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /hello -->

	<div id="green">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 centered">
					<img src="https://rawgit.com/ItsOkayItsOfficial/project3/master/templates/lawrence/assets/img/iphone.png" alt="">
				</div>

				<div class="col-lg-7 centered">
					<h3>WHO AM I?</h3>
					<p>${contact ? contact.bio: ''}
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
    ${portfolioSection}
	</div>


	<div id="skills">
		<div class="container">
			<div class="row centered">
        <h3>MY SKILLS</h3>
        ${skillSection}
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /skills -->

	<section id="contact"></section>
	<div id="social">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-8 col-lg-offset-2">
					<div class="col-md-4">
						<a href="${contact.linkedin}">
							<i class="fa fa-linkedin"></i>
						</a>
					</div>
					<div class="col-md-4">
						<a href="${contact.github}">
							<i class="fa fa-github"></i>
						</a>
					</div>
					<div class="col-md-4">
						<a href="${contact.email}">
							<i class="fa fa-envelope"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /container -->
	</div>
	<!-- /social -->


	<div id="f">
		<div class="container">
			<div class="row">
				<p>Crafted with
					<i class="fa fa-heart"></i> by BlackTie.co.</p>
			</div>
		</div>
	</div>


	<!-- Bootstrap 3.0.2 -->
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>

</body>

</html>`


  return (
    <button className="btn btn-success sitebtn" onClick={() => clicked(html)}>Submit</button>
  )
}
