import React,{Component} from 'react';
import Bar from './components/Bar';
import './App.css';
// props--> properties that are passed in
class App extends Component{
    state={// state is an object
        array: [],
        arraySteps: [],
        colorKey:[],
        colrSteps:[],
        currSteps:0,
        count:10,
        delay:100,
        algorithm:'',
        timeouts: [],
    
    };


// function for calling the genrate randam array
    componentDidMount(){
        this.generateArray();
;    }

    // function to generate an random array
    generateRandomNum=(min, max)=>{
        return Math.floor(Math.random() * (max-min)+min); //more than the minimum value and less than the max 
    }
    generateArray=() =>{
        const count=this.state.count;
        let temp =[];// empty array

        for(let i=0 ;i<count;i++){
  
            
            temp.push(this.generateRandomNum(50,200));
        }
    //   console.log(temp)
    this.setState({
        array:temp,
        arraySteps: [temp],
        currentStep:0,
    });
    };
    changeArray=(index,value)=>{
        let arr = this.state.array;
        arr[index]= value;
        this.setState({
            array:arr,
            arraySteps:[arr],
            currentStep:0
        })

    }
    render(){
        let bars = this.state.array.map((value,index)=>(
           
          <Bar 
           key = {index} 
           index = {index}
           length = {value}
           color = {0} 
           changeArray ={this.changeArray}
           />
        )); 

        // h1 cannot include the div/components
        return (
            <div className='app'>
                <div className="frame">
                    <div className="barsDiv container card "> {bars}</div>
                <div className="control-panel"></div>
                <div className="pannel"></div>
                </div>
            </div>
      );
    }
}

export default App;