import React, { Component } from 'react';
import './App.css';

class ClassComponent extends Component {
  state = {
    issues : [
      {
        id : '1',
        bug_report : true ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: 'CRA --template not picking up on github url a nested folder',
         note : '#9211 opened 4 hours ago by adeelibr',
         message : false,
         messageQuantity : 0

      },
      {
        id : '2',
        bug_report : false ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: 'How to rename index.html to index.jsp in public folder in the react project created using create-react-app ',
         note : '#9210 opened 4 hours ago by saxena-abhishek',
         message : false,
         messageQuantity : 0
      },
      {
        id : '3',
        bug_report : false ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "why there aren't webpack.config.dev.js and webpack.config.prod.js files in the config folder? ",
         note : '#9209 opened 5 hours ago by amiralibhatti',
         message : true,
         messageQuantity : 1
      },
      {
        id : '4',
        bug_report : true ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: 'npm start is not working',
         note : '#9208 opened 8 hours ago by Easyvipin',
         message : false,
         messageQuantity : 0
      },
      {
        id : '5',
        bug_report : true ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "Symlinks don't work to share code but mounting directories does",
         note : '#9207 opened 8 hours ago by dewijones92',
         message : false,
         messageQuantity : 0
      },{
        id : '6',
        bug_report : true ,
         needs_triage : true,
         need_investigation : false,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "Symlinks don't work to share code but mounting directories does",
         note : '#9207 opened 8 hours ago by dewijones92',
         message : false,
         messageQuantity : 0
      },{
        id : '7',
        bug_report : true ,
         needs_triage : false,
         need_investigation : true,
         proposal : false,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "React-Refresh not working for bound function which returns JSX",
         note : '#9204 opened yesterday by cincyelite22',
         message : true,
         messageQuantity : 1
      },{
        id : '8',
        bug_report : false ,
         needs_triage : true,
         need_investigation : false,
         proposal : true,
         enhancemnet : false,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "Allow to skip verifyTypeScriptSetup",
         note : '#9189 opened 6 days ago by xiaoxiangmoe',
         message : false,
         messageQuantity : 0
      },{
        id : '9',
        bug_report : false ,
         needs_triage : false,
         need_investigation : false,
         proposal : false,
         enhancemnet : true,
         img : 'https://cdn1.iconfinder.com/data/icons/social-object-set-5-3/74/9-512.png',
         issue: "Failed 'create-react-app' deletes current directory",
         note : '#9176 opened 7 days ago by 10hendersomn',
         message : false,
         messageQuantity : 0
      }
    ]
  };
  

  render(){
    return (
      <div>
        
          {this.state.issues.map((issue,index)=>{
            return(
              <div key={issue.id}>
                <div style= {{display : "flex" , flexDirection : "column" , borderBottom : '1px solid black'}}>
                  <span>
                    <img alt='button' className='img' src={issue.img}></img>
                    {issue.issue}
                    {issue.bug_report === true &&
                      <button className='bug_report'>issue: bug_report</button>
                    }
                    {issue.needs_triage === true &&
                      <button className='needs_triage'>needs_triage</button>
                    }
                    {issue.need_investigation === true &&
                      <button className='need_investigation'>issue: need_investigation</button>
                    }
                    {issue.proposal === true &&
                      <button className='proposal'>issue: proposal</button>
                    }
                    {issue.enhancemnet === true &&
                      <button className='enhancemnet'>tag: enhancemnet</button>
                    }
                    {issue.message === true &&
                    <span style={{float:"right"}}>
                      <img alt='button' className='img' src='https://previews.123rf.com/images/kppwc/kppwc1905/kppwc190500151/125231437-chat-message-icon-speech-bubble-icon-vector.jpg'></img>
                      {issue.messageQuantity}
                    </span>
                    }
                  </span>
                  <p className='note'>{issue.note}</p>
                </div>
              </div>
            );
          })}
          
      
        
      </div>
    );
  }
}

export default ClassComponent;
