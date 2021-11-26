/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Buscador from "../components/HeaderCustom/Buscador";

describe("Buscador", () => {
  it("Renders without crashing", () => {
    render(<Buscador />);
  });
});
