// importImages.js
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./image_slider', false, /\.(png|jpe?g|svg)$/));

export default images;
