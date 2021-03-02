import React, { useState, useCallback } from "react";
import { Container, Heading } from "styled-minimal";
import "./styles.css";

import data from "./data.json";

import Child from "./Child";

export default function Parent() {
  const { steps, durations } = data;

  const dataToArr = steps.map((item, index) => {
    return {
      step: index,
      key: item.key,
      color: item.value,
      duration: durations[item.key]
    };
  });

  const [stepItem, setStepItem] = useState(0);

  const callback = useCallback((step = 0) => {
    setStepItem(step + 1);
  }, []);

  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>

      {dataToArr
        .filter((item) => item.step <= stepItem)
        .map((item) => (
          <Child
            key={item.key}
            color={item.color}
            duration={item.duration}
            step={item.step}
            callback={callback}
          />
        ))}
    </Container>
  );
}
