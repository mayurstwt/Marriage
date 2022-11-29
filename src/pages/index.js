import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Text, Image, LinkBox, Hr, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Your wedding will be perfect
			</title>
			<meta name={"description"} content={"Our talented team will not only document your wedding day, we will help you curate a day that is uniquely you."} />
			<meta property={"og:title"} content={"Your wedding will be perfect"} />
			<meta property={"og:description"} content={"Our talented team will not only document your wedding day, we will help you curate a day that is uniquely you."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/wedding%20template.png?v=2021-10-05T11:13:30.358Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart32.png?v=2021-10-05T11:11:03.451Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart152.png?v=2021-10-05T11:11:13.507Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/615c316435c5c8001f775568/images/openmoji_couple-with-heart270.png?v=2021-10-05T11:11:22.612Z"} />
			<meta name={"msapplication-TileColor"} content={"#30251F"} />
		</Helmet>
		<Section padding="47px 0 47px 0">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				width="40%"
				sm-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Link
					href="/"
					font="400 28px/1.5 --fontFamily-googleMarcellus"
					color="--secondary"
					text-decoration-line="initial"
					md-font="400 24px/1.5 --fontFamily-googleMarcellus"
				>
					Jane Apisade
				</Link>
			</Box>
			<Box
				empty-border-width="1px"
				width="60%"
				justify-content="flex-end"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				align-items="center"
				empty-min-width="64px"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Button Text" md-color="--coralD1" md-font="--lead" />
					<Override slot="Button Text :closed">
						Menu
					</Override>
					<Override slot="Button Icon" md-color="--coralD1" />
					<Override slot="Content" background="none" padding="0px 0px 0px 0px" />
					<Override slot="Button Text :open">
						Menu
					</Override>
					<Box
						justify-content="space-between"
						md-flex-direction="column"
						md-align-items="center"
						md-background="--color-pageBg"
						md-padding="20px 0px 20px 0px"
						display="flex"
					>
						<Link
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
						>
							About
						</Link>
						<Link
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
						>
							Portfolio
						</Link>
						<Link
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
						>
							Wedding
						</Link>
						<Link
							href="#"
							color="--darkL2"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
						>
							Planning
						</Link>
						<Link
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--darkL2"
							font="--lead"
						>
							Contact
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="68px 0 68px 0" md-padding="0px 0 28px 0">
			<Override slot="SectionContent" md-flex-direction="column" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-color="LightGray"
				md-position="relative"
				lg-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				width="50%"
				flex-direction="column"
				padding="0px 120px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				empty-border-style="solid"
				margin="0px 60px 0px 0px"
				display="flex"
				align-items="flex-start"
				empty-min-height="64px"
				justify-content="space-between"
				md-width="100%"
			>
				<Text
					md-width="80%"
					sm-width="100%"
					margin="0px 0px 40px 0px"
					font="--headline1"
					color="--secondary"
					lg-font="normal 500 50px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					md-font="normal 500 40px/1.3 &quot;Marcellus&quot;, serif"
				>
					Your wedding is our top priority
				</Text>
				<Text
					margin="0px 0px 60px 0px"
					font="--lead"
					color="--darkL2"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
					md-margin="0px 0px 32px 0px"
				>
					Best wedding photography and videography services that will give you authentic memories of one of the most important moments in your life.
				</Text>
				<LinkBox
					sm-top="745px"
					border-color="--color-secondary"
					border-radius="500%"
					hover-color="--pageBg"
					href="#work"
					hover-opacity=".7"
					padding="0px 0px 0px 0px"
					md-bottom="0px"
					position="relative"
					color="--secondary"
					md-width="100%"
					md-top="705px"
					md-min-height="110px"
					align-items="center"
					md-position="absolute"
					sm-width="100%"
				>
					<Image height="32px" src="https://uploads.quarkly.io/615c316435c5c8001f775568/images/arrowbutton.svg?v=2021-11-01T20:27:13.301Z" position="absolute" width="32px" />
					<Components.RotateImage>
						<Image src="https://uploads.quarkly.io/615c316435c5c8001f775568/images/button.svg?v=2021-11-01T20:22:49.058Z" width="168px" height="168px" />
					</Components.RotateImage>
				</LinkBox>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				md-margin="0px 0px 0px 0px"
				md-width="100%"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				margin="0px 0px 0px 60px"
			>
				<Image
					src="https://images.unsplash.com/photo-1513725673171-537abba17912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					object-fit="cover"
					lg-min-height="481px"
					max-height="616px"
					width="100%"
					object-position="0% 70%"
					md-max-height="410px"
					md-min-height="none"
					md-margin="0px 0px 150px 0px"
				/>
			</Box>
		</Section>
		<Section padding="68px 0 68px 0" md-padding="0px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" />
			<Box
				empty-min-width="64px"
				align-items="flex-start"
				lg-padding="0px 0px 0px 0px"
				md-width="100%"
				empty-min-height="64px"
				empty-border-width="1px"
				margin="0px 60px 0px 0px"
				display="flex"
				md-position="relative"
				lg-margin="0px 0px 0px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				flex-direction="column"
				justify-content="space-between"
			>
				<Image
					width="100%"
					object-fit="cover"
					margin="0px 0px 40px 0px"
					min-height="557px"
					md-max-height="388px"
					md-min-height="none"
					src="https://images.unsplash.com/photo-1591700331354-f7eea65d1ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
				/>
				<Text
					margin="0px 0px 40px 0px"
					font="--headline2"
					color="--secondary"
					lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
				>
					When you contact us, we answer
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--darkL2"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
					md-margin="0px 0px 40px 0px"
				>
					Got questions? We are always open throughout business hours to ensure that you receive our services when you need them. Call us, email, or pop by our studio! You are always welcome!
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				md-width="100%"
				md-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				width="50%"
				margin="0px 0px 0px 60px"
				empty-min-height="64px"
			>
				<Text
					font="--headline2"
					color="--secondary"
					lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					margin="0px 0px 40px 0px"
				>
					Three topnotch photographers, two filmmakers, and one planner
				</Text>
				<Text md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif" margin="0px 0px 40px 0px" font="--lead" color="--darkL2">
					Our amazing, experienced team will not only chronicle your wedding day but also help you make it unique and unforgettable. No matter if you're having your wedding on the beach or at a restaurant — we've got you covered.
				</Text>
				<Image
					md-min-height="none"
					src="https://images.unsplash.com/photo-1611274294780-16c4344fd2ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
					width="100%"
					object-fit="cover"
					object-position="0% 70%"
					min-height="400px"
					md-max-height="329px"
				/>
			</Box>
		</Section>
		<Section background="--color-sectionBg" padding="80px 0 80px 0" md-padding="40px 0 40px 0">
			<Text
				margin="0px 0px 40px 20%"
				font="--headline2"
				color="--secondary"
				lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
				lg-margin="0px 0px 24px 15%"
				md-margin="0px 0px 24px 0px"
			>
				We care about your experience — not just your photos
			</Text>
			<Image
				object-fit="cover"
				margin="0px 0px 40px 0px"
				max-height="600px"
				lg-max-height="322px"
				lg-margin="0px 0px 24px 0px"
				src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
				width="100%"
			/>
			<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2" max-width="540px">
				We'll support you from the minute you contact us and at every moment on your wedding day. Need advice or just want to share your ideas? We are here for you!
			</Text>
		</Section>
		<Section padding="160px 0 50px 0" lg-padding="100px 0 50px 0" sm-padding="40px 0 40px 0" md-padding="40px 0 50px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text font="--headline2" color="--secondary" margin="0px 0px 20px 0px" lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif">
					Real people. Real wedding stories.
				</Text>
				<Text
					lg-margin="0px 0px 40px 0px"
					font="--lead"
					color="--darkL2"
					margin="0px 0px 80px 0px"
					width="50%"
					lg-width="65%"
					sm-width="100%"
				>
					Enjoy our wedding portfolio where each wedding is as stunning and real as the emotions in the photos shot by one of our photographers.
				</Text>
				<Box
					empty-border-color="LightGray"
					display="flex"
					margin="0px 0px 64px 0px"
					md-flex-direction="column"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Box
						empty-border-color="LightGray"
						md-border-style="none"
						empty-min-height="64px"
						empty-border-width="1px"
						width="55%"
						margin="0px 74px 0px 0px"
						empty-border-style="solid"
						border-width="0px 0px 1px 0px "
						border-style="solid"
						md-width="100%"
						empty-min-width="64px"
						border-color="rgba(224, 89, 119, 0.5)"
						lg-margin="0px 32px 0px 0px"
						md-margin="0px 32px 30px 0px"
					>
						<Image
							max-height="288px"
							lg-min-height="308px"
							lg-max-height="none"
							md-margin="0px 0px 0px 0px"
							src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
							width="100%"
							object-fit="cover"
							margin="0px 0px 40px 0px"
						/>
					</Box>
					<Box
						padding="0px 0px 0px 0px"
						border-width="0px 0px 1px 0px "
						border-style="solid"
						empty-min-height="64px"
						empty-border-color="LightGray"
						width="45%"
						border-color="rgba(224, 89, 119, 0.5)"
						md-width="100%"
						empty-min-width="64px"
						empty-border-width="1px"
						empty-border-style="solid"
					>
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Alisia + Jacob
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							A dazzling wedding in Tampa
						</Text>
						<Text margin="0px 0px 40px 0px" font="--lead" color="--darkL2" lg-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif">
							It was so much fun.  Alicia and Jacob's love story is fantastic, and the admiration and excitement in their eyes at the wedding ceremony was clear for everyone to see.  They decided to start the ceremony with a beautiful song sung by the bride. It was so touching that I burst into tears and couldn't take my eyes off the bride and groom.  You could feel the excitement throughout the day, which made photographing it both emotional and rewarding.
						</Text>
					</Box>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					margin="0px 0px 64px 0px"
					md-flex-direction="column"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Box
						empty-border-width="1px"
						empty-border-style="solid"
						border-color="rgba(224, 89, 119, 0.5)"
						lg-margin="0px 32px 0px 0px"
						empty-border-color="LightGray"
						md-border-style="none"
						empty-min-width="64px"
						empty-min-height="64px"
						width="55%"
						border-width="0px 0px 1px 0px "
						md-width="100%"
						border-style="solid"
						margin="0px 74px 0px 0px"
						md-margin="0px 32px 30px 0px"
					>
						<Image
							src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
							width="100%"
							object-fit="cover"
							margin="0px 0px 40px 0px"
							max-height="288px"
							object-position="0% 0%"
							lg-min-height="308px"
							md-margin="0px 0px 0px 0px"
						/>
					</Box>
					<Box
						empty-border-color="LightGray"
						width="45%"
						border-width="0px 0px 1px 0px "
						border-style="solid"
						border-color="rgba(224, 89, 119, 0.5)"
						empty-min-width="64px"
						empty-min-height="64px"
						empty-border-width="1px"
						empty-border-style="solid"
						padding="0px 0px 0px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Ann + Robert
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							A vibrant and fascinating wedding in Orlando
						</Text>
						<Text color="--darkL2" lg-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif" margin="0px 0px 40px 0px" font="--lead">
							Ann and Robert's wedding day was well-thought-out, and my favorite detail was Robert's present to his bride.  They had to be apart for a while dealing with some issues in separate countries. During that month, Robert wrote a letter to Ann every day.  Right after Ann had finished getting dressed on the morning of the wedding, Robert's mother brought a pile of those letters to her.  Ann's reaction to the gift was unforgettable and the photos capturing that moment are amazing!
						</Text>
					</Box>
				</Box>
				<Box
					md-flex-direction="column"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					margin="0px 0px 0px 0px"
				>
					<Box
						empty-min-width="64px"
						empty-border-color="LightGray"
						border-color="rgba(224, 89, 119, 0.5)"
						md-width="100%"
						empty-min-height="64px"
						empty-border-width="1px"
						empty-border-style="solid"
						width="55%"
						border-width="0px 0px 1px 0px "
						border-style="solid"
						margin="0px 74px 0px 0px"
						lg-margin="0px 32px 0px 0px"
						md-margin="0px 32px 30px 0px"
						md-border-style="none"
					>
						<Image
							width="100%"
							object-fit="cover"
							margin="0px 0px 40px 0px"
							max-height="288px"
							object-position="0% 0%"
							lg-min-height="308px"
							md-margin="0px 0px 0px 0px"
							src="https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
						/>
					</Box>
					<Box
						empty-border-width="1px"
						empty-border-style="solid"
						border-style="solid"
						md-width="100%"
						padding="0px 0px 0px 0px"
						border-width="0px 0px 1px 0px "
						border-color="rgba(224, 89, 119, 0.5)"
						empty-min-width="64px"
						empty-min-height="64px"
						empty-border-color="LightGray"
						width="45%"
					>
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Gloria + Max
						</Text>
						<Text color="--coralD1" margin="0px 0px 16px 0px" font="--base">
							An elegant backyard wedding in Miami
						</Text>
						<Text margin="0px 0px 40px 0px" font="--lead" color="--darkL2" lg-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif">
							All of the elements that are unique to the bride and groom make a wedding special to me. In the beginning, Gloria and Max's wedding reception was supposed to be at a different place, but because of a hurricane, they had to change it and ended up holding the reception at Gloria's parents' house. The house was absolutely stunning. And in my opinion, it was a perfect place to celebrate their marriage!
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="70px 0 140px 0" md-padding="20px 0 70px 0" background="--color-sectionBg">
			<Override slot="SectionContent" md-grid-template-columns="1fr" display="grid" grid-template-columns="1fr 1fr" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				grid-column="1 / span 2"
				md-grid-column="auto / auto"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text
					sm-width="100%"
					md-width="100%"
					font="--lead"
					color="--coralD1"
					margin="0px 0px 20px 0px"
					lg-font="normal 400 14px/1.5 &quot;Marcellus&quot;, serif"
					lg-width="50%"
					lg-margin="0px 0px 16px 0px"
				>
					What’s better than one good photographer? An incredible team of wedding pros!
				</Text>
				<Text
					color="--secondary"
					lg-font="normal 500 32px/1.3 &quot;Marcellus&quot;, serif"
					sm-width="100%"
					font="--headline2"
					margin="0px 0px 24px 0px"
					width="100%"
					sm-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					sm-margin="0px 0px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
				>
					We work better together, creating marvelous high-quality photos and videos.
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Box
					display="flex"
					sm-border-style="none"
					sm-flex-direction="column"
					md-border-width="0px"
					border-style="solid"
					margin="8px 0px 8px 0px"
					lg-padding="2px 4% 2px 0px"
					border-width="0px 0.5px 0px 0px"
					border-color="rgba(224, 89, 119, 0.5)"
					md-padding="32px 0px 32px 0px"
					lg-min-height="320px"
					padding="2px 14% 2px 0px"
					sm-padding="32px 0px 32px 0px"
					md-border-style="none"
					min-height="260px"
					align-items="center"
				>
					<Image
						sm-margin="0px 0px 24px 0px"
						margin="0px 35px 0px 0px"
						height="200px"
						sm-width="100%"
						sm-min-height="336px"
						md-margin="0px 24px 0px 0px"
						src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80"
						width="167px"
						object-fit="cover"
						lg-margin="0px 16px 0px 0px"
					/>
					<Box width="70%" lg-width="80%" sm-width="100%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Jane
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							Owner & Lead Photographer
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							She is our fearless leader! She founded our studio in 2009, from a laptop at her kitchen table, with only a love of photography and weddings and a whole lot of determination.
						</Text>
					</Box>
				</Box>
				<Hr
					padding="0px 0px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-width="100%"
					sm-display="none"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="98%"
					border-color="rgba(224, 89, 119, 0.5)"
					margin="0px 2% 0px 0px"
				/>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					align-items="center"
					display="flex"
					md-border-style="none"
					border-style="solid"
					min-height="260px"
					md-padding="32px 0px 32px 0px"
					lg-padding="2px 2% 2px 2%"
					sm-padding="32px 0px 32px 0px"
					sm-flex-direction="column"
					border-color="rgba(224, 89, 119, 0.5)"
					margin="8px 0px 8px 0px"
					sm-border-style="none"
					md-border-width="0px"
					lg-min-height="320px"
					padding="2px 7% 2px 7%"
					border-width="0px 0px 0px 0.5px"
				>
					<Image
						sm-margin="0px 0px 24px 0px"
						src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
						width="167px"
						margin="0px 35px 0px 0px"
						height="200px"
						lg-margin="0px 16px 0px 0px"
						sm-width="100%"
						sm-min-height="336px"
						md-margin="0px 24px 0px 0px"
						object-fit="cover"
					/>
					<Box lg-width="80%" sm-width="100%" width="70%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Jaclin
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							Senior Accosiate Photographer
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							She has been a pineapple for almost four years, has a knack for seeing the quiet moment within a big scene, and will giggle like a 4-year-old if you give her funny socks.
						</Text>
					</Box>
				</Box>
				<Hr
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					margin="0px 0px 0px 2%"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					width="98%"
					border-color="rgba(224, 89, 119, 0.5)"
					padding="0px 0px 0px 0px"
					sm-display="none"
				/>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Box
					border-color="rgba(224, 89, 119, 0.5)"
					sm-flex-direction="column"
					min-height="260px"
					align-items="center"
					lg-min-height="320px"
					md-border-width="0px"
					md-border-style="none"
					padding="2px 14% 2px 0px"
					border-width="0px 0.5px 0px 0px"
					border-style="solid"
					margin="8px 0px 8px 0px"
					md-padding="32px 0px 32px 0px"
					display="flex"
					lg-padding="2px 4% 2px 0px"
					sm-border-style="none"
					sm-padding="32px 0px 32px 0px"
				>
					<Image
						sm-min-height="336px"
						width="167px"
						object-fit="cover"
						margin="0px 35px 0px 0px"
						height="200px"
						lg-margin="0px 16px 0px 0px"
						sm-width="100%"
						sm-margin="0px 0px 24px 0px"
						md-margin="0px 24px 0px 0px"
						src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
					/>
					<Box width="70%" lg-width="80%" sm-width="100%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Elisabeth
						</Text>
						<Text color="--coralD1" margin="0px 0px 16px 0px" font="--base">
							Director of Brend
						</Text>
						<Text font="--lead" color="--darkL2" margin="0px 0px 0px 0px">
							Elisabeth's natural state is cheerfulness, and she breathes life into the room whenever she walks in. Mustard is her signature color, but she hates eating it.
						</Text>
					</Box>
				</Box>
				<Hr
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					sm-display="none"
					margin="0px 2% 0px 0px"
					padding="0px 0px 1px 0px"
					border-color="rgba(224, 89, 119, 0.5)"
					sm-padding="0px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="98%"
				/>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					padding="2px 7% 2px 7%"
					sm-border-style="none"
					sm-padding="32px 0px 32px 0px"
					md-border-style="none"
					align-items="center"
					sm-flex-direction="column"
					md-border-width="0px"
					display="flex"
					border-width="0px 0px 0px 0.5px"
					border-color="rgba(224, 89, 119, 0.5)"
					margin="8px 0px 8px 0px"
					lg-padding="2px 2% 2px 2%"
					md-padding="32px 0px 32px 0px"
					border-style="solid"
					min-height="260px"
					lg-min-height="320px"
				>
					<Image
						sm-margin="0px 0px 24px 0px"
						src="https://images.unsplash.com/photo-1601288848351-48adce9d676a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
						width="167px"
						object-fit="cover"
						margin="0px 35px 0px 0px"
						height="200px"
						lg-margin="0px 16px 0px 0px"
						sm-width="100%"
						sm-min-height="336px"
						md-margin="0px 24px 0px 0px"
					/>
					<Box width="70%" lg-width="80%" sm-width="100%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Marta
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							Associate Photographer
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Meet Madelaine! She has an oil for everything, is a real empath, and meticulously inspects and cleans all of her equipment before every wedding.
						</Text>
					</Box>
				</Box>
				<Hr
					sm-display="none"
					md-padding="0px 0px 0px 0px"
					width="98%"
					padding="0px 0px 0px 0px"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					border-color="rgba(224, 89, 119, 0.5)"
					margin="0px 0px 0px 2%"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
				/>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Box
					md-padding="32px 0px 32px 0px"
					lg-min-height="320px"
					padding="2px 14% 2px 0px"
					margin="8px 0px 8px 0px"
					md-border-style="none"
					min-height="260px"
					align-items="center"
					border-width="0px 0.5px 0px 0px"
					lg-padding="2px 4% 2px 0px"
					sm-flex-direction="column"
					sm-padding="32px 0px 32px 0px"
					md-border-width="0px"
					display="flex"
					border-style="solid"
					border-color="rgba(224, 89, 119, 0.5)"
					sm-border-style="none"
				>
					<Image
						src="https://images.unsplash.com/photo-1592214534258-0067435006d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						width="167px"
						sm-width="100%"
						object-fit="cover"
						margin="0px 35px 0px 0px"
						height="200px"
						lg-margin="0px 16px 0px 0px"
						sm-min-height="336px"
						sm-margin="0px 0px 24px 0px"
						md-margin="0px 24px 0px 0px"
					/>
					<Box width="70%" lg-width="80%" sm-width="100%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
							Rachel
						</Text>
						<Text margin="0px 0px 16px 0px" font="--base" color="--coralD1">
							Associate Photographer
						</Text>
						<Text font="--lead" color="--darkL2" margin="0px 0px 0px 0px">
							Meet Rachel! She loves pasta, her poodle, and claims she can't cook. When making a decision, she is careful and deliberate, and she spots beauty in the moments between poses.
						</Text>
					</Box>
				</Box>
				<Hr
					padding="0px 0px 1px 0px"
					border-color="rgba(224, 89, 119, 0.5)"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					sm-display="none"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
					width="98%"
					sm-padding="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					margin="0px 2% 0px 0px"
				/>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					border-width="0px 0px 0px 0.5px"
					sm-border-style="none"
					align-items="center"
					border-color="rgba(224, 89, 119, 0.5)"
					width="100%"
					border-style="solid"
					sm-padding="32px 0px 32px 0px"
					md-min-height="200px"
					lg-min-height="320px"
					display="flex"
					justify-content="center"
					md-border-width="0px"
					md-border-style="none"
					margin="8px 0px 8px 0px"
					max-height="260px"
					height="100%"
				>
					<Image width="96px" height="96px" src="https://uploads.quarkly.io/615c316435c5c8001f775568/images/icon-park-outline_cross-ring-two.png?v=2021-10-06T07:55:36.055Z" />
				</Box>
				<Hr
					md-padding="0px 0px 0px 0px"
					width="98%"
					border-color="rgba(224, 89, 119, 0.5)"
					sm-display="none"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
					padding="0px 0px 1px 0px"
					margin="0px 0px 0px 2%"
					sm-width="100%"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 100px 0">
			<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
				<Text
					sm-text-align="center"
					sm-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					margin="0px 0px 20px 0px"
					font="--headline2"
					color="--coralD1"
				>
					Planning a wedding?
				</Text>
				<Text
					margin="0px 0px 50px 0px"
					font="--lead"
					color="--darkL2"
					max-width="600px"
					lg-max-width="500px"
					md-font="normal 400 16px/1.5 &quot;Marcellus&quot;, serif"
				>
					We'll support you from the minute you contact us and at every moment on your wedding day. Need advice or just want to share your ideas? We are here for you!
				</Text>
				<Box border-radius="100%" background="inherit" position="relative">
					<Box
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
						transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
					/>
					<Box
						transform="matrix(1, -0.2, 0.1, 0.98, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
					/>
					<Box
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-coralD1"
						transform="matrix(1, -0.17, 0.08, 0.99, 0, 0)"
						height="100%"
					/>
					<Components.QuarklycommunityKitPopup border-radius="100%">
						<Override
							slot="Button Open"
							hover-opacity=".8"
							transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
							color="--pageBg"
							padding="30px 64px 30px 64px"
							font="--headline3"
							hover-border-radius="100%"
							border-radius="100%"
							background="rgba(0, 119, 204, 0)"
						>
							<Text transform="matrix(1.1, 0.22, -0.14, 1, 0, 0)" margin="0px 0px 0px 0px" color="--coralD1">
								Hire us!{" "}
							</Text>
							{" "}
						</Override>
						<Override
							slot="Wrapper"
							max-height="95vh"
							overflow-y="auto"
							max-width="600px"
							background="--color-pageBg"
							md-overflow-y="visible"
						/>
						<Override slot="Button Close" size="40px" color="--coral" />
						<Box flex-direction="column" padding="0px 16px 36px 16px" display="flex">
							<Box padding="0px 16px 16px 16px">
								<Text margin="0px 0px 16px 0px" font="--headline2" color="--secondary">
									Let's plan your wedding or holiday?
								</Text>
								<Text color="--darkL2" margin="0px 0px 40px 0px" font="--lead">
									Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
								</Text>
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--secondary">
									Request details
								</Text>
							</Box>
							<Components.QuarklycommunityKitNetlifyForm
								successMessage="Thanks for you reply"
								color="--secondary"
								display="flex"
								flex-wrap="wrap"
								width="100%"
							>
								<Override slot="Form" width="100%" />
								<Box sm-width="100%" display="flex" flex-wrap="wrap" sm-flex-direction="column">
									<Box
										sm-width="100%"
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											First name
										</Text>
										<Input
											name="Name"
											border-radius="0px"
											required
											sm-width="100%"
											padding="14px 16px 14px 16px"
											placeholder="Bill"
											type="text"
											border-color="--color-light"
											border-width="1px"
										/>
									</Box>
									<Box
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
									>
										<Text font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary" margin="0px 0px 8px 0px">
											Last name (optional)
										</Text>
										<Input
											sm-width="100%"
											padding="14px 16px 14px 16px"
											placeholder="Salliwan"
											type="text"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											name="Last name"
										/>
									</Box>
									<Box
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
										width="50%"
										display="flex"
									>
										<Text color="--secondary" margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Email address
										</Text>
										<Input
											type="email"
											required
											padding="14px 16px 14px 16px"
											placeholder="billslwn@mailbox.com"
											name="mail"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											sm-width="100%"
										/>
									</Box>
									<Box
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											Phone number (optional)
										</Text>
										<Input
											placeholder="1 916 555-17-29"
											name="tel"
											type="tel"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											sm-width="100%"
											padding="14px 16px 14px 16px"
										/>
									</Box>
									<Box width="100%" display="flex" flex-direction="column" padding="16px 16px 16px 16px">
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Tell us more about you idea
										</Text>
										<Input
											padding="14px 16px 14px 16px"
											placeholder="Enter your message here..."
											name="text"
											type="text"
											border-color="--color-light"
											width="100%"
											border-width="1px"
											border-radius="0px"
											as="textarea"
											min-height="150px"
											sm-width="100%"
										/>
										<Text margin="8px 0px 32px 0px" font="--base" color="--coral">
											5000 characters left
										</Text>
										<Box justify-content="center" display="flex" align-items="center">
											<Button
												hover-opacity=".8"
												align-items="center"
												justify-content="center"
												color="--pageBg"
												text-transform="uppercase"
												padding="12px 68px 12px 68px"
												font="--lead"
												background="--color-secondary"
												border-radius="10px"
											>
												Submit
											</Button>
										</Box>
									</Box>
								</Box>
							</Components.QuarklycommunityKitNetlifyForm>
						</Box>
					</Components.QuarklycommunityKitPopup>
				</Box>
			</Box>
		</Section>
		<Section padding="160px 0 99px 0" md-padding="40px 0 50px 0" background="--color-sectionBg">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				padding="0px 32px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
			>
				<Text font="400 28px/1.5 --fontFamily-googleMarcellus" color="--secondary" margin="0px 0px 8px 0px">
					Jane Apisade
				</Text>
				<Text color="--darkL2" md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px" font="--base">
					We have a full-time Client Experience Manager ready to answer your questions and share more information.
				</Text>
			</Box>
			<Box
				padding="0px 0px 0px 16px"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				md-padding="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				width="25%"
				display="flex"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					Media
				</Text>
				<Link
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
				>
					News
				</Link>
				<Link
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
				>
					PR contacts
				</Link>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-min-height="64px"
				empty-border-style="solid"
				flex-direction="column"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					About
				</Text>
				<Link
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
				>
					Portfolio
				</Link>
				<Link
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
				>
					Photo
				</Link>
				<Link
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
				>
					Video
				</Link>
				<Link
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
				>
					Investment
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				md-margin="20px 0px 0px 0px"
				empty-min-width="64px"
				display="flex"
				flex-direction="column"
				md-width="33.333%"
			>
				<Text font="--headline3" color="--secondary" margin="0px 0px 8px 0px">
					Follow us
				</Text>
				<Link
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
				>
					Facebook
				</Link>
				<Link
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
				>
					Instagram
				</Link>
				<Link
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
				>
					Pinterest
				</Link>
				<Link
					hover-opacity=".8"
					color="--coral"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
				>
					Dribbble
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"615c316435c5c8001f775566"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n    scroll-behavior: smooth;\n}\n"}
			</style>
		</RawHtml>
	</Theme>;
});