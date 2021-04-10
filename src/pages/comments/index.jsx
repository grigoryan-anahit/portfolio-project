import React from 'react';
import s from './comments.module.css';
import { v4 as uuidv4 } from 'uuid';

class Comments extends React.Component{
  
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.myRefName = React.createRef();
        this.myRefLname = React.createRef();
    }
   
state={ 
    comments:JSON.parse( localStorage.getItem('comments')) || []
}

  render(){
   //  let com=JSON.parse( localStorage.getItem('comments'))
    const CommentsJsx=this.state.comments.map(item=>{
        return (
            <li key={item.id} className={s.commentLine}>
                  <p className={s.nameLname}> {item.name+' '+ item.Lname } </p>
                 <p className={s.comName} > {item.comName } </p>
            </li>
           
        )
    })
      return (

          <div className={s.commentsPage}>
               <form action='#' className={s.inputs}>
                   <input type='text' name='name' placeholder='Գրեք ձեր անունը' className={s.name} ref={this.myRefName}></input>
                   <input type='text' name='name' placeholder='Գրեք ձեր ազգանունը' className={s.Lname} ref={this.myRefLname} ></input>
                   <textarea type='text' name='name' placeholder='Ձեր տպավորությունը մեր մասին' className={s.comment} ref={this.myRef} ></textarea>
                   <button className={s.addBtn} onClick={this.handleAdd}>Ավելացնել</button>
               </form>
               <ul className={s.commentBox}>
                   <p className={s.commentBoxHeader}>Ծնողները մեր մասին </p>
                    {CommentsJsx}
               </ul>
          </div>
      )
  }
  handleAdd=(e)=>{
    e.preventDefault(); 
    let comment=[...this.state.comments];
    // comment+=JSON.parse( localStorage.getItem('comments'));
    if(this.myRef.current.value && this.myRefName.current.value && this.myRefLname.current.value){
      comment.push({
          id:uuidv4(),
          name:this.myRefName.current.value,
          Lname:this.myRefLname.current.value,
          comName:this.myRef.current.value
         

         });
    }  
 localStorage.setItem('comments', JSON.stringify(comment));
      this.setState(prevState=> ({
          ...prevState,
          comments:comment
          
      }));
     this.myRef.current.value='';
     this.myRefName.current.value='';
     this.myRefLname.current.value='';
  
      
}
}
export default Comments;