import * as React from "react";
import { useState, useEffect } from "react";
import Hunter from "..";
import {
  Paragraph,
  SubHeadline,
  Image,
  Button,
  Column,
  Label,
} from "../../../../../";
import useSound from "use-sound";
import boopSfx from "./bird-chirping-2021-8983.mp3";
import wav from "./mixkit-retro-game-notification-212.wav";
import bells from "./bells.flac";

import { nextMeetingStore } from "./hunter-next-meeting.store";

// https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
// https://freesound.org/people/headwinds_studio/
// https://spoonacular.com/food-
// https://opentdb.com/api_config.php

const militaryTimeMap = {
  1: 13,
  2: 14,
  3: 15,
  4: 16,
  5: 17,
  6: 18,
  7: 19,
  8: 20,
  9: 21,
  10: 22,
  11: 23,
  12: 24,
};

const reverseMilitaryTimeMap = Object.fromEntries(
  Object.entries(militaryTimeMap).map(([key, value]) => [value, parseInt(key)])
);

const nextMeetings = [
  { id: 0, time: militaryTimeMap[2], what: "Employee Ritual" },
  { id: 1, time: militaryTimeMap[4], what: "Viewer" },
];

const getPmOrAm = (time) => {
  if (time > 12) {
    return "PM";
  } else {
    return "AM";
  }
};

const HunterNextMeetingStory = () => {
  const context = store.getSnapshot();
  console.log(store.getSnapshot());

  store.subscribe((snapshot) => {
    console.log(snapshot.context);
  });

  const [time, setTime] = useState(new Date());
  const [play] = useSound(wav);
  // watch the time every minute
  const interval = setInterval(() => {
    console.log("time changed every minute");
    setTime(new Date());
  }, 60000);

  // check the time and find the next meeting and play a sound 5 minutes before and 1 minute before
  const nextMeeting = nextMeetings.find(
    (meeting) => meeting.time > time.getHours()
  );
  const nextMeetingTime = nextMeeting?.time ?? 0;
  const nextMeetingWhat = nextMeeting?.what ?? "";

  const updateMeetings = (updatedMeeting) => {
    const meetings = store.getSnapshot().meetings;
    const updatedMeetings = meetings.map((meeting) => {
      if (meeting.id === updatedMeeting.id) {
        return updatedMeeting;
      }
      return meeting;
    });

    store.send({ type: "changeName", newName: "Jenny" });
  };

  if (!nextMeeting) {
    clearInterval(interval);
    return (
      <Column>
        <Paragraph>No more meetings today</Paragraph>
      </Column>
    );
  }

  const playSound = () => {
    play();
  };

  // play the sound whenever the time changes
  useEffect(() => {
    if (time.getHours() === nextMeetingTime - 1 && time.getMinutes() === 59) {
      playSound();
    }
    // play sound 5 minutes before
    if (time.getHours() === nextMeetingTime - 1 && time.getMinutes() >= 55) {
      playSound();
    }
  }, [time]);

  const onClick = () => {
    play();
  };

  const nextHour = nextMeeting.time;
  const currentHour = time.getHours();
  const currentMinutes = time.getMinutes();

  return (
    <Column>
      <Paragraph>
        Next Meeting: {reverseMilitaryTimeMap[nextHour]} {getPmOrAm(nextHour)}{" "}
        {nextMeetingWhat}
      </Paragraph>
      <Paragraph>
        Current Hour: {reverseMilitaryTimeMap[currentHour]}:{currentMinutes}{" "}
        {getPmOrAm(currentHour)}
      </Paragraph>
      <Column customStyle={{ height: 100 }}>
        <Hunter />
      </Column>
      <Button onClick={onClick}>boop</Button>
    </Column>
  );
};

export default HunterNextMeetingStory;
