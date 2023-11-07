import React, { useState } from 'react';
import { Chip, Typography, Drawer, Box, Grid, Divider, Container, List, ListItem, ListItemText, Card, CardContent } from '@material-ui/core';
import { InfoCard, Page, Header, HeaderLabel, Content, ContentHeader, SupportButton } from '@backstage/core-components';

const Labels = (labels) => /* @__PURE__ */ React.createElement(React.Fragment, null, labels.map((item, i) => /* @__PURE__ */ React.createElement(Chip, { label: item, key: i, color: "primary" })));

const CardComponent = ({ data, key, onQuery, onSideDrawOpen }) => {
  const handleClick = () => {
    console.log(data);
    onQuery(data);
    onSideDrawOpen(true);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { paddingBottom: "10px", cursor: "pointer" }, onClick: handleClick }, /* @__PURE__ */ React.createElement(InfoCard, { title: data.title, subheader: /* @__PURE__ */ React.createElement(React.Fragment, null, Labels(data.labels)) }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, `${data.body.substring(0, 120)}...`)));
};

const json$2 = [
  {
    id: 0,
    title: "Pull Request 1",
    body: 'This pull request is focused on implementing a new feature in the Passenger Experience Enhancement App, specifically the "Seat Selection" feature. The goal is to provide passengers with an improved and seamless seat selection process, enhancing their overall experience when booking flights with our airline.',
    labels: ["Design", "3 Days"],
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  },
  {
    id: 1,
    title: "Pull Request 2",
    body: "This pull request adds multilingual support to the app, enabling passengers to access content and services in their preferred language, fostering greater inclusivity and improving user satisfaction.",
    labels: ["Backend", "1 Day"],
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  },
  {
    id: 5,
    title: "Amazing new feature",
    body: "Please pull these awesome changes in!",
    labels: ["Backend", "5 Days"],
    assignee: {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url: "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url: "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  }
];

const json$1 = [
  {
    id: 2,
    title: "Pull Request 3",
    body: "This pull request integrates mobile check-in functionality, streamlining the check-in process for passengers using our app, promoting a seamless and hassle-free travel experience",
    labels: ["Backend", "5 Days"],
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  },
  {
    id: 3,
    title: "Pull Request 4",
    body: "Introducing multilingual support to enhance the user experience by providing content and assistance in multiple languages, boosting accessibility, and catering to a diverse global audience",
    labels: ["Design", "1 Day"],
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  }
];

const json = [
  {
    id: 4,
    title: "Pull Request 3",
    body: "This pull request integrates mobile check-in functionality, streamlining the check-in process for passengers using our app, enhancing convenience and efficiency.",
    labels: ["Backend", "4 Days"],
    assignees: [
      {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "hubot",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/hubot_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/hubot",
        html_url: "https://github.com/hubot",
        followers_url: "https://api.github.com/users/hubot/followers",
        following_url: "https://api.github.com/users/hubot/following{/other_user}",
        gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
        starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
        organizations_url: "https://api.github.com/users/hubot/orgs",
        repos_url: "https://api.github.com/users/hubot/repos",
        events_url: "https://api.github.com/users/hubot/events{/privacy}",
        received_events_url: "https://api.github.com/users/hubot/received_events",
        type: "User",
        site_admin: true
      }
    ],
    requested_reviewers: [
      {
        login: "other_user",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/other_user_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/other_user",
        html_url: "https://github.com/other_user",
        followers_url: "https://api.github.com/users/other_user/followers",
        following_url: "https://api.github.com/users/other_user/following{/other_user}",
        gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
        starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
        organizations_url: "https://api.github.com/users/other_user/orgs",
        repos_url: "https://api.github.com/users/other_user/repos",
        events_url: "https://api.github.com/users/other_user/events{/privacy}",
        received_events_url: "https://api.github.com/users/other_user/received_events",
        type: "User",
        site_admin: false
      }
    ]
  }
];

const PreviewComponent = ({
  query,
  sideDrawOpen,
  onSideDrawOpen
}) => {
  console.log("OKAY", query);
  const toggleDrawer = (open) => (event) => {
    console.log(query);
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    onSideDrawOpen(open);
  };
  return query ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Drawer,
    {
      anchor: "right",
      open: sideDrawOpen,
      onClose: toggleDrawer(false),
      BackdropProps: { invisible: true }
    },
    /* @__PURE__ */ React.createElement(Box, { width: 350, m: 2, mt: 8, alignItems: "center", justifyContent: "center" }, /* @__PURE__ */ React.createElement(Box, { mt: 2 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h4" }, query.title), /* @__PURE__ */ React.createElement("div", null, query.body)), /* @__PURE__ */ React.createElement(Box, { mt: 2 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, "Assignees"), query.assignees.map((item) => /* @__PURE__ */ React.createElement("div", null, item.login))), /* @__PURE__ */ React.createElement(Box, { mt: 2 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, "Requested Reviewers"), query.requested_reviewers.map((item) => /* @__PURE__ */ React.createElement("div", null, item.login))), /* @__PURE__ */ React.createElement(Box, { mt: 2 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, "Labels"), query.labels.map((item) => /* @__PURE__ */ React.createElement(Chip, { label: item }))))
  )) : /* @__PURE__ */ React.createElement(React.Fragment, null);
};

const KanbanColumnHeader = (columnName, columnLength) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, { mb: 2, m: 4 }, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2 }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 10 }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, columnName)), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 2 }, /* @__PURE__ */ React.createElement(Chip, { label: columnLength }))), /* @__PURE__ */ React.createElement(Divider, null)));
};

