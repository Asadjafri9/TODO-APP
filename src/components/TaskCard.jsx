import './taskCard.css'
import Tag from './tag'
import Delete from '../assets/delete.jpg'
function TaskCard({title , tags ,handleDelete , index}) {
    return ( <>
   <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className="task_card_bottom_line">
        <div className="task_card_tag">
            {
                tags.map(
                    (tag,index)=>
                        <Tag tagName = {tag} key = {index} selectedTag></Tag>
                )
            }
        </div>
        <div className="delete_icon" onClick={() => handleDelete(index)}>
            <img style={{width:'40px'}}src={Delete} alt="" />
        </div>
        </div>
    </article>
    </> );
}

export default TaskCard;