import React from 'react';

const Montreal = ({ inputs }) => {
  return (
`<!DOCTYPE html>
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
								<a class="smoothScroll" href="#contact" title="Contact">
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
					<h1>${props.name}</h1>
					<h3>${props.jobtitle} | ${props.email}</h3>
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
					<p>{props.bio}</p>
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
      ${inputs.education.map((education, i) => {
        return 	(		
          `<div class="col-lg-6" ${i!==1 ? "col-lg-offset-3" : null}>
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
              <imp>
              </imp>
            </p>
          </div>`)
      })} 

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
    ${props.work.map((work, i) => {
			return (
      `<div class="col-lg-6" ${i!==1 ? "col-lg-offset-3" : null}>
				<p>
					<t>${work.title}</t>
					<br/>${work.company}
					<br/>
				</p>
				<p>
					<more>${work.description}
					</more>
				</p>
			</div>
			<div class="col-lg-3">
				<p>
					<sm>${work.start} - ${work.end}</sm>
				</p>
			</div>`)   
    })}

		</div>
		<!--/.row -->
		<br>
		<hr>
	</div>
	<!--/.container -->


	<!--AWARDS DESCRIPTION -->
	<div class="container desc">
		<div class="row">
			<div class="col-lg-2 col-lg-offset-1">
				<h5>AWARDS</h5>
			</div>
			<div class="col-lg-6">
				<p>
					<t>Best Web Design</t>
					<br/> Black Tie Site
					<br/>
				</p>
			</div>
			<div class="col-lg-3">
				<p>
					<sm>NOVEMBER 2013</sm>
				</p>
			</div>

			<div class="col-lg-6 col-lg-offset-3">
				<p>
					<t>Designer of the Year</t>
					<br/> Awwwards Site
				</p>
				<p>
					<more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
					</more>
				</p>
			</div>
			<div class="col-lg-3">
				<p>
					<sm>2013</sm>
				</p>
			</div>

		</div>
		<!--/.row -->
		<br>
	</div>
	<!--/.container -->


	<!--SKILLS DESCRIPTION -->
	<div id="skillswrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-2 col-lg-offset-1">
					<h5>SKILLS</h5>
				</div>
				<div class="col-lg-3 centered">
					<canvas id="javascript" height="130" width="130"></canvas>
					<p>Javascript</p>
					<br>
					<script>
						var doughnutData = [{
								value: 70,
								color: "#1abc9c"
							},
							{
								value: 30,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 centered">
					<canvas id="bootstrap" height="130" width="130"></canvas>
					<p>Bootstrap</p>
					<br>
					<script>
						var doughnutData = [{
								value: 90,
								color: "#1abc9c"
							},
							{
								value: 10,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 centered">
					<canvas id="wordpress" height="130" width="130"></canvas>
					<p>Wordpress</p>
					<br>
					<script>
						var doughnutData = [{
								value: 65,
								color: "#1abc9c"
							},
							{
								value: 35,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>

				<div class="col-lg-3 col-lg-offset-3 centered">
					<canvas id="html" height="130" width="130"></canvas>
					<p>HTML/CSS</p>
					<br>
					<script>
						var doughnutData = [{
								value: 80,
								color: "#1abc9c"
							},
							{
								value: 20,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 centered">
					<canvas id="photoshop" height="130" width="130"></canvas>
					<p>Photoshop</p>
					<br>
					<script>
						var doughnutData = [{
								value: 70,
								color: "#1abc9c"
							},
							{
								value: 30,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 centered">
					<canvas id="illustrator" height="130" width="130"></canvas>
					<p>Illustrator</p>
					<br>
					<script>
						var doughnutData = [{
								value: 50,
								color: "#1abc9c"
							},
							{
								value: 50,
								color: "#ecf0f1"
							}
						];
						var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>

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
			<div class="col-lg-6">
				<p>
					<img class="img-responsive" src="assets/img/port01.jpg" alt="">
				</p>
			</div>
			<div class="col-lg-3">
				<p>CANALS OF ENGLAND</p>
				<p>
					<more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
						<br/>
						<br/>
						<sm>
							<i class="icon-tag"></i> design</sm>
					</more>
				</p>
			</div>

			<div class="col-lg-6 col-lg-offset-3">
				<p>
					<img class="img-responsive" src="assets/img/port02.jpg" alt="">
				</p>
			</div>
			<div class="col-lg-3">
				<p>SANKEY</p>
				<p>
					<more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
						<br/>
						<br/>
						<sm>
							<i class="icon-tag"></i> front-end</sm>
					</more>
				</p>
			</div>

			<div class="col-lg-6 col-lg-offset-3">
				<p>
					<img class="img-responsive" src="assets/img/port03.jpg" alt="">
				</p>
			</div>
			<div class="col-lg-3">
				<p>WE GROW</p>
				<p>
					<more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
						<br/>
						<br/>
						<sm>
							<i class="icon-tag"></i> web design</sm>
					</more>
				</p>
			</div>

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
					<h5>CONTACT</h5>
				</div>
				<div class="col-lg-6">
					<p>
						<t>Email</t>
						<br/> {props.email}
						<br/>
					</p>
					<p>
						<t>Address</t>
            {props.address}
						<br/>
					</p>
					<p>
						<t>Phone</t>
						<br/> {props.phone}
						<br/>
					</p>
				</div>
				<div class="col-lg-3">
					<p>
						<sm>SOCIAL LINKS</sm>
					</p>
					<p>
						<a href="#">
							<i class="icon-linkedin">{props.linkedin}</i>
						</a>
						<a href="#">
							<i class="icon-github">{props.github}</i>
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


</body>`
  )
}