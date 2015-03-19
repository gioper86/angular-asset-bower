# angular-asset-bower
Simple Grails + AngularJS project that shows how to integrate bower with the asset-pipeline plugin.

The interesting folder in this project is the one used by the asset-pipeline plugin (grails-app/assets).
It contains the static resources like javascripts, CSSs and images. The third part client-side libraries in this project are managed with bower.


If you want to add client-side dependencies you first need to install bower through npm:

npm install -g bower

Then you just need to edit grails-app/asset/bower.json and run the following command

bower install

You can run the grails application by typing

./grailsw run-app

You can then see the final result at this address: 

http://localhost:8080/angular-asset-bower/app/index#/
