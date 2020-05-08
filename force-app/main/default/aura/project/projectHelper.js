/* helper */
({
    updateItem : function(component, setMeOnInit, callback) {
        // Update the items via a server-side action
        var action = component.get("c.saveItem");
        action.setParams({"setMeOnInit" : setMeOnInit});
        // Set any optional callback and enqueue the action
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },

    //After render
        open : function(component, note, mode, sort){
            if(mode === "new") {
                //do something
            }
            // do something else, such as firing an event
        }
})