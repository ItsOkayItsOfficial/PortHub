import React from 'react';

const Montreal = ({contact, experience, education, skills, portfolio }) => {
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

  let portfolioSection = portfolio.map((portfolio, i) => {
       const offset = i!== 0 ? "col-lg-offset-3" : '';
        return (
          `<div class="col-lg-6 ${offset}">
            <p>
              <img class="img-responsive" src="${portfolio.img}" alt="${portfolio.title}">
            </p>
          </div>
          <div class="col-lg-3">
            <p>${portfolio.title}</p>
            <p>
              <more>${portfolio.description}
                <br/>
                <br/>
                <sm>
              </more>
            </p>
          </div>`
        )
      })
      portfolioSection = portfolioSection.join('');
  return ( `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Montreal Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="assets/ico/favicon.png">

	<title>Montreal</title>

	<!-- Bootstrap 3.0.2 CSS -->
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="assets/css/main.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<!-- Google fonts -->
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>

	<!-- jQuery 1.1.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- SmoothScroll -->
	<script type="text/javascript" src="assets/js/smoothscroll.js"></script>
	<!-- Chart.js 1.0.1 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1/Chart.min.js"></script>

</head>
<body data-spy="scroll" data-offset="0" data-target="#nav">

	<div id="section-topbar">'
		<div id="topbar-inner">
			<div class="container">
				<div class="row">
					<div class="dropdown">
						<ul id="nav" class="nav">
							<li class="menu-item">
								<a class="smoothScroll" href="#about" title="About">
									<i class="icon-user"></i>
								</a>
							</li>
							<li class="menu-item">
								<a class="smoothScroll" href="#resume" title="Resume">
									<i class="icon-file"></i>
								</a>
							</li>
							<li class="menu-item">
								<a class="smoothScroll" href="#work" title="Works">
									<i class="icon-briefcase"></i>
								</a>
							</li>
							<li class="menu-item">
								<a class="smoothScroll" href="#contact" title="contact">
									<i class="icon-envelope"></i>
								</a>
							</li>
						</ul>
						<!--/ uL#nav -->
					</div>
					<!-- /.dropdown -->

					<div class="clear"></div>
				</div>
				<!--/.row -->
			</div>
			<!--/.container -->

			<div class="clear"></div>
		</div>
		<!--/ #topbar-inner -->
	</div>
	<!--/ #section-topbar -->

	<div id="headerwrap">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-12">
					<h1>${contact ? contact.firstName + ' ' + contact.lastName : ''}</h1>
					<h3>${contact ? contact.currentTitle : ''} | ${contact ? contact.email : ''}</h3>
				</div>
				<!--/.col-lg-12 -->
			</div>
			<!--/.row -->
		</div>
		<!--/.container -->
	</div>
	<!--/.#headerwrap -->


	<section id="about" name="about"></section>
	<div id="intro">
		<div class="container">
			<div class="row">

				<div class="col-lg-2 col-lg-offset-1">
					<h5>ABOUT</h5>
				</div>
				<div class="col-lg-6">
					<p>${contact ? contact.bio: ''}</p>
				</div>
				<div class="col-lg-3">
					<p>
						<a href="#">
							<i class="icon-file"></i>
						</a>
						<sm>DOWNLOAD PDF</sm>
					</p>
				</div>

			</div>
			<!--/.row -->
		</div>
		<!--/.container -->
	</div>
	<!--/ #intro -->


	<section id="resume" name="resume"></section>
	<!--EDUCATION DESCRIPTION -->
	<div class="container desc">
		<div class="row">

			<div class="col-lg-2 col-lg-offset-1">
				<h5>EDUCATION</h5>
      </div> 
      ${educationSection}

		</div>
		<!--/.row -->
		<br>
		<hr>
	</div>
	<!--/.container -->


	<!--WORK DESCRIPTION -->
	<div class="container desc">
		<div class="row">
			<div class="col-lg-2 col-lg-offset-1">
				<h5>WORK</h5>
			</div>
    ${experienceSection}

		</div>
		<!--/.row -->
		<br>
		<hr>
	</div>
	<!--/.container -->

	<!--SKILLS DESCRIPTION -->
	<div id="skillswrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-2 col-lg-offset-1">
					<h5>SKILLS</h5>
        </div>
        ${skillSection}
			</div>
			<!--/.row -->
			<br>
		</div>
		<!--/.container -->
	</div>
	<!--/ #skillswrap -->



	<section id="work" name="work"></section>
	<!--PORTFOLIO DESCRIPTION -->
	<div class="container desc">
		<div class="row">
			<div class="col-lg-2 col-lg-offset-1">
				<h5>PORTFOLIO</h5>
			</div>
      ${portfolioSection}
		</div>
		<!--/.row -->
		<br>
		<br>
	</div>
	<!--/.container -->



	<section id="contact" name="contact"></section>
	<!--FOOTER DESCRIPTION -->
	<div id="footwrap">
		<div class="container">
			<div class="row">

				<div class="col-lg-2 col-lg-offset-1">
					<h5>contact</h5>
				</div>
				<div class="col-lg-6">
					<p>
						<t>Email</t>
						<br/> ${contact ? contact.email : ''}
						<br/>
					</p>
					<p>
						<t>Address</t>
            ${contact ? contact.address : ''}
						<br/>
					</p>
					<p>
						<t>Phone</t>
						<br/> ${contact ? contact.phone : ''}
						<br/>
					</p>
				</div>
				<div class="col-lg-3">
					<p>
						<sm>SOCIAL LINKS</sm>
					</p>
					<p>
						<a href="#">
							<i class="icon-linkedin">${contact ? contact.linkedin : ''}</i>
						</a>
						<a href="#">
							<i class="icon-github">${contact ? contact.github : ''}</i>
						</a>

					</p>
				</div>
			</div>
			<!--/.row -->
		</div>
		<!--/.container -->
	</div>
	<!--/ #footer -->

	<div id="c">
		<div class="container">
			<p>Created by
				<a href="http://www.blacktie.co">BLACKTIE.CO</a>
			</p>

		</div>
  </div>
	<!-- Bootstrap 3.0.2 -->
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>


</body>
</html>`
  )
}
export default Montreal;