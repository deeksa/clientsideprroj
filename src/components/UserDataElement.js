import './UserDataElement.css'
//import{Component}from 'react' 
//class UserDataElement extends Component{

    //render(){
       // const {userData}=this.props
    //const{Firstname,Lastname,Emailid,Dateofbirth}=userData
    
          




const UserDataElement=props=>{
    const {Details,deletedata,editdata}=props

    const{_id}=Details
    console.log(Details)
   
    const deleteMethod=()=>{
        console.log(_id)
        deletedata(_id)
        
    }
    const editMethod=()=>{
        editdata(_id)
       // deletedata(_id)
    }
    
    
    return(
        <tr>
        
        
        <td>{Details.firstname}</td>
        <td>{"   "+Details.lastname}</td>
        <td>{Details.mail}</td>
        <td>{Details.dateofbirth}</td>
        <td>
        <div className="icons">
        <div className='edit1'>
        <button type="button" onClick={editMethod}>
        <i class="fas fa-edit"></i>
        </button>
        </div>
        <div>
        <button type="button" onClick={deleteMethod}>
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
        </div>
        </td>
        

        </tr>
        


    )
    
    }

export default UserDataElement
