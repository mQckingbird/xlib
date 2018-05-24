var _sampleVue = function (o) {
    var self = o;

    /**
     * Initialize
     */
    var init = function(o){
        console.log('_sampleVue instance init');

        self.rootDOM = document.querySelector(o.rootDOM);
        self.inputDOM = document.querySelector(o.inputDOM);

        self.storage = {
            elements: [],
            input: "Default paragraph data"
        };
        self.inputData = "";

        let children = self.rootDOM.children;
        for(let i=0; i < children.length; i++){if (window.CP.shouldStopExecution(1)){break;}
            let child = children[i];
            let mustacheExec = /\{\{((?:.|\n)+?)\}\}/g.exec(child.textContent);
            
            if(mustacheExec)
                checkMustache(child, mustacheExec[1]);
        }
window.CP.exitedLoop(1);


        storageBundle(self.storage);

        /**
         * event bundle
         */
        self.inputDOM.onkeyup=function(e){
            
            // trigger object.set()
            self.storage.input = e.target.value;
            refresh();
        }

        return self;
    }

    /**
     * interpolation mustache: {{ ... }}
     * 
     * @param  dom     el   element
     * @param  string  name property name
     */
    var checkMustache = function(el, name){
        //if(!name in self.storage){
            //throw("data not found");
        //}

        el.textContent = self.storage[name];
        //console.log(el.textContent);
        self.storage.elements.push(el);
    }

    /**
     * bundle storage attribute 
     * 
     * @param object obj bundle target
     */
    var storageBundle = function(obj){
        // define trigger
        Object.defineProperty(obj,'input',{
            set:function(val){
                console.log('_set');
                self.inputData = val;
            },
            get:function(){
                console.log('_get');
                return self.inputData;
            }
        });
    }

    /**
     * Refresh data
     */
    var refresh = function(){
        console.log("Re Render...");
        for(let i=0; i < self.storage.elements.length; i++){if (window.CP.shouldStopExecution(2)){break;}
            self.storage.elements[i].textContent = self.storage.input;
        }
window.CP.exitedLoop(2);

    }

    return init(o);
}

var sampleVue = new _sampleVue({
    rootDOM: '#demo', 
    inputDOM: '#inputDOM'
});