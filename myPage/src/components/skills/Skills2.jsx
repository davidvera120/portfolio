import React, { useState, useEffect} from 'react'
import {AiFillDatabase} from "react-icons/ai"
import {FaLaptopCode} from "react-icons/fa"
import{FaUserCheck} from "react-icons/fa"
import {CgDatabase} from "react-icons/cg"
import {GoFileSubmodule} from "react-icons/go"
import {TbWorld} from "react-icons/tb"
import {FaDatabase} from "react-icons/fa"
import './skills.css'
import styles from './Skills.module.scss'
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdImportantDevices} from 'react-icons/md'
import {IoIosRocket} from 'react-icons/io'
import {FaRegHandPointUp} from 'react-icons/fa'

export const Skills2 = () => {

  const sheeps =[{name:"Noah", color:"blue"},{name:"Euge", color:"red"},{name:"Ki Na Ma", color:"red"}];

  const nameSheep = sheeps.map((sheep) => sheep.name)
  

  // let name1=nameSheep.map((item)=> (item.split('')));
  // console.log(name1);

  let sheep1=sheeps.map((task)=>((((task.name.includes('a'))||(task.name.includes('A')))&&((task.name.includes('N'))||(task.name.includes('n'))))&&(task.color==="red")))
   console.log(sheep1)
   
  const index1 = (element) => element === true;
const index2=sheep1.findIndex(index1);
console.log(index2);
const respuesta=sheeps[index2];

console.log(respuesta.name)
 

  const [messageObj, setMessage] = useState({ message: '', id: 1 });

console.log(messageObj);
  

    
  return (
    <div className="container-fluid" Style="background-color:#151418; padding-bottom:70px;margin-top:-5px;">

    <div className="row">
    <div className="col-12 mt-4">
    <div className="position-relative d-flex align-items-center justify-content-center">
    <h1 className="text-uppercase" Style="-webkit-text-stroke: 1px #dee2e6;font-size:100px; color:transparent">Skills</h1>
    <h1 className="position-absolute text-uppercase" Style="font-size:40px; color:rgba(1,208,212,1)">my skills</h1>
    </div>
    </div>
    </div>

 <div className="row">
 <div className="col-12 mt-3">
 <div className="d-flex skillsG" Style="gap:20px; flex-wrap:wrap;">

 <div className="cardskills">
 <div className="row">
 <div className="col-12">
 <div className="hexagono">
 <AiOutlineDashboard  className="hexaicon"/>
 </div>
 </div>
 <div className="col-12 mt-3">
 <h4 Style="font-weight:300; color:#DDD">Fast</h4>
 </div>
 <div className="col-12" Style="margin-top:-10px; color:#fff;  font-size:14px">
 <p>Fast load times and lag free interaction, my highest priority.</p>
 </div>
 </div>
 </div>

 <div className="cardskills">
 <div className="row">
 <div className="col-12">
 <div className="hexagono">
 <MdImportantDevices className="hexaicon"/>
 </div>
 </div>
 <div className="col-12 mt-3">
 <h4 Style="font-weight:300; color:#DDDD">Responsive</h4>
 </div>
 <div className="col-12" Style="margin-top:-10px; color:#fff; font-size:14px">
 <p>My layouts will work on any device, big or small.</p>
 </div>
 </div>
 </div>


 <div className="cardskills">
 <div className="row">
 <div className="col-12">
 <div className="hexagono">
 <FaRegHandPointUp  className="hexaicon" />
 </div>
 </div>
 <div className="col-12 mt-3">
 <h4 Style="font-weight:300; color:#DDDD">Intuitive</h4>
 </div>
 <div className="col-12" Style="margin-top:-10px; color:#fff;  font-size:14px">
 <p>Strong preference for easy to use, intuitive UX/UI.</p>
 </div>
 </div>
 </div>


 <div className="cardskills">
 <div className="row">
 <div className="col-12">
 <div className="hexagono">
 <IoIosRocket  className="hexaicon" />
 </div>
 </div>
 <div className="col-12 mt-3">
 <h4 Style="font-weight:300; color:#DDDD">Dynamic</h4>
 </div>
 <div className="col-12" Style="margin-top:-10px; color:#fff; font-size:14px">
 <p>Websites dont have to be static, I love making pages come to life.</p>
 </div>
 </div>
 </div>

 </div>
 </div>
</div>

 <div className="col-12">
 <div className="d-flex skillsG" Style="gap:20px;flex-wrap:wrap" >
      <div className="card5">
      <div className="d-flex general1">
      
    <FaLaptopCode size={25} color="rgba(1,208,212,1)"/>
   
      <h3  className="icon11">Frontend</h3>
      </div>
<span className="span1">HTML</span>
<center className="d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663995542/html-removebg-preview_lwzzbo.png" Style="height:20px; margin-top:-18px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills1}>85%</div>
</div>
</center>


<span className="span1">CSS</span>
<center className="d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663995584/css-removebg-preview_ahfzy5.png" Style="height:20px; margin-top:-18px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills2}>85%</div>
</div>
</center>

<span className="span1">JavaScript</span>
<center className="d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663995938/java-removebg-preview_1_ralili.png" Style="height:20px; margin-top:-18px; margin-left:-8px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills3}>80%</div>
</div>
</center>

<span className="span1">Bootstrap</span>
<center className="container d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663995561/bootstrap-removebg-preview_c6newd.png" Style="height:20px; margin-top:-18px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills4}>90%</div>
</div>
</center>

<span className="span1">Tailwind</span>
<center className="container d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663998577/tailwind-removebg-preview_zebxwb.png" Style="height:20px; margin-top:-18px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills5}>70%</div>
</div>
</center>

<span className="span1">Redux</span>
<center className="container d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1664002718/redux-removebg-preview_gwmyb3.png" Style="height:20px; margin-top:-18px; margin-left:-10px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills6}>90%</div>
</div>
</center>

<span className="span1">React js</span>
<center className="container d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663998547/react-removebg-preview_q80edg.png" Style="height:20px; margin-top:-18px; margin-left:-10px" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills7}>80%</div>
</div>
</center>

<span className="span1">Git</span>
<center className="d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1664003257/git-removebg-preview_2_qfwqsu.png" Style="height:20px; margin-top:-18px; margin-right:1px;" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills8}>90%</div>
</div>
</center>
      </div>


      <div className="card4">
      <div className="d-flex general1">
      <AiFillDatabase size={25} color="rgba(1,208,212,1)"/>
      <h3 className="icon11">Backend</h3>
      </div>
      <span className="span1">Firebase</span>
<center className="container1 d-flex">
<div><img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1663998519/firebase-removebg-preview_zbe1vp.png" Style="height:20px; margin-top:-18px; margi-right:1px;" alt="logo"/></div>
<div className={styles.Container}>
<div  className={styles.skills9}>75%</div>
</div>

</center>
<ul>
<li>
<div className="d-flex">
<FaUserCheck color="#ababab"/><h6 className={styles.back}>Authentication</h6>
</div>
</li>
<li>
<div className="d-flex">
<FaDatabase color="#ababab"/><h6 className={styles.back}>Firestore Database</h6>
</div>
</li>
<li>
<div className="d-flex">
<GoFileSubmodule color="#ababab"/><h6 className={styles.back}>Storage</h6>
</div>
</li>
<li>
<div className="d-flex">
<CgDatabase color="#ababab"/><h6 className={styles.back}>Realtime Database</h6>
</div>
</li>
<li>
<div className="d-flex">
<TbWorld color="#ababab"/><h6 className={styles.back}>Hosting</h6>
</div>
</li>
</ul>
      </div>

      </div>
   
     </div>
    </div>
  )
}

export default Skills2
