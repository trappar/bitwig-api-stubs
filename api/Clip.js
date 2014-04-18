function Clip(){
    /**
     * @param {function} callback
     */
    this.addCanScrollKeysDownObserver = function(callback){};

    /**
     * @param {function} callback
     */
    this.addCanScrollKeysUpObserver = function(callback){};

    /**
     * @param {function} callback
     */
    this.addCanScrollStepsBackwardsObserver = function(callback){};

    /**
     * @param {function} callback
     */
    this.addCanScrollStepsForwardObserver = function(callback){};

    /**
     * @param {function} callback
     */
    this.addPlayingStepObserver = function(callback){};

    /**
     * @param {function} callback
     */
    this.addStepDataObserver = function(callback){};

    /**
     * @param {int} x
     * @param {int} y
     */
    this.clearStep = function(x, y){};

    /**
     * @returns RangedValue
     */
    this.getAccent = function(){};

    /**
     * @returns BooleanValue
     */
    this.getShuffle = function(){};
    
    this.scrollKeysPageDown = function(){};
    
    this.scrollKeysPageUp = function(){};
    
    this.scrollKeysStepDown = function(){};
    
    this.scrollKeysStepUp = function(){};
    
    this.scrollStepsPageBackwards = function(){};
    
    this.scrollStepsPageForward = function(){};
    
    this.scrollStepsStepBackwards = function(){};
    
    this.scrollStepsStepForward = function(){};

    /**
     * @param {int} key
     */
    this.scrollToKey = function(key){};

    /**
     * @param {int} step
     */
    this.scrollToStep = function(step){};

    /**
     * @param {int} x
     * @param {int} y
     * @param {boolean} clearCurrentSelection
     */
    this.selectStepContents = function(x, y, clearCurrentSelection){};

    /**
     * @param {string} name
     */
    this.setName = function(name){};

    /**
     * @param {int} x
     * @param {int} y
     * @param {int} insertVelocity
     * @param {number} insertDuration
     */
    this.setStep = function(x, y, insertVelocity, insertDuration){};

    /**
     * @param {number} lengthInBeatTime
     */
    this.setStepSize = function(lengthInBeatTime){};

    /**
     * @param {int} x
     * @param {int} y
     * @param {int} insertVelocity
     */
    this.toggleStep = function(x, y, insertVelocity){};
}