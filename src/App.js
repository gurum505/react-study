import React ,{useEffect, useState}from 'react';
import {fabric} from 'fabric';//http://fabricjs.com/articles/


function App(){
  const[canvas,setCanvas]=useState('');
  useEffect(()=>{
    setCanvas(initCanvas());
  },[])
  
  const initCanvas=()=>(
    new fabric.Canvas('canvas',{
      height:800, width:800, backgroundColor:'grey'
    })
  )

  const addRect= function(){
    //TODO: Circle,Ellipse,Line,Polygon, 동작안되는 것들 확인필요
    //TODO: 객체크기 유동적으로 마우스연동이용해서 drawingmode?
    //FIXME: 객체크기를 바꾸고 다시 생성시, delete와 여러번 막 누를시 버그
    var rect=new fabric.Rect({
      width:50,height:50
    })
    canvas.add(rect) //add막누르면 버그걸림
  }

  const delItem= function(){
    let activeObjects=canvas.getActiveObjects();
    //TODO: getObject? discardActiveObject(no render) 왜안쓰는지
    if(activeObjects.length){
      activeObjects.forEach(function(object) {
        canvas.remove(object)
      });
    }
  }

  const changeColor= function(){
    //FIXME: 크기를 바꿔야만 색깔적용이 된다. 렌더링문제? select나 함수를 바꿔보자
    //TODO: renderAll 뭔소용?
    let activeObjects=canvas.getActiveObjects();
    if(activeObjects.length){
      activeObjects.forEach(function(object) {
        object.fill = '#34eb77';
        //canvas.renderAll(); 
      });
    }
  }
  //색깔팔레트=>https://codepen.io/Elite4Web/pen/xQJQKg

  const[imgURL,setImgURL]= useState('');
  const addImg=(e,url,canvi)=>{
    e.preventDefault();//?
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
      setImgURL('');  
    });
  }

  //TODO: 직렬화 역직렬화
  //TODO: 이미지 불러오기
  
  

  return(
    <div>
      <h1>Fabric.js on React </h1>
      <button onClick={addRect}> Add Rect </button>
      <button onClick={delItem}>Delete</button>
      <button onClick={changeColor}>Change Color</button>
      <form onSubmit={e => addImg(e, imgURL, canvas)}>
        <div>
          <input 
            type="text" 
            value={imgURL} 
            onChange={ e => setImgURL(e.target.value)} 
          />
          <button type="submit">Add Image</button>
        </div>
      </form>
      <canvas id="canvas" />
    </div>
  )
}

export default App;
