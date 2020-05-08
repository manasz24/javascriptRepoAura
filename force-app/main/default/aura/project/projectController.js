({
    doInit: function(cmp,event,helper) {
        // Set the attribute value. 
        // You could also fire an event here instead.
        helper.updateItem(component, event.getParam("setMeOnInit"));
    }
})