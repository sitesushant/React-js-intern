import React from "react";
import ButtonDocs from "../components/docs/ButtonDocs";
import AccordionDocs from "../components/docs/AccordionDocs";
import TabsDocs from "../components/docs/TabsDocs";
import TableDocs from "../components/docs/TableDocs";
import SliderDocs from "../components/docs/SliderDocs";
import DropdownDocs from "../components/docs/DropdownDocs";
import ImageSliderDocs from "../components/docs/ImageSliderDocs";
import LocalStorageHookDocs from "../hooks/docs/LocalStorageHookDocs";
import WindowWidthHookDocs from "../hooks/docs/WindowWidthHookDocs";

const DocsPage = ({ activeItem }) => {
  const docsMap = {
    Button: <ButtonDocs />,
    Accordion: <AccordionDocs />,
    Tabs: <TabsDocs />,
    Table: <TableDocs />,
    Slider: <SliderDocs />,
    Dropdown: <DropdownDocs />,
    ImageSlider: <ImageSliderDocs />,
    useLocalStorage: <LocalStorageHookDocs />,
    useWindowWidth: <WindowWidthHookDocs />,
  };

  return <div className="docs-container">{docsMap[activeItem]}</div>;
};

export default DocsPage;
