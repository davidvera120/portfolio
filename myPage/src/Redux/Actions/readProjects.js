
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { userTypes} from '../Types/userTypes'


export const listaProjects = () =>{
    return async (dispatch)=>{
      
        
        const colRef=collection(db, "proyectos")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const users2=data.docs
        const info=users2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const projects=info;
        console.log(projects)
        dispatch(listaProyectos(projects))
    }
}


export const listaProyectos = (projects2)=>{
    return{
        type: userTypes.read,
        payload: projects2
    }
}