import { Record } from 'immutable';

const TileModel = Record({
  id: 0,
  name: 'snowbank',
  description: '',
  material: 'snow',
  movement_cost: 0,
  color: 10,
  type: 'tile',
  skin: '',
  damage: 0,
  is_obstacle: true,
  obstacle_remover: 'shovel',
});

export default TileModel;
