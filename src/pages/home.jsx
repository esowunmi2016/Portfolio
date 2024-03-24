import {Button, Card, Collapse, } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import '../styling/orbit.css';
import '../styling/glass.css';
import bgimg1 from '../assets/img/bg1.jpg'
import bgimg2 from '../assets/img/bg2.jpg'
import bgimg3 from '../assets/img/bg3.jpg'
import reactLogo from '../assets/img/react_logo.png'
import nodeLogo from '../assets/img/node_logo.png'
import jsLogo from '../assets/img/js_logo2.png'
import phpLogo from '../assets/img/php_logo.png'
import pythonLogo from '../assets/img/python_logo2.png'
import me from '../assets/img/me.jpg'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


function Home() {

	const { Panel } = Collapse;

	const text = `
	A dog is a type of domesticated animal.
	Known for its loyalty and faithfulness,
	it can be found as a welcome guest in many households across the world.
	`;

	const [tragectory, settragectory] = useState('')
	const [maindiv, setmaindiv] = useState('')
	const [mainimg, setmainimg] = useState('')
	const [subimg, setsubimg] = useState('')
	// const [spinning, setspinning] = useState('running')


	useEffect(() => {

		settragectory({height:window.innerWidth <= 1000 ? '60vw':'30vw'})
		setmaindiv({
			left:window.innerWidth <= 1000 ? '33%':'30%', 
			top:window.innerWidth >= 1280 && window.innerHeight >= 800 ? '20%':window.innerWidth >= 1280 ? '18%': window.innerWidth >= 1155 ? '15vw':window.innerWidth >= 1000 ? '16vw': window.innerWidth >=820 ? '26vw': window.innerWidth >= 680 ? '30vw':window.innerWidth >= 414 ? '20%': window.innerWidth == 390 ? '20%': window.innerWidth == 393 ? '20%': '22%',
		})
		setmainimg({width:window.innerWidth <= 1000 ? '35vw':'20vw'})
		setsubimg({width:window.innerWidth <=767 ? '15vw':'7vw'})
		
	}, )


	return ( 
		<>
			<div
				style={{
					width:'100vw',
					height:'100vh',
					// backgroundColor:'black',
					// position:'relative'
					// backgroundImage:`url(${bgimg1})`,
					// backgroundSize:'cover',
				}}
			>
				<div
					className='fixed-top'
					style={{
						width:'100vw',
						height:'100vh',
						backgroundColor:'black',
						backgroundImage:`url(${bgimg1})`,
						backgroundSize:'cover',
						zIndex:-1
					}}
				/>
				<div className='row d-flex  justify-content-center' 
					style={{
						height:'100%', 
						width:'100%', 
						paddingLeft:window.innerWidth >= 989 ? '':'7%',
					}}
				>

					{/* Pic Animation */}
					<div className='col-lg-6 d-flex justify-content-center   py-4' style={{ position:'relative',  }}>
						<div
							className='glass d-flex justify-content-center'
							style={{
								height: window.innerWidth >= 500 ? '100%': window.innerWidth <= 375 ?'65%':'50%',
								maxHeight:'100%',
								minHeight:'70%',
								width:'95%',
								borderRadius:'3%',
								// background:'blue'
								// backdropFilter:'blur(100%)', 
								// position:'relative',
							}}
						>
							{/* MY PICTURE */}
							<div
								style={{
									// top: window.innerWidth >= 2000 ? '10vw':window.innerWidth >= 1400 ? '13vw':window.innerWidth >= 1155 ? '15vw':window.innerWidth >= 1000 ? '16vw': window.innerWidth >=820 ? '28vw': window.innerWidth >= 680 ? '30vw':'33vw',
									// top:maindiv.top,
									// left:maindiv.left,
									top:window.innerWidth >= 989 ? '18%': window.innerWidth == 375 ? '22%':'20%',
									// background:'red',
									left: window.innerWidth >= 989 ? '26.5%': '31%',
									position:'absolute'
								}}	
							>
								<img src={me} style={{borderRadius:'50%', width:mainimg.width,}} />
							</div>

							{/* <div style={{top:window.innerWidth >= 989 ? '18%': window.innerWidth == 375 ? '22%':'20%',}}>
								<Avatar shape="" size={200} icon={<UserOutlined />} src={me} />
							</div>
							 */}
							{/* ALL ANIMATIONS */}
							<div
								id='orbit'
								style={{
									position:'absolute',
									// border:'2px #4a437f dashed',
									width:window.innerWidth >= 989 ? '65.5%':'72.5%',
									// width:'65.5%',
									height:tragectory.height,
									top:'7%',
									left:'15%',
									borderRadius:'50%',
									// backgroundColor:'beige'
								}}
							>

								{/* top */}
								<div
									id='orbit2'
									style={{
										position:'static',
										top:'-11%',
										left:'40%',
										position:'absolute',
									}}	
								>
									<img src={jsLogo} style={{borderRadius:'50%', width:subimg.width}} />
								</div>

								{/* bottom right */}
								<div
									id='orbit2'
									style={{
										position:'static',
										top:'60%',
										left:'85%',
										position:'absolute', 
									}}	
								>
									<img src={phpLogo} style={{borderRadius:'50%', width:subimg.width}} />
								</div>
								
								{/* bottom left */}
								<div
									id='orbit2'
									style={{
										position:'static',
										top:'60%',
										left:'-7%',
										position:'absolute',
									}}	
								>
									<img src={pythonLogo} style={{borderRadius:'50%', width:subimg.width}} />
								</div>
								
								{/* bottom */}
								{/* <div
									// id='orbit2'
									style={{
										position:'static',
										top:'90%',
										left:'40%',
										position:'absolute'
									}}	
								>
									<img src={nodeLogo} style={{borderRadius:'50%', width:subimg.width}} />
								</div> */}

								{/* HARD left */}
								{/* <div
									// id='orbit2'
									style={{
										position:'static',
										top:'40%',
										left:'-10%',
										position:'absolute'
									}}	
								>
									<img src={jsLogo} style={{ width:'20%'}} />
								</div> */}

								{/* hard right */}
								{/* <div
									// id='orbit2'
									style={{
										position:'static',
										top:'40%',
										left:'90%',
										position:'absolute'
									}}	
								>
									<img src='https://picsum.photos/100' style={{borderRadius:'50%', width:subimg.width}} />
								</div> */}
								

								
							</div>

							<div 
								class='d-flex  align-items-end justify-content-center text-center' 
								style={{
									color:'white', 
									// height:'100%', 
									width:'100%',
									zIndex:2, 
									fontSize:window.innerWidth >= 500 ? '450%':'300%',
									// background:'red',
									position:'fixed',
									bottom:'0%'
								}}
							>
									<div>Emmanuel Sowunmi</div>
							</div>

						</div>
					</div>

					{/* Tech Stack Listing */}
					{/* <div className='col-lg-4 d-flex justify-content-center align-items-center' style={{position:'relative', paddingTop:window.innerWidth >= 989 ? '':'10%' }}>
						<div
							className='glass'
							style={{
								height:'85%',
								maxHeight:'100%',
								width:'95%',
								borderRadius:'3%',
								// backgroundColor:'red',
								// backdropFilter:'blur(100%)', 
								// position:'relative',
							}}
						>
							<div 
								className='d-flex justify-content-center'
								style={{
									color:'white',
									fontSize:'200%',
									fontWeight:'bold'
								}}
							>
								TECH STACK
							</div>

							<div
								className='d-flex align-items-center justify-content-center'	
								style={{
									height:'100%'
								}}
							>
								<div 
									className=''
									style={{
										width:'90%',
									}}
								>
									<Card 
									>
										JavaScript
									</Card>
									<Card 
									>
										Python
									</Card>
									<Card 
									>
										PHP
									</Card>
									
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default Home;



 