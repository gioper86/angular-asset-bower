import angular.asset.bower.Car

class BootStrap {

    def init = { servletContext ->
		
		new Car(name:"458 spider", manufacturer: "Ferrari").save()
		new Car(name:"Aventador", manufacturer: "Lamborghini").save()
		new Car(name:"GranTurismo", manufacturer: "Maserati").save()
		
    }
    def destroy = {
    }
}
