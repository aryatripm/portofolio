import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../../lib/model';


const Arya: React.FC = () => {
    const refBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<any>();
    const [_camera, setCamera] = useState<any>();
    const [target] = useState(new THREE.Vector3(0, 1.2, 0));
    const [initialCameraPosition] = useState(
        new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
    );
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState<any>();

    const handleWindowResize = useCallback(() => {
        const { current: container } = refBody;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    const easeOutCirc = (x: number) => {
        return Math.sqrt(1 - Math.pow(x - 1, 4));
    };

    useEffect(() => {
        const { current: container } = refBody;
        if (container && !renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = scW * 0.006;
            const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            // scene.add(ambientLight);

            const width = 10;
            const height = 10;
            const intensity = 2;
            const rectLight1 = new THREE.RectAreaLight(0xffffff, intensity, width, height);
            const rectLight2 = new THREE.RectAreaLight(0xffffff, intensity, width, height);
            const rectLight3 = new THREE.RectAreaLight(0xffffff, intensity, width, height);
            rectLight1.position.set(5, 0, -3);
            rectLight2.position.set(7, 0, 7);
            rectLight3.position.set(-5, 0, 5);
            rectLight1.lookAt(target);
            rectLight2.lookAt(target);
            rectLight3.lookAt(target);
            scene.add(rectLight1)
            scene.add(rectLight2)
            scene.add(rectLight3)

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);

            loadGLTFModel(scene, '/char.glb', {
                receiveShadow: true,
                castShadow: true,
            }).then(() => {
                animate();
                setLoading(false);
            });

            let req: any = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 30;

                    camera.position.y = 0;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);

                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            };

            return () => {
                console.log('unmount');
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [renderer, handleWindowResize]);

    return (

        <Box ref={refBody} width={250} height={250}>{loading && <Spinner></Spinner>}</Box>

    );
};

export default Arya;