import React from 'react';


export const Oslo = ({contact, experience, education, skills, portfolio, clicked }) => {
  let portfolioSection = portfolio.map((portfolio, i) => {
    const row = i === 0 || i===3  ? `<div class='row mt'>` : '';
    const rowEnd = i === 2 || i === 5 ? '</div>' : '';

    return i > 5 ? null : (
        `${row}
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
            <div class="project-wrapper">
              <div class="project">
                <div class="photo-wrapper">
                  <div class="photo">
                    <a class="fancybox" target='_blank' href="${portfolio.url}">
                      <img class="img-responsive" src="${portfolio.img}" alt="${portfolio.title}">
                    </a>
                  </div>
                  <div class="overlay"></div>
                </div>
              </div>
              </div>
              <h3>${portfolio.title}</h3>
              <p>${portfolio.description}</p>
            </div>
        ${rowEnd}`
    )
  })
  portfolioSection = portfolioSection.join('');

  let skillSection = skills.map((skill, i) => {
    const row = i === 0 || i===4 ? `<div class='row centered'>` : '';
    const rowEnd = i === 3 || i === 7 ? '</div>' : '';
    return i > 7 ? null : (
        `${row}<div class="col-lg-3 mt">
					<canvas id="${skill.skill.trim().replace(/\s/g, '')}" height="130" width="130"></canvas>
					<p>${skill.skill.trim()}</p>
					<br>
					<script>
						var doughnutData = [{
								value: ${skill.rating},
								color: "#74cfae"
							},
							{
								value: ${100-skill.rating},
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("${skill.skill.trim().replace(/\s/g, '')}").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>${rowEnd}`
    )
  })
  skillSection = skillSection.join('');
  const html =   `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Oslo Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="assets/ico/favicon.png">

	<title>${contact ? contact.firstName + ' ' + contact.lastName : ''}</title>

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
				<a href="index.html#home">${contact ? contact.firstName + ' ' + contact.lastName : ''}</a>
			</h1>
			<i class="fa fa-times menu-close"></i>
			<a href="#home" class="nav-link">Home</a>
			<a href="#about" class="nav-link">About</a>
			<a href="#portfolio" class="nav-link">Portfolio</a>
			<a href="#skills" class='nav-link'>Skills</a>
			<a href="#contact" class="nav-link">Contact</a>

			<a target='_blank' href="${contact ? contact.linkedin : ''}">
				<i class="fa fa-linkedin"></i>
			</a>
			<a target='_blank' href="${contact ? contact.github : ''}">
				<i class="fa fa-github"></i>
			</a>
			<a target='_top' href="mailto:${contact ? contact.email : ''}">
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
          <h1>${contact ? contact.firstName + ' ' + contact.lastName : ''}</h1>
					<h2 style='font-size:24px; color:white;text-shadow: 2px 2px black'><strong>${contact && contact.currentTitle ? contact.currentTitle.toUpperCase() : ''} | ${contact ? contact.email : ''}</strong></h2>
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
					<img class="img-responsive" src="${contact ? contact.profilePicture : ''}">
					<p>${contact ? contact.firstName + ' ' + contact.lastName : ''}</p>
					<div class="name-label"></div>
				</div>
				<!-- /col-lg-4-->
				<div class="col-lg-8 name-desc">
					<h2>${contact ? contact.currentTitle : ''}</h2>
					<div class="name-zig"></div>

					<div class="col-md-12">
						<p>${contact ? contact.bio : ''}</p>
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
			${portfolioSection}
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
      ${skillSection}
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
						<small>${contact ? contact.address : ''}
						</small>
					</p>
					<p>
						<small>${contact ? contact.phone : ''}
							<br/> Mail. ${contact ? contact.email : ''}
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
  return (
    <button className="btn btn-success sitebtn" onClick={() => clicked(html)}>Submit</button>
  )
}