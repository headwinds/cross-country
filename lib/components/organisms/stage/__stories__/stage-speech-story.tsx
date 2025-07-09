import React from "react";
import StageWithSpeech from "../stage-with-speech";
import {
  createActorWithGridPosition,
  createActorsWithGridPositions,
} from "@/lib/utils/actor-util";
import { ActorSpeechModel } from "../actors/actor-speech/actor-speech";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

/**
 * Story demonstrating the enhanced speech system with multiple actors and speech objects
 */
const StageSpeechStory = () => {
  // Create actors with grid positions
  const actors = createActorsWithGridPositions([
    {
      id: 1,
      name: "Hunter",
      variant: "hunter",
      gridPosition: { row: 0, col: 0 }, // Top-left
    },
    {
      id: 2,
      name: "Warrior",
      variant: "warrior",
      gridPosition: { row: 0, col: 1 }, // Top-center
    },
    {
      id: 3,
      name: "Wisp",
      variant: "wisp",
      gridPosition: { row: 1, col: 1 }, // Center
    },
  ]);

  // Create a script with multiple speech objects
  const speechScript: ActorSpeechModel[] = [
    {
      messageId: "scene_1_hunter",
      values: { ts: Date.now() },
      actorModel: actors[0],
      name: "Hunter",
      text: "The forest is quiet today. Too quiet...",
    },
    {
      messageId: "scene_1_warrior",
      values: { ts: Date.now() },
      actorModel: actors[1],
      name: "Warrior",
      text: "I sense danger ahead. We should proceed with caution.",
    },
    {
      messageId: "scene_1_wisp",
      values: { ts: Date.now() },
      actorModel: actors[2],
      name: "Wisp",
      text: "Ancient magic flows through these woods. I can feel it...",
    },
    {
      messageId: "scene_2_hunter",
      values: { ts: Date.now() },
      actorModel: actors[0],
      name: "Hunter",
      text: "Look! Tracks leading deeper into the forest.",
    },
    {
      messageId: "scene_2_warrior",
      values: { ts: Date.now() },
      actorModel: actors[1],
      name: "Warrior",
      text: "Fresh tracks. Whatever made them is nearby.",
    },
    {
      messageId: "scene_2_wisp",
      values: { ts: Date.now() },
      actorModel: actors[2],
      name: "Wisp",
      text: "The magic grows stronger. We're getting close to something powerful.",
    },
    {
      messageId: "scene_3_hunter",
      values: { ts: Date.now() },
      actorModel: actors[0],
      name: "Hunter",
      text: "I've never seen tracks like these before. What kind of creature...",
    },
    {
      messageId: "scene_3_warrior",
      values: { ts: Date.now() },
      actorModel: actors[1],
      name: "Warrior",
      text: "Whatever it is, it's large and dangerous. We need to be ready.",
    },
    {
      messageId: "scene_3_wisp",
      values: { ts: Date.now() },
      actorModel: actors[2],
      name: "Wisp",
      text: "The ancient ones are watching. They approve of our quest.",
    },
  ];

  return (
    <CrossCountryProvider>
      <div style={{ padding: "20px" }}>
        <h2>Enhanced Speech System Demo</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          This demonstrates the new speech system with:
        </p>
        <ul style={{ marginBottom: "20px", color: "#666" }}>
          <li>✅ Speech bubbles positioned near speaking actors</li>
          <li>✅ Multiple speech objects in a script</li>
          <li>✅ Next/Prev navigation controls</li>
          <li>✅ Auto-play functionality</li>
          <li>✅ Speech counter and progress tracking</li>
        </ul>

        <div style={{ marginBottom: "20px" }}>
          <h3>Scene 1: Forest Encounter</h3>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              height: 400,
              position: "relative",
            }}
          >
            <StageWithSpeech
              actorModels={actors}
              actorSpeech={speechScript}
              showControls={true}
              autoPlay={false}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Scene 2: Auto-Play Demo</h3>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              height: 400,
              position: "relative",
            }}
          >
            <StageWithSpeech
              actorModels={actors}
              actorSpeech={speechScript}
              showControls={true}
              autoPlay={true}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Scene 3: No Controls (Clean View)</h3>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              height: 400,
              position: "relative",
            }}
          >
            <StageWithSpeech
              actorModels={actors}
              actorSpeech={speechScript}
              showControls={false}
              autoPlay={false}
            />
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h4>Features Demonstrated:</h4>
          <ul style={{ color: "#666" }}>
            <li>
              <strong>Positioned Speech:</strong> Speech bubbles appear near the
              speaking actor
            </li>
            <li>
              <strong>Script Management:</strong> 9 different speech objects in
              sequence
            </li>
            <li>
              <strong>Navigation:</strong> Use Prev/Next buttons to navigate
              through the script
            </li>
            <li>
              <strong>Auto-Play:</strong> Second scene demonstrates automatic
              advancement
            </li>
            <li>
              <strong>Progress Tracking:</strong> Shows current position in the
              script (e.g., "3 / 9")
            </li>
            <li>
              <strong>Grid Positioning:</strong> Actors positioned using grid
              coordinates
            </li>
          </ul>
        </div>
      </div>
    </CrossCountryProvider>
  );
};

export default StageSpeechStory;
