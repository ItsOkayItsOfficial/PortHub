export const LondonPreview = () => `<!DOCTYPE html>
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
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="https://rawgit.com/ItsOkayItsOfficial/project3/master/templates/london/assets/css/main.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<!-- Google fonts -->
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>

</head>

<body>


	<div class="container">
		<div class="col-lg-6 col-lg-offset-3">

			<!-- ===== vCard Navigation ===== -->
			<div class="row w">
				<div class="col-md-4">
					<img class="img-responsive" src="assets/img/avatar.jpg" alt="">
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
							<h3>Victoria Wallberg</h3>
							<h5>Web Designer</h5>
							<hr>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<p>Has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it.</p>
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
								<grey>Black Tie Corp.</grey> | June 2013 - Actual.
								<br/>
								<grey>Other Corp.</grey> | January 2011 - May 2013.
								<br/>
							</p>

							<h4>
								<i class="icon-file-text-alt"></i> Education</h4>
							<p class="sm">
								<grey>Web Designer</grey> | Greenville University.
								<br/>
								<grey>Business Master</grey> | Loyal Univesrity.
								<br/>
							</p>

						</div>
						<!-- Tab Profile -->

						<!-- ===== Third Tab ===== -->
						<div class="tab-pane" id="portfolio">
							<div class="row">
								<div class="col-xs-6 centered">
									<img class="img-responsive" src="assets/templates/london/assets/img/p01.png" alt="">
									<a href="#">
										<h6>
											<i class="icon-link"></i> Project Name</h6>
									</a>
								</div>
								<!-- col-xs-6 -->
								<div class="col-xs-6 centered">
									<img class="img-responsive" src="assets/templates/london/assets/img/p02.png" alt="">
									<a href="#">
										<h6>
											<i class="icon-link"></i> Project Name</h6>
									</a>
								</div>
								<!-- col-xs-6 -->
							</div>
							<!-- row -->

							<div class="row">
								<br>
								<div class="col-xs-6 centered">
									<img class="img-responsive" src="assets/templates/london/assets/img/p03.png" alt="">
									<a href="#">
										<h6>
											<i class="icon-link"></i> Project Name</h6>
									</a>
								</div>
								<!-- col-xs-6 -->
								<div class="col-xs-6 centered">
									<img class="img-responsive" src="assets/templates/london/assets/qimg/p04.png" alt="">
									<a href="#">
										<h6>
											<i class="icon-link"></i> Project Name</h6>
									</a>
								</div>
								<!-- col-xs-6 -->
							</div>
							<!-- row -->
						</div>
						<!-- /Tab Portfolio -->

						<!-- ===== Fourth Tab ===== -->
						<div class="tab-pane" id="contact">
							<h4>Contact Information</h4>
							<hr>
							<div class="row">
								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-globe"></i> - BlackTie.co
										<br/>
										<i class="icon-envelope"></i> - victoria@blacktie.co
									</p>
								</div>
								<!-- col-xs-6 -->

								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-phone"></i> - +44 2009-4839
										<br/>
										<i class="icon-apple"></i> - 902 3940-4439
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
										<i class="icon-facebook"></i> - Vicky.Wallberg
										<br/>
										<i class="icon-tumblr"></i> - Love-Vicky-Site
									</p>
								</div>
								<!-- col-xs-6 -->

								<div class="col-xs-6">
									<p class="sm">
										<i class="icon-dribbble"></i> - Vicoooria
										<br/>
										<i class="icon-twitter"></i> - @BlackTie_co
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


	<!-- jQuery 1.1.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Bootstrap 3.0.2 -->
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<!-- DOM Script -->
	<script>
		$('#myTab a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	</script>

</body>

</html>`