export const OsloPreview = () => `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Oslo Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="assets/ico/favicon.png">

	<title>Daniel Miller</title>

	<!-- Bootstrap 3.0.2 CSS -->
	<link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="https://rawgit.com/ItsOkayItsOfficial/project3/app/client/public/assets/templates/oslo/assets/css/style.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<!-- FancyBox 2.1.5 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" rel="stylesheet" />
	<!-- jQuery 1.10.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Chart.js 1.0.1 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1/Chart.min.js"></script>
  
</head>

<body data-spy="scroll" data-offset="0" data-target="#theMenu">

	<!-- Menu -->
	<nav class="menu" id="theMenu">
		<div class="menu-wrap">
			<h1 class="logo">
				<a href="index.html#home">Cody Crozier</a>
			</h1>
			<i class="fa fa-times menu-close"></i>
			<a href="#home" class="nav-link">Home</a>
			<a href="#about" class="nav-link">About</a>
			<a href="#portfolio" class="nav-link">Portfolio</a>
			<a href="#skills" class='nav-link'>Skills</a>
			<a href="#contact" class="nav-link">Contact</a>

			<a target='_blank' href="linked.com">
				<i class="fa fa-linkedin"></i>
			</a>
			<a target='_blank' href="https://github.com/">
				<i class="fa fa-github"></i>
			</a>
			<a target='_top' href="mailto:Example@gmail.com">
				<i class="fa fa-envelope"></i>
			</a>
		</div>

		<!-- Menu button -->
		<div id="menuToggle">
			<i class="fa fa-bars"></i>
		</div>
	</nav>

	<section id="home" name="home"></section>
	<div id="headerwrap">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
          <h1>Daniel Miller</h1>
					<h2 style='font-size:24px; color:white;text-shadow: 2px 2px black'><strong>Web Developer | Example@gmail.com</strong></h2>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /headerwrap -->

	<section id="about" name="about"></section>
	<div id="aboutwrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 name">
					<img class="img-responsive" src="assets/templates/oslo/assets/img/pic.png">
					<p>Daniel Miller</p>
					<div class="name-label"></div>
				</div>
				<!-- /col-lg-4-->
				<div class="col-lg-8 name-desc">
					<h2>WEB DEVELOPER</h2>
					<div class="name-zig"></div>

					<div class="col-md-12">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					</div>

				</div>
				<!-- /col-lg-8-->

			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /aboutwrap -->

	<!-- ABOUT SEPARATOR -->
	<div class="sep about" data-stellar-background-ratio="0.5"></div>

	<!-- PORTFOLIO SECTION -->
	<section id="portfolio" name="portfolio"></section>
	<div id="portfoliowrap" style='text-align:center'>
    <div class="container">
			<h1>SOME OF MY LATEST WORKS</h1>
			<div class='row mt'>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/01.jpg" alt="Port 1">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 1</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/02.jpg" alt="Port 2">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 2</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/03.jpg" alt="Port 3">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 3</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div><div class='row mt'>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/04.jpg" alt="Port 4">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 4</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/05.jpg" alt="Port 5">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 5</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="port.com">
                      <img class="img-responsive" src="assets/templates/lawrence/assets/img/06.jpg" alt="Port 6">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>Port 6</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
		</div>
		<!-- /container -->
	</div>
	<!-- /Portfoliowrap -->

	<!-- PORTFOLIO SEPARATOR -->
	<div class="sep portfolio" data-stellar-background-ratio="0.5"></div>


	<!-- SERVICE SECTION -->
	<section id="skills" name="skills"></section>
	<div id="servicewrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-8-offset-2 centered">
					<h1>AN OVERVIEW OF MY SKILLS</h1>
					<h3>I'll do all the work for you</h3>
				</div>
				<!-- /col-lg-8 -->
			</div>
			<!-- /row -->
      <div class='row centered'><div class="col-lg-3 mt">
					<canvas id="Javascript" height="130" width="130"></canvas>
					<p>Javascript</p>
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
						var myDoughnut = new Chart(document.getElementById("Javascript").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="HTML" height="130" width="130"></canvas>
					<p>HTML</p>
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
						var myDoughnut = new Chart(document.getElementById("HTML").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="CSS" height="130" width="130"></canvas>
					<p>CSS</p>
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
						var myDoughnut = new Chart(document.getElementById("CSS").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="Jquery" height="130" width="130"></canvas>
					<p>Jquery</p>
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
						var myDoughnut = new Chart(document.getElementById("Jquery").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div></div><div class='row centered'><div class="col-lg-3 mt">
					<canvas id="React" height="130" width="130"></canvas>
					<p>React</p>
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
						var myDoughnut = new Chart(document.getElementById("React").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="Bootstrap" height="130" width="130"></canvas>
					<p>Bootstrap</p>
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
						var myDoughnut = new Chart(document.getElementById("Bootstrap").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="Node" height="130" width="130"></canvas>
					<p>Node</p>
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
						var myDoughnut = new Chart(document.getElementById("Node").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div><div class="col-lg-3 mt">
					<canvas id="Photoshop" height="130" width="130"></canvas>
					<p>Photoshop</p>
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
						var myDoughnut = new Chart(document.getElementById("Photoshop").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div></div>
		</div>
		<!-- /container -->
	</div>
	<!-- /servicewrap -->

	<!-- SERVICE SECTION -->
	<section id="contact" name="contact"></section>
	<!-- CONTACT SEPARATOR -->
	<div class="sep contact" data-stellar-background-ratio="0.5"></div>

	<div id="contactwrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">

					<p>
						<small>200 N. Pennsylvania Ave.
						</small>
					</p>
					<p>
						<small>4802424367
							<br/> Mail. Example@gmail.com
					</p>

				</div>
			</div>
			<!--/row -->
		</div>
		<!-- /container -->
	</div>

	<!-- jQuery 1.11.0 -->
	<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
	<!-- Classie 1.0.1 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js"></script>
	<!-- Bootstrap 3.0.2 -->
	<script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<!-- StellerJS 0.6.2 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js"></script>
	<!-- FancyBox JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
	<!-- DOM Script -->
	<script>
		$(function () {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 40
			});
    });
    $('.nav-link, .nav-logo').on('click', function (event) {
      event.preventDefault()

      $('html, body').animate(
        {scrollTop: $(this.hash).offset().top},
        {duration: 1000, easing: 'swing'}
      );
    });
  (function(){

        // Menu settings
        $('#menuToggle, .menu-close').on('click', function(){
          $('#menuToggle').toggleClass('active');
          $('body').toggleClass('body-push-toleft');
          $('#theMenu').toggleClass('menu-open');
        });


  })(jQuery)
	</script>
	<!-- DOM Script -->
	<script type="text/javascript">
		$(function () {
			//    fancybox
			jQuery(".fancybox").fancybox();
		});
	</script>

</body>

</html>`

