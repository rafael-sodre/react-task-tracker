import {useState} from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setday] = useState('')
    const [reminder, setReminder] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()
        
        if(!text){
            alert('Pleas add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setday('')
        setReminder(false)
        
    }

    return (
        <form className='add-form' onSubmit={onsubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type='Text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day Time</label>
                <input type='Text' placeholder='Add Day Time' value={day} onChange={(e) => setday(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask