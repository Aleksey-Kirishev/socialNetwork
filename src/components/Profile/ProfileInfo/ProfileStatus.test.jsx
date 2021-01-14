import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe ("ProfileStatus Component", ()=>{
    test("status from props should be in the state", () => {
      const component = create (<ProfileStatus status="Hello. How r u?"/>);
      const instance = component.getInstance();
      expect (instance.state.status).toBe("Hello. How r u?");
    });
    
    test('', function(assert) {
      
    });
})