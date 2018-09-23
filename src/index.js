module.exports = function check(str, bracketsConfig) {
  var stack = [];

  for( var i = 0; i < str.length; i++ ){

      for ( var j = 0; j < bracketsConfig.length; j++ ) {

          if( str[i] == bracketsConfig[j][0]  && bracketsConfig[j][0] == bracketsConfig[j][1]
              && bracketsConfig[j][0] == stack[stack.length - 1] ){

              stack.pop();
              
              break;
          }

          if ( str[i] == bracketsConfig[j][0] ){

              stack.push( str[i] );

              break;
          }
          if( str[i] == bracketsConfig[j][1] ){

                  if( bracketsConfig[j][0] != stack.pop() ){

                      return false;
                  }
          }
      }
  }

  if( stack.pop() ) return false;

  return true;
}
