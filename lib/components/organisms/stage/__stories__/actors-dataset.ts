import { ActorType } from '../../../../models/ActorModel';

const hunterActorModel: ActorType = {
    id: 0,
    tileSize: 40,
    variant: 'hunter',
    position: { x: 0, y: 0, z: 0 },
    customStyle: { position: 'absolute', zIndex: 0, left: 20, top: 120, backgroundColor: 'green' },
};

const warriorActorModel: ActorType = {
    id: 1,
    tileSize: 40,
    variant: 'warrior',
    position: { x: 40, y: 80, z: 0 },
    customStyle: { position: 'absolute', zIndex: 0, left: 40, top: 80, backgroundColor: 'gold' },
};


const wispActorModel: ActorType = {
    id: 2,
    tileSize: 20,
    variant: 'wisp',
    position: { x: 40, y: 40, z: 0 },
    customStyle: { position: 'absolute', zIndex: 0, left: 0, top: 0, backgroundColor: 'whitesmoke' },
};


export const actors = [wispActorModel, hunterActorModel, warriorActorModel];