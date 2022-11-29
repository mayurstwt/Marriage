import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Text, LinkBox, Image, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
				sm-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
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
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				align-items="center"
				empty-min-width="64px"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Button Text :closed">
						Menu
					</Override>
					<Override slot="Button Icon" md-color="--grey" />
					<Override slot="Content" background="none" padding="0px 0px 0px 0px" />
					<Override slot="Button Text" md-color="--grey" md-font="--lead" />
					<Box
						display="flex"
						justify-content="space-between"
						md-flex-direction="column"
						md-align-items="center"
						md-background="--color-brown"
						md-padding="20px 0px 20px 0px"
					>
						<Link
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--grey"
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
						>
							About
						</Link>
						<Link
							color="--grey"
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
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--grey"
							font="--lead"
							text-decoration-line="initial"
						>
							Wedding
						</Link>
						<Link
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--grey"
						>
							Planning
						</Link>
						<Link
							font="--lead"
							text-decoration-line="initial"
							padding="8px 8px 8px 8px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity=".8"
							href="#"
							color="--grey"
						>
							Contact
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="68px 0 68px 0" md-padding="0px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" md-position="relative" />
			<Box
				display="flex"
				flex-direction="column"
				padding="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				md-align-items="center"
				width="50%"
				align-items="flex-start"
				justify-content="center"
				md-width="100%"
				empty-min-height="64px"
				lg-margin="0px 0px 0px 0px"
				md-position="relative"
				md-margin="0px 0px 30px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 40px 0px"
					font="--headline1"
					color="--secondary"
					lg-font="normal 500 50px/1.3 &quot;Marcellus&quot;, serif"
					lg-margin="0px 0px 16px 0px"
					md-font="normal 500 40px/1.3 &quot;Marcellus&quot;, serif"
					md-text-align="center"
				>
					404.
					<br />
					That’s an error.{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 60px 0px"
					font="--lead"
					color="--grey"
					md-font="normal 400 16px/1.5 &quot;Faustina&quot;, serif"
					md-margin="0px 0px 32px 0px"
				>
					The requested URL was not found on this server.{"\n\n"}
				</Text>
				<LinkBox
					position="relative"
					hover-color="--brown"
					padding="54px 54px 54px 54px"
					width="255px"
					href="/"
					md-bottom="0px"
					border-color="--color-secondary"
					align-items="center"
					color="--secondary"
					hover-background="--color-secondary"
					transform="matrix(1, -0.17, 0.08, 0.99, 0, 0)"
					md-position="static"
					border-radius="500%"
				>
					<Box
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
					/>
					<Box
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						transform="matrix(0.99, -0.15, 0.9, 0.9, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
					/>
					<Box
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						transform="matrix(0.99, -0.1, 0.9, 0.9, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
					/>
					<Text
						transform="matrix(1, 0.17, -0.1, 1, 0, 0)"
						margin="0px 0px 0px 0px"
						padding="58px 30px 40px 30px"
						text-align="center"
						left="0px"
						bottom="auto"
						right="auto"
						font="--headline3"
						height="100%"
						width="100%"
						position="absolute"
						top="-15px"
					>
						GO BACK
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				width="50%"
				margin="0px 0px 0px 60px"
				md-width="100%"
				md-margin="0px 0px 0px 0px"
				empty-min-height="64px"
			>
				<Image
					src="https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
					max-height="616px"
					width="100%"
					object-fit="cover"
					object-position="0% 70%"
					lg-min-height="481px"
					md-max-height="410px"
					md-min-height="none"
				/>
			</Box>
		</Section>
		<Section background="--color-greyD2" padding="80px 0 100px 0">
			<Box flex-direction="column" align-items="center" justify-content="center" display="flex">
				<Text
					sm-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					md-font="normal 500 28px/1.3 &quot;Marcellus&quot;, serif"
					margin="0px 0px 20px 0px"
					font="--headline2"
					color="--brown"
					sm-text-align="center"
				>
					Planning a wedding?
				</Text>
				<Text
					font="--lead"
					color="--brown"
					max-width="600px"
					lg-max-width="500px"
					md-font="normal 400 16px/1.5 &quot;Faustina&quot;, serif"
					margin="0px 0px 50px 0px"
				>
					We'll support you from the minute you contact us and at every moment on your wedding day. Need advice or just want to share your ideas? We are here for you!
				</Text>
				<Box border-radius="100%" background="inherit" position="relative">
					<Box
						border-color="--color-brown"
						transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
					/>
					<Box
						border-color="--color-brown"
						transform="matrix(1, -0.2, 0.1, 0.98, 0, 0)"
						height="100%"
						width="100%"
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
					/>
					<Box
						position="absolute"
						border-radius="100%"
						border-width="1px"
						border-style="solid"
						border-color="--color-brown"
						transform="matrix(1, -0.17, 0.08, 0.99, 0, 0)"
						height="100%"
						width="100%"
					/>
					<Components.QuarklycommunityKitPopup border-radius="100%">
						<Override
							slot="Button Open"
							font="--headline3"
							hover-border-radius="100%"
							border-radius="100%"
							background="rgba(0, 119, 204, 0)"
							hover-opacity=".8"
							transform="matrix(0.99, -0.22, 0.11, 0.98, 0, 0)"
							color="--brown"
							padding="30px 64px 30px 64px"
						>
							<Text transform="matrix(1.1, 0.22, -0.14, 1, 0, 0)" margin="0px 0px 0px 0px">
								Hire us!{" "}
							</Text>
							{" "}
						</Override>
						<Override
							slot="Wrapper"
							max-width="600px"
							background="--color-brown"
							md-overflow-y="visible"
							max-height="95vh"
							overflow-y="auto"
						/>
						<Override slot="Button Close" size="40px" color="--grey" />
						<Box padding="0px 16px 36px 16px" display="flex" flex-direction="column">
							<Box padding="0px 16px 16px 16px">
								<Text margin="0px 0px 16px 0px" font="--headline2" color="--secondary">
									Let's plan your wedding or holiday?
								</Text>
								<Text color="--grey" margin="0px 0px 40px 0px" font="--lead">
									Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
								</Text>
								<Text color="--secondary" margin="0px 0px 0px 0px" font="--headline3">
									Request details
								</Text>
							</Box>
							<Components.QuarklycommunityKitNetlifyForm
								display="flex"
								flex-wrap="wrap"
								width="100%"
								successMessage="Thanks for you reply"
								color="--secondary"
							>
								<Override slot="Form" width="100%" />
								<Box display="flex" flex-wrap="wrap" sm-flex-direction="column" sm-width="100%">
									<Box
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
									>
										<Text font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary" margin="0px 0px 8px 0px">
											First name
										</Text>
										<Input
											border-width="1px"
											border-radius="0px"
											required
											type="text"
											placeholder="Bill"
											name="Name"
											border-color="--color-light"
											sm-width="100%"
											padding="14px 16px 14px 16px"
										/>
									</Box>
									<Box
										padding="16px 16px 16px 16px"
										flex-direction="column"
										sm-width="100%"
										width="50%"
										display="flex"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											Last name (optional)
										</Text>
										<Input
											placeholder="Salliwan"
											type="text"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											name="Last name"
											sm-width="100%"
											padding="14px 16px 14px 16px"
										/>
									</Box>
									<Box
										sm-width="100%"
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
									>
										<Text color="--secondary" margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Email address
										</Text>
										<Input
											padding="14px 16px 14px 16px"
											placeholder="billslwn@mailbox.com"
											type="email"
											border-width="1px"
											required
											sm-width="100%"
											name="mail"
											border-color="--color-light"
											border-radius="0px"
										/>
									</Box>
									<Box
										sm-width="100%"
										width="50%"
										display="flex"
										padding="16px 16px 16px 16px"
										flex-direction="column"
									>
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope" color="--secondary">
											Phone number (optional)
										</Text>
										<Input
											padding="14px 16px 14px 16px"
											placeholder="1 916 555-17-29"
											name="tel"
											type="tel"
											border-color="--color-light"
											border-width="1px"
											border-radius="0px"
											sm-width="100%"
										/>
									</Box>
									<Box width="100%" display="flex" flex-direction="column" padding="16px 16px 16px 16px">
										<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
											Tell us more about you idea
										</Text>
										<Input
											border-color="--color-light"
											border-radius="0px"
											as="textarea"
											min-height="150px"
											padding="14px 16px 14px 16px"
											name="text"
											type="text"
											sm-width="100%"
											placeholder="Enter your message here..."
											border-width="1px"
											width="100%"
										/>
										<Text color="--grey" margin="8px 0px 32px 0px" font="--base">
											5000 characters left
										</Text>
										<Box display="flex" align-items="center" justify-content="center">
											<Button
												font="--lead"
												hover-opacity=".8"
												align-items="center"
												justify-content="center"
												color="--brown"
												text-transform="uppercase"
												padding="12px 68px 12px 68px"
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
		<Section padding="160px 0 99px 0" md-padding="40px 0 50px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="0px 16px 0px 0px"
			>
				<Text margin="0px 0px 8px 0px" font="400 28px/1.5 --fontFamily-googleMarcellus" color="--secondary">
					Jane Apisade
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--greyD1" md-margin="0px 0px 30px 0px">
					We have a full-time Client Experience Manager ready to answer your questions and share more information.
				</Text>
			</Box>
			<Box
				display="flex"
				md-margin="20px 0px 0px 0px"
				md-padding="0px 0px 0px 0px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				md-width="33.333%"
				empty-min-width="64px"
				empty-min-height="64px"
				flex-direction="column"
				padding="0px 0px 0px 16px"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					Media
				</Text>
				<Link
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
				>
					News
				</Link>
				<Link
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
				>
					PR contacts
				</Link>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-min-width="64px"
			>
				<Text color="--secondary" margin="0px 0px 8px 0px" font="--headline3">
					About
				</Text>
				<Link
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
				>
					Portfolio
				</Link>
				<Link
					hover-opacity=".8"
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
				>
					Photo
				</Link>
				<Link
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--grey"
					font="--lead"
				>
					Video
				</Link>
				<Link
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--grey"
					font="--lead"
				>
					Investment
				</Link>
			</Box>
			<Box
				width="25%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				flex-direction="column"
				md-margin="20px 0px 0px 0px"
				md-width="33.333%"
				empty-border-width="1px"
				empty-border-style="solid"
				display="flex"
			>
				<Text margin="0px 0px 8px 0px" font="--headline3" color="--secondary">
					Follow us
				</Text>
				<Link
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
				>
					Facebook
				</Link>
				<Link
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--grey"
					font="--lead"
				>
					Instagram
				</Link>
				<Link
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
				>
					Pinterest
				</Link>
				<Link
					color="--grey"
					font="--lead"
					text-decoration-line="initial"
					href="#"
					margin="0px 0px 8px 0px"
					transition="opacity 0.3s ease-in-out 0s"
					hover-text-decoration-line="initial"
					hover-opacity=".8"
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