import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";


const testColors = () => {
  axiosWithAuth()
      .get("/api/colors")
      .then((response) => setColorList(response.data))
      .catch((error) => console.log(error.response.data))
};

let getColors = testColors()

jest.mock(getColors)
console.log(getColors)
