/**
* FILE : calc.js
* WRITER: Lev Kazakov leva 306688904
* EXERCISE : INTERNET TECHNOLOGIES ex2 2013-2014
*
* DESCRIPTION :
* .
*/

/*
* Constructor.
*/
function calc(){
    // members
    var that = this;
    that.current = 0;
    that.def = 0;
    
    // getters
    
    /*
    */
    that.getCurrent = function(){ 
        return that.current; 
    };
    
    /*
    */
    that.getDefault = function(){ 
        return that.def; 
    };
    
    //setters
    
    /*
    */
    that.setDefault = function(newDef){ 
        that.def = newDef; 
    };
    
    // methods
        
    /*
    */
    that.add = function(other){
        that.current += other;
    };
        
    /*
    */
    that.mult = function(other){
        that.current *= other;
    };

    /*
    */
    that.clear = function(){
        that.current = that.def;
    };
    
}
