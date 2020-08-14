import React from 'react';
const SearchFilterFunction = ({text,data,setData}) =>{
    const dataTemp = [...data];
    const newData = dataTemp.filter(function(item) {
      const itemData = item.word ? item.word.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    
  if(text.length<1){
    setData(newData);
  }
  else{
    setData('');
  }
  }

  export default SearchFilterFunction;