const KanbanComponent = () => {
  const [query, setQuery] = useState();
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const KanbanColumnBody = (pullRequests) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, null, pullRequests.map((item) => /* @__PURE__ */ React.createElement(
      CardComponent,
      {
        data: item,
        key: item.id,
        onQuery: setQuery,
        onSideDrawOpen: setSideDrawOpen
      }
    ))));
  };
  const KanbanTeams = () => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, { variant: "h5" }, "Teams")), /* @__PURE__ */ React.createElement(List, { disablePadding: true }, /* @__PURE__ */ React.createElement(ListItem, { alignItems: "flex-start", disableGutters: true }, /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, "Team Repository 1")))
      }
    )), /* @__PURE__ */ React.createElement(ListItem, { alignItems: "flex-start", disableGutters: true }, /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, "Team Repository 1")))
      }
    )), /* @__PURE__ */ React.createElement(ListItem, { alignItems: "flex-start", disableGutters: true }, /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, "Team Repository 1")))
      }
    ))));
  };
  return /* @__PURE__ */ React.createElement(Page, { themeId: "documentation" }, /* @__PURE__ */ React.createElement(Header, { title: "Welcome to tamu-fall-2023-frontend!", subtitle: "Optional subtitle" }, /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Owner", value: "Team X" }), /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Lifecycle", value: "Alpha" })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2, direction: "row" }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 2 }, /* @__PURE__ */ React.createElement(
    Box,
    {
      sx: {
        display: "flex",
        alignItems: "flex-start",
        height: "100%",
        width: "inherit"
      }
    },
    /* @__PURE__ */ React.createElement(Container, { disableGutters: true }, /* @__PURE__ */ React.createElement(Box, { mr: 2 }, KanbanTeams())),
    /* @__PURE__ */ React.createElement(Divider, { orientation: "vertical", flexItem: true })
  )), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 10 }, /* @__PURE__ */ React.createElement(ContentHeader, { title: "Plugin title" }, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "row" }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, KanbanColumnHeader("Defined", json$2.length), KanbanColumnBody(json$2)), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, KanbanColumnHeader("In Progress", json$1.length), KanbanColumnBody(json$1)), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, KanbanColumnHeader("Done", json.length), KanbanColumnBody(json))))), /* @__PURE__ */ React.createElement(Container, { maxWidth: "sm" }, /* @__PURE__ */ React.createElement(
    PreviewComponent,
    {
      query,
      sideDrawOpen,
      onSideDrawOpen: setSideDrawOpen
    }
  ))));
};

export { KanbanComponent };
//# sourceMappingURL=index-ee325504.esm.js.map
