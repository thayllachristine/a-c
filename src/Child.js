import React, { useState, useEffect } from "react";
import { Box, Loader, getTheme } from "styled-minimal";

const Child = ({ color = "yellow", duration, step, callback }) => {
  const [bgColor, setBgColor] = useState("transparent");

  const { colors } = getTheme();

  useEffect(() => {
    setTimeout(() => {
      callback(step);
      setBgColor(color);
    }, duration);
  }, []);

  return (
    <Box
      alignItems="center"
      bg={bgColor}
      border={`2px solid ${colors[color]}`}
      borderRadius="8px"
      display="flex"
      height={128}
      justifyContent="center"
      margin="16px 0 0 0"
    >
      <Loader color={colors[color]} size={48} />
    </Box>
  );
};

export default Child;
