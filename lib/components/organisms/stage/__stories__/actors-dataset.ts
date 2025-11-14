//@ts-nocheck
import { ActorType } from "@/models/ActorModel";
import { ActorSpeechModel } from "@/models/ActorSpeechModel";

// each actor should have their own speech

const hunterActorModel: ActorType = {
  id: 0,
  tileSize: 80,
  variant: "hunter",
  position: { x: 40, y: 40, z: 0 },
};

const warriorActorModel: ActorType = {
  id: 1,
  tileSize: 80,
  variant: "warrior",
  position: { x: 220, y: 220, z: 0 },
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 40,
    top: 80,
  },
};

const wispActorModel: ActorType = {
  id: 2,
  tileSize: 80,
  variant: "wisp",
  position: { x: 140, y: 140, z: 0 },
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    top: 0,
  },
  customSkinStyle: {
    backgroundColor: "whitesmoke",
  },
};

export const actors = [wispActorModel, hunterActorModel, warriorActorModel];
