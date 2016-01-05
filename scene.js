$(document).ready(function () {

    var scene, camera, renderer, sphere;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();
        var aspect_ratio = 0.3 / 0.7;
        camera =  new THREE.OrthographicCamera( window.innerWidth * -1, window.innerWidth, window.innerHeight, window.innerHeight * -1, 10, 10000);
        camera.position.z = 1500;
        camera.position.y = 300;
        camera.lookAt (new THREE.Vector3( 0, 0, 0 ));


        renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true});
        renderer.setSize( window.innerWidth, window.innerHeight);
        document.getElementById("scene_container").appendChild( renderer.domElement );

        // enclose this in a div

        // sphere geometry
        var sphere_radius = 15;
        var segments = 25;
        var rings = 25;
        
        // create the sphere's material
        var sphereMaterial =
        new THREE.MeshBasicMaterial(
        {
            color: 0xFFFFFF
        });
        sphereMaterial.wireframe = true;
        var sphere_geometry = new THREE.SphereGeometry(sphere_radius, segments,rings);

        // generate sphere
        sphere = new THREE.Mesh(sphere_geometry,sphereMaterial);
        sphere.scale.set(20,20,20);

        // name sphere
        sphere.name = "sphere";

        // set casts shadows to true
        sphere.castShadow = true;
        sphere.receiveShadow = true;

        // set position
        sphere.position.set(0, 0, 0);

        // add the sphere to the scene
        scene.add(sphere);
        

        // create a point light
        var pointLight =
        new THREE.PointLight(0xFFFFFF);

        // set its position
        pointLight.position.x = 0;
        pointLight.position.y = 100;
        pointLight.position.z = 100;
        pointLight.distance = 2000;

        // add to the scene
        //scene.add(pointLight);

        // create a spot light
        var spot_light = new THREE.SpotLight( 0xffffff );
        spot_light.position.set(0, 1000, 100);
        spot_light.castShadow = true;
        spot_light.shadowMapWidth = 1024;
        spot_light.shadowMapHeight = 1024;
        spot_light.shadowCameraNear = 10;
        spot_light.shadowCameraFar = 10000;
        spot_light.shadowCameraFov = 30;
        scene.add(spot_light);

        // create ambient light
        var ambient_light = new THREE.AmbientLight( 0x444444 ); // soft white light
        scene.add( ambient_light );

        // draw!
        renderer.render(scene, camera);
    }

    function animate()
    {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.rotation.z += 0.01;

    }
});
