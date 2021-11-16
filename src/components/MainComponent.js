import React,{useRef,useCallback,useEffect, Component} from 'react'
import SpeechBalloon from './SpeechBalloon'
import SpeechBalloonOpp from './SpeechBalloonOpp'

import store from '../index'
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo } from "../redux_src/chat_rdx";
import AudioRecord from './MicButton'
import ReactPlayer from 'react-player'


const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
  };
  
  
  

     
   

class MainComponent extends Component 
{
    constructor(props)
    {
        super(props)
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
    componentDidMount() {
        this.scrollToBottom();
    
    }
      
      componentDidUpdate() 
      {

        this.scrollToBottom();
      }
    render(){
        
          
        
    
    
        const chat=store.getState()['chat']
        const vid=store.getState()['video']
        


      
          

        return(
    
    
            <div>
              <div>{vid}</div>
                <div style={{
                    display:'grid',
                    gridTemplateRows:' 1fr 30px',
                   
                    
                }}>
                    <div>
                        <div
                        style={{margin:'0 auto',
                        backGroundColor:'yellow',
                        width:'380px',
                        height:'400px'}}>

                    <ReactPlayer url={vid} playing={true}></ReactPlayer>
                    </div>
                
                
              <div style={{height:'50px'}}><AudioRecord></AudioRecord></div>
                
               

                </div>
      
                <div 
         
                style={{
                    
                    margin: '0 auto',
                    
                    width:'500px',
                    height:'200px',
                
                }}>
                    
                  <div 
                 
                  
                  style={{
                    marginTop:'10px',
                      height:'200px',
                      overflowY:'auto',
                      overflowX:'hidden',
                     
                  }}
                  >
                      {chat.map((speech_a,idx)=>{
            
                          if(speech_a[0]==0){return(<SpeechBalloon _speech={speech_a[1]}></SpeechBalloon>)}
                    else return(<SpeechBalloonOpp _speech={speech_a[1]}></SpeechBalloonOpp>
                    
                    )
                    }
                    
                    )
                    
                    }
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}></div>
                    
                    
                    
            
              </div>
              
            
                </div>
                </div>
                
                </div>
           
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)