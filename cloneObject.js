  
  function cloneDeepObject(obj){
    const stackSet = new Set();
    
    function clone(obj){
      var clonedObject;

      // Check if null, undefined or primitive types
      if (obj === null || typeof obj !== 'object') {
          return obj;
      }

      // Check if Array
      if(obj instanceof Array){
          clonedObject = [];

          for(var i = 0; i < obj.length; i++){

              clonedObject[i] = clone(obj[i]);
          }

          return clonedObject;
      }

      // Check if Date
      if(obj instanceof Date) {
          clonedObject = new Date(obj.valueOf());

          return clonedObject;
      }

      // Check if  RegExp
      if(obj instanceof RegExp) {
          clonedObject = RegExp(obj.source,obj.flags);

          return clonedObject;
      }

      // Check if Object
      if(obj instanceof Object) {
          if (stackSet.has(obj)) {

            throw new Error('Object has circular structure.');
          }
          
          clonedObject = new obj.constructor();

          stackSet.add(obj);

          //iterate object properties
          for(var attr in obj){
              if(obj.hasOwnProperty(attr)){
                  //clone every propery to the cloned object
                  clonedObject[attr] = clone(obj[attr]);
              }
          }

          return clonedObject;
      }

      throw new Error('Object is not cloned');
    
    }
    
    return clone(obj)
    
  }