// NOTE: - this map generator was built specifically for the terrain.png sprite sheet

// context.drawImage notes:
// source image;
//    dx - place top left x of source image here
//    dy - place top left y of source image here
//    dw - sprite width
//    dh - sprite height
// to be painted on canvas:
//    sx - top left x coord to be painted (VARIABLE)
//    sy - top left y coord to be painted (VARIABLE)
//    sw - paited sprite width
//    sh - painted sprite height

const tileTypes = ['wall', 'snow', 'water'];

const tileSize = 96;

// assume 1 tile = 96 x 96
const snowSpriteParams = {
  dx: 576,
  dy: 544,
  dw: 96,
  dh: 32,
  sw: 96,
  sh: 32,
};

const grassLayerParams = {
  dx: 0,
  dy: 352,
  dw: 96,
  dh: 32,
  sw: 96,
  sh: 32,
};

const drawSprite = ({
  context,
  spriteMap,
  sx,
  sy,
  drawParams: { dx, dy, dw, dh, sw, sh },
}) => (context.drawImage(spriteMap, dx, dy, dw, dh, sx, sy, sw, sh));

// this works
const drawFloor = ({ context, spriteMap, rows, cols, spriteParams }) => {
  // each 96 x 96 snow tile needs 3 stacked snow sprites
  const floorRows = rows * 3;
  const { sw, sh } = spriteParams;

  return Array(floorRows).fill().map((_y, y) => (
    Array(cols).fill().map((_x, x) => (
      drawSprite({
        context,
        spriteMap,
        sx: x * sw,
        sy: y * sh,
        drawParams: spriteParams,
      })
    ))
  ));
};

// params = { type, context, spriteMap, rows, cols, }
export const generateBaseLayer = (params) => {
  switch (params.type) {
    case 'snow': {
      return drawFloor({ ...params, spriteParams: snowSpriteParams });
    }
    default: {
      return drawFloor({ ...params, spriteParams: grassLayerParams });
    }
  }
};

export default { generateBaseLayer };
