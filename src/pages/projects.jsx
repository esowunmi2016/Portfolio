import { useState } from "react";
import { Row, Col, Card, Tag, Modal, Button, Typography } from "antd";
import bg1 from '../assets/img/bg1.jpg'
import bg2 from '../assets/img/bg2.jpg'
import bg3 from '../assets/img/bg3.jpg'
import bg4 from '../assets/img/bg4.jpg'
import brunchesSP from '../assets/img/brunchesSitePic.png'
import estatePlusSP from '../assets/img/estatePlusSitePic.png'
import gameMechVid from '../assets/videos/jsGame.mp4'

const { Meta } = Card;
const { Text,  } = Typography

const proj = [
    {
        name: 'Estate Plus',
        category:'Web-Dev, Dev-Ops',
        description: `Having only academic experience prior, this was my first introduction to real word enviroment. I worked primarily a frontend developer intern but learned and conributed to the backend (PHP, Laravel) and mobile (React Native) wherever i could. I was introduced to working in a fast paced agile development enviroment and was exposed to practical implementation that i had only ever got definitions for in class. eg SOAP, REST API, Identity and Access Management to name a few. During my time here i was reprting directly to a supervisor who cunducted tests and code reviews on a consistent basis and learned to optimize code to run as efficiently as possible. 
            Test Login Credentials:
            Estate Code: 270-390,
            Email: hassanwest@mailinator.com,
            Password: 1234567890 
            `,
        link:'https://estateplusng.com/',
        tags: ['React.js', 'Agile', 'Front-End', 'API'],
        pic: estatePlusSP,
    },
    {
        name: 'Brunches Cafe',
        category:'Web-Dev|Dev-Ops',
        description: 'This was my first job and solo web app deployment. after gaining practical knowlege of the complete development cycle, i leveraged on academic experience with deployment and btought the whole projrct to life.',
        link:'https://esowunmi2016.github.io/Brunches/',
        tags: ['React.js', 'PostGresQL', 'JWT', 'Dev-Opps', 'Full-Stack'],
        pic: brunchesSP,
    },
    {
        name: 'Game Mechanics',
        category:'OOP, Vanilla.js',
        description: 'This project was inspired by my close friend Binup Mathai. It is an implementation of OOP (OBject Oriented Programing) as most things in games re implemeted as objects with certain attributes and features, in this case, a ball that has the method of movement which is controlled by the player. It also implements standard game mechnics like gravity, position tracking and collision detection (this one almost broke me lol). All in all was a fun project.',
        link:'https://esowunmi2016.github.io/Game-Mechanics/',
        tags: ['Vanilla.js', 'OOP'],
        vid: gameMechVid,
    },
    {
        name: 'Ridge Regression',
        category:'Machine Learning, Data Science',
        description: '...',
        link:'https://github.com/esowunmi2016/Foundations-Of-AI/blob/main/Ridge-Regression.ipynb',
        tags: ['Python', 'Numpy', 'Pandas', 'scikit-learn']
    },
    {
        name: 'Elastic-net',
        category:'Machine Learning, Data Science',
        description: '...',
        link:'https://github.com/esowunmi2016/Foundations-Of-AI/blob/main/Elastic%20Net%20Regression.ipynb',
        tags: ['Python', 'Numpy', 'Pandas', 'scikit-learn']
    },
    {
        name: 'Logistic Regression (with Regularization)',
        category:'Machine Learning, Data Science',
        description: '...',
        link:'https://github.com/esowunmi2016/Foundations-Of-AI/blob/main/Logistic%20Ridge%20Regression%20(with%20Regularization).ipynb',
        tags: ['Python', 'Numpy', 'Pandas', 'scikit-learn']
    },
]


function Projects() {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalName, setModalName] = useState('')
    const [modalDescription, setModalDescription] = useState(true)
    const [modalLink, setModaLink] = useState('')
    const [ModalPic, setModalPic] = useState('')
    const [ModalVid, setModalVid] = useState('')
    const [tags, setTags] = useState([])

    const cardClick=(x)=>{
        setModalName(x.name)
        setModalDescription(x.description)
        setModaLink(x.link)
        setModalOpen(true)
        setModalPic(x.pic)
        setModalVid(x.vid)
        setTags(x.t)
    }

    return ( 
        <>
            <div 
                style={{
                    height:'100vh',
                    // width:'100vw',
                    // backgroundColor:'black',
                    position:''
                }}>
                <div className="d-flex justify-content-center align-items-center " style={{height:'15%'}}>
                    <h1 className="">Projects</h1>
                    
                </div>
               
					
                <div className="d-flex row justify-content-center align-items-center" style={{background:'black', height:'85%', backgroundImage:`url(${bg2})`, backgroundSize:'cover'}}>
                    <div className="d-flex row justify-content-center align-items-center glass csb1" style={{height:'85%', width:'60%', overflowY:'auto', overflowX:'hidden',}}>
                        {proj.map(x=>(
                            <div className="col-md-12 py-4 mx-" >
                                <Card
                                    // title="Card title" 
                                    hoverable
                                    style={{ width:'100%' }}
                                    cover={<img alt={x.name} src="https//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    onClick={()=>{cardClick(x)}}
                                >
                                    <Meta 
                                        style={{height:100,}} 
                                        title={
                                            <div className="d-flex">
                                                <div>
                                                    {x.name}
                                                </div>|
                                                <div >
                                                    <Text className="text-truncate" type="secondary" style={{fontSize:'70%'}}> {x.category}</Text>
                                                </div>
                                            </div>
                                        } 
                                        description={
                                            <div >
                                                <div className="text-truncate">
                                                    {x.tags.map(y=>(<Tag color="purple">{y}</Tag>))}
                                                </div>
                                                <div className="text-truncate" style={{width:'100%', height:'100%'}}>
                                                    {x.description}
                                                </div>
                                            </div>
                                    } />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                    <Modal title={modalName} visible={modalOpen} onCancel={()=>setModalOpen(false)} onOk={()=>setModalOpen(false)} footer={null} bodyStyle={{background:''}}>
                        <div className="d-flex row justify-content-center align-items-center">
                            <div className="col-12">
                                {

                                }
                            </div>
                            <div className="col-12">
                                <p>{modalDescription}</p>
                            </div>
                            <div className="col py-2 my-1">
                                {
                                    ModalVid ? ( <video autoPlay loop src={ModalVid} width="100%" height="" />):
                                    ( <div  style={{ backgroundImage:`url(${ModalPic})`, backgroundSize:'cover', backgroundPosition:'center', minHeight:'34vh'}} />)
                                }
                               

                               
                                   
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a href={modalLink} target="_blank"><Button style={{background:'#531dab', color:'#f9f0ff', borderColor:'#d3adf7'}}>Visit</Button></a>
                        </div>
                    </Modal>
            </div>
        </>
     );
}

export default Projects;