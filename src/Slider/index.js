import './style.css'
import React, { Component } from 'react'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            color:0,
            arrColor:['https://cdn.mobilecity.vn/mobilecity-vn/images/2020/05/man-hinh-xiaomi-redmi-k30.jpg','https://cdn.mobilecity.vn/mobilecity-vn/images/2020/05/nut-nguon-van-tay-xiaomi-redmi-k30.jpg','https://cdn.mobilecity.vn/mobilecity-vn/images/2020/05/canh-duoi-xiaomi-redmi-k30.jpg','https://cdn.mobilecity.vn/mobilecity-vn/images/2020/05/cam-truoc-xiaomi-redmi-k30.jpg']
        }
    }
    nextImg=()=>{
        this.setState(
            {
                color:this.state.color===3?0:this.state.color+1
            }
        )
    }
    preImg=()=>{
        this.setState(
            {
                color:this.state.color===0?3:this.state.color-1
            }
        )
    }
    componentDidMount()
    {
        
        setInterval(() => {
            this.nextImg()
        }, 1000);
            
        
    }
    render() {
        const {arrColor}=this.state;
            const {color}=this.state;
        return (
            
            <div>
                <img className='slider' src={arrColor[color]} >
                
            </img>
            <button className='btn-previos' onClick={()=>this.preImg()}>&#60;</button>
                <button className='btn-next' onClick={()=>this.nextImg()}>&#62;</button>
            </div>
            
        )
    }
}
