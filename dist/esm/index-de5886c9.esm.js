import React from 'react';
import { Chip, Typography, Grid, Container } from '@material-ui/core';
import { InfoCard, Page, Header, HeaderLabel, Content, ContentHeader, SupportButton } from '@backstage/core-components';

const CardComponent = ({ title, desc }) => /* @__PURE__ */ React.createElement(
  InfoCard,
  {
    title,
    subheader: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chip, { label: "Chip Filled", color: "primary" }), /* @__PURE__ */ React.createElement(Chip, { label: "Chip Filled", color: "primary" }))
  },
  /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, desc)
);

const json$2 = [
  {
    id: 0,
    title: "Pull Request 1",
    description: 'This pull request is focused on implementing a new feature in the Passenger Experience Enhancement App, specifically the "Seat Selection" feature...'
  },
  {
    id: 1,
    title: "Pull Request 2",
    description: "This pull request adds multilingual support to the app, enabling passengers to access content and services in their preferred language..."
  }
];

const json$1 = [
  {
    id: 2,
    title: "Pull Request 3",
    description: "This pull request integrates mobile check-in functionality, streamlining the check-in process for passengers using our app..."
  },
  {
    id: 3,
    title: "Pull Request 4",
    description: "Introducing multilingual support to enhance user experience by providing content and assistance in multiple languages, boosting accessibility..."
  }
];

const json = [
  {
    id: 4,
    title: "Pull Request 3",
    description: "This pull request integrates mobile check-in functionality, streamlining the check-in process for passengers using our app..."
  }
];

const KanbanComponent = () => /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: "Welcome to tamu-fall-2023-frontend!", subtitle: "Optional subtitle" }, /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Owner", value: "Team X" }), /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Lifecycle", value: "Alpha" })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(ContentHeader, { title: "Plugin title" }, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "row" }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json$2.map((item) => /* @__PURE__ */ React.createElement(
  CardComponent,
  {
    title: item.title,
    desc: item.description,
    key: item.id
  }
)))), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json$1.map((item) => /* @__PURE__ */ React.createElement(CardComponent, { title: item.title, desc: item.description })))), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json.map((item) => /* @__PURE__ */ React.createElement(CardComponent, { title: item.title, desc: item.description })))))));

export { KanbanComponent };
//# sourceMappingURL=index-de5886c9.esm.js.map
