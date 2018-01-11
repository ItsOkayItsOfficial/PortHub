import React from 'react';
import './Websites.css';

export const London = ({contact, experience, education, skills, portfolio, clicked }) => {

  let portfolioSection = portfolio.map((portfolio, i) => {
       const row = i===0||i===2 ? '<div class="row">' : '';
       const rowEnd = i===1||i===3 ? '</div>' : '';
       const br = i===2 ? '<br>' : '';
        return i > 3 ? null : (
          `${row}${br}<div class="col-xs-6 centered">
            <img class="img-responsive" src="${portfolio && portfolio.img ? portfolio.omg : ''}" alt="${portfolio && portfolio.title ? portfolio.title : ''}">
            <a href="${portfolio && portfolio.url ? portfolio.url : ''}">
              <h6>
                <i class="icon-link"></i>${portfolio && portfolio.title ? portfolio.title : ''}</h6>
            </a>
          </div>${rowEnd}`
        )
      })
      portfolioSection = portfolioSection.join('');

  let experienceSection = experience.map((experience, i) => {
       //const offset = i!== 0 ? "col-lg-offset-3" : '';
			return i > 1 ? null : (
      `<grey>${experience && experience.employer ? experience.employer : ''}</grey> | ${experience && experience.startDate ? experience.startDate : ''} - ${experience && experience.endDate ? experience.endDate : ''}
			<br/>`)   
    })

  let educationSection = education.map((education, i) => {
        return 	i > 1 ? null : (		
          `<grey>${education && education.major ? education.major : ''}</grey> | ${education && education.schoolName ? education.schoolName : ''}
					<br/>`)
      })
      educationSection = educationSection.join('');

const html = 
`<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="London Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="assets/ico/favicon.png">

	<title>London</title>

	<!-- Bootstrap 3.0.2 CSS -->
	<link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="https://rawgit.com/ItsOkayItsOfficial/project3/app/client/public/assets/templates/london/assets/css/main.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<!-- Google fonts -->
	<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>

</head>

<body>
<span class='wrapper'></span>

	<div class="container">
		<div class="col-lg-6 col-lg-offset-3">

			<!-- ===== vCard Navigation ===== -->
			<div class="row w">
				<div class="col-md-4">
					<img class="img-responsive" src="${contact ? contact.profilePicture : ''}" alt="${contact ? contact.firstName : ''}">
					<ul class="nav nav-tabs nav-stacked" id="myTab">
						<li class="active">
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#profile">Profile</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				<!-- col-md-4 -->

				<!-- ===== vCard Content ===== -->
				<div class="col-md-8">
					<div class="tab-content">

						<!-- ===== First Tab ===== -->
						<div class="tab-pane active" id="about">
							<h3>${contact ? contact.firstName + ' ' + contact.lastName : ''}</h3>
							<h5>${contact ? contact.currentTitle : ''}</h5>
							<hr>
							<p>${contact ? contact.bio: ''}</p>
							<p class="pull-right red">
								<i class="icon-heart"></i>
							</p>
						</div>
						<!-- tab about -->

						<!-- ===== Second Tab ===== -->
						<div class="tab-pane" id="profile">
							<h4>
								<i class="icon-briefcase"></i> Job Experience</h4>
              <p class="sm">
              ${experienceSection}
							</p>

							<h4>
								<i class="icon-file-text-alt"></i> Education</h4>
							<p class="sm">
              ${educationSection}
							</p>
						</div>
						<!-- Tab Profile -->

						<!-- ===== Third Tab ===== -->
            <div class="tab-pane" id="portfolio">
            ${portfolioSection}
						</div>
						<!-- /Tab Portfolio -->

						<!-- ===== Fourth Tab ===== -->
						<div class="tab-pane" id="contact">
							<h4>Contact Information</h4>
							<hr>
							<div class="row">
								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-globe"></i> - ${contact ? contact.site : ''}
										<br/>
										<i class="icon-envelope"></i> - ${contact ? contact.email : ''}
									</p>
								</div>
								<!-- col-xs-6 -->

								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-phone"></i> - ${contact ? contact.phone : ''}
										<br/>
									</p>
								</div>
								<!-- col-xs-6 -->
							</div>
							<!-- row -->

							<h4>Social Links</h4>
							<hr>
							<div class="row">
								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-github"></i> - ${contact ? contact.github : ''}
										<br/>
										<i class="icon-linkedin"></i> - ${contact ? contact.linkedin : ''}
									</p>
								</div>
								<!-- col-xs-6 -->

								<div class="col-xs-6">
									<p class="sm">
										<i></i> - ${contact ? contact.site : ''}
										<br/>
									</p>
								</div>
								<!-- col-xs-6 -->
							</div>
							<!-- row -->
						</div>
						<!-- Tab Contact -->

					</div>
					<!-- Tab Content -->
				</div>
				<!-- col-md-8 -->
			</div>
			<!-- row w -->
		</div>
		<!-- col-lg-6 -->
	</div>
	<!-- /.container -->

<style>
.wrapper {position:fixed; top: 0; left: 0; height: 100%; width: 100%; background-image: url(${contact ? contact.profilePicture : ''}); background-size: cover; opacity: 0.5}
</style>
	<!-- jQuery 1.1.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Bootstrap 3.0.2 -->
	<script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<!-- DOM Script -->
	<script>
		$('#myTab a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	</script>

</body>

</html>`
      return (
        <button className="btn btn-success sitebtn" onClick={() => clicked(html)}>Submit</button>
      )
}
