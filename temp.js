let items = [
    {color: 'red', type: 'tv', age: 18}, 
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17}
  ] 
  
  // an exclude array made of key value pair
  const excludes = [ 
    {k: 'color', v: 'silver'}, 
    {k: 'type', v: 'tv'}
  ] 
  
  function excludeItems(items, excludes) { 
    excludes.forEach( pair => { 
      items = items.filter(item => item[pair.k] === item[pair.v])
    })
   
    return items
  } 

  excludeItems(items, excludes);
  