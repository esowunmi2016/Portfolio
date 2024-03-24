import { UserOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import me from '../assets/img/me.jpg'
import bg1 from '../assets/img/bg1.jpg'
import bg2 from '../assets/img/bg2.jpg'
import bg3 from '../assets/img/bg3.jpg'
import bg4 from '../assets/img/bg4.jpg'
import { useState } from 'react';

function Landing() {

    const [linkdn, setLinkdn] = useState('white')
    const [github, setGithub] = useState('white')

    return ( 
        <>
            <div
                className="d-flex justify-content-center align-items-center text-center"
                style={{
                    height:'100vh',
                    // width:'100vw',
                    // backgroundColor:'black',
					backgroundImage:`url(${bg4})`,
                    backgroundSize:'cover'
                }}
            >
                <div className='glass mx-4 px-4 py-4' style={{ 
                    color:'white',
                    // fontSize:'500%',
                    
                }}>
                    <ScrollAnimation animateIn="fadeIn">
                        <div>
                            <Avatar shape="" size={200} icon={<UserOutlined />} src={me} />
                        </div>
                    </ScrollAnimation>

                    <div
                        style={{
                            fontSize:'300%'
                        }}
                    >
                        Emmanuel Sowunmi
                    </div>
                    <div>
                        Bs Computer Science
                    </div>
                    <div>
                        Esowunmi2016@fau.edu
                    </div>
                    
                    <div style={{fontSize:'150%'}}>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href='https://www.linkedin.com/in/emmanuel-sowunmi-505706174/' target='_blank'><LinkedinOutlined  onMouseOver={()=>setLinkdn('#0072b1')} onMouseOut={()=>setLinkdn("white")} style={{color:`${linkdn}`}}/></a></li>
                            <li class="list-inline-item"><a href='https://github.com/esowunmi2016' target='_blank'><GithubOutlined onMouseOver={()=>setGithub('#a9a8a8')} onMouseOut={()=>setGithub("white")} style={{color:`${github}`}}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;