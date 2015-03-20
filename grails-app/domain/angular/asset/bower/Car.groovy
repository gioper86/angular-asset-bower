package angular.asset.bower

import grails.rest.Resource

@Resource(uri='/cars', formats=['json'])
class Car {
	
	String name
	String manufacturer
    
	static constraints = {
    }
}
