// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {

  // サイズを指定
  // const width = window.innerWidth * 0.8;
  // const height = width * (1 / 1.7);

  const width = "331";
  const height = width * (1 / 1.7);

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);

  // 箱を作成
  const geometry = new THREE.BoxGeometry(400, 400, 400);
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);


  // textは動いていないみたい
  const loader = new THREE.FontLoader();
  loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
    const geometry2 = new TextGeometry( 'Hello three.js!', {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5
    } );
    const message = new THREE.TextGeometry("キャラクタが歩いていて欲しいな〜",geometry2);
    scene.add(message);
  } );



  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    box.rotation.y += 0.01;
    renderer.render(scene, camera); // レンダリング

    requestAnimationFrame(tick);
  }
}
