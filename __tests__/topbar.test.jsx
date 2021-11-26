/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import TopBar from "../components/HeaderCustom/TopBar";

describe("TopBar", () => {
  it("Renders without crashing", () => {
    render(<TopBar />);
  });
});
