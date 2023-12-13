const width = 20; // minium grid is 20 x 20 with 5 room size
const height = 20;

// 200 will render but it takes a lot of time and its a sea of green
//const width = 200;
//const height = width;

export const GRID_WIDTH = width;
export const GRID_HEIGHT = height;

// export const MAX_ROOMS = (config.VP_TYPE === "full") ? 25 : 15;
export const MAX_ROOMS = 8;
//export const ROOM_SIZE_RANGE = [7, 12];
export const ROOM_SIZE_RANGE = [4, 6]; // don't make it 10 x 10 or else it will result in 1 room!!!
export const CELL_SIZE_LEVEL = 100; // 8
export const CELL_SIZE_BOARD = 100;
export const CELL_SIZE_STAGE = 100;
