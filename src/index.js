import React from 'react'
import ReactDOM from 'react-dom'

//Components
import CommentDetail from './components/approvalCard/CommentDetail'
import ApprovalCard from './components/approvalCard/ApprovalCard'

import Message from './components/message/Message'
import Segment from './components/segment/Segment'


//Facker.js
import faker from 'faker';

const App = () =>{
    return(
        <div className= "ui container comments">
        
        {/* Approval UI Component */}
            <ApprovalCard>
                <CommentDetail author="kay" time="4:56AM" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        {/* Segment */}
            <Segment message="Upload your resume" />

        {/* Message */}
            <Message header="Changes in Service" text="We Just Updated our Privacy Policy here to better service our customers" />
            
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector("#root"))