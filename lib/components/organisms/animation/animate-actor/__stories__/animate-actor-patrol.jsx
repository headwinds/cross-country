import { useState, useEffect } from "react";
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  useSpringRef,
  config,
} from "@react-spring/web";
import {
  Wisp,
  Hunter,
  Warrior,
  Cleric,
  Wizard,
  Column,
  Row,
  Paragraph,
  Button,
  Hilight,
} from "../../../../";

const AnimateActorPatrol = ({
  actorComponentName = "cleric",
  targetPosition = { x: 100, y: 200, z: 0 },
}) => {
  const springRef = useSpringRef();
  const [isDisabled, setDisabled] = useState(false);
  const [wispSpeach, setWispSpeechText] = useState("Halt!");

  const warriorReports = [
    "All clear",
    "What's for supper?",
    "I see nothing",
    "I see something...nah it was nothing",
    "Or did I?!",
  ];
  const [warriorReport, setWarriorReport] = useState("");

  const [props, api] = useSpring(
    () => ({
      ref: springRef,
      from: { x: 0, y: 0, z: 0 },
    }),
    []
  );

  const move = (distance) => {
    const { x, y, z } = props;
    const curX = x.get();
    const curY = y.get();
    const newDistanceRight = curX + distance;
    const newDistanceDown = curY + distance;
    const newDistanceLeft = newDistanceRight - distance;
    const newDistanceUp = newDistanceDown - distance;

    let count = 0; // had to use a simple let as useState seems to affect the animation restarting it!

    const onRest = () => {
      count = count < 4 ? count + 1 : 0;
      setWarriorReport(warriorReports[count]);
    };

    const multipleTo = async (next, cancel) => {
      await next({ x: newDistanceRight, onRest });
      await next({ y: newDistanceDown, onRest });
      await next({ x: newDistanceLeft, onRest });
      await next({ y: newDistanceUp, onRest });
    };

    api.start({
      to: multipleTo,
      onPause: () => console.log("move spring has paused"),
      onResume: () => console.log("move spring has resumed"),
      config: config.gentle,
      loop: true,
    });
  };

  const handleClick = () => {
    // how can I access that cancel function?!
    // ok instead of using the cancel function
    // I can just use the pause and resume functions
    if (wispSpeach === "Halt!") {
      api.pause();
      setWispSpeechText("Carry on!");
      setWarriorReport("Roger roger");
    } else {
      api.resume();
      setWispSpeechText("Halt!");
    }
  };

  useEffect(() => {
    move(100);
  }, []);

  const tileSize = 50;

  return (
    <Column>
      <Row>
        <Column
          customStyle={{
            width: 200,
            height: 220,
            backgroundColor: "whitesmoke",
          }}
        >
          <animated.div style={props}>
            <Warrior />
          </animated.div>
        </Column>
        <Paragraph customStyle={{ margin: 16 }}>
          <Hilight color="grey">warrior:</Hilight> {warriorReport}
        </Paragraph>
      </Row>
      <Column customStyle={{ width: 400 }}>
        <Row customStyle={{ alignItems: "center" }}>
          <Column customStyle={{ width: 40 }}>
            <Wisp />
          </Column>
          <Button onClick={handleClick}>{wispSpeach}</Button>
        </Row>
      </Column>
    </Column>
  );
};

export default AnimateActorPatrol;
