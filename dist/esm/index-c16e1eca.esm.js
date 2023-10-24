import React, { useState } from 'react';
import { Chip, Typography, Drawer, Box, Grid, Container } from '@material-ui/core';
import { InfoCard, Page, Header, HeaderLabel, Content, ContentHeader, SupportButton } from '@backstage/core-components';

const CardComponent = ({
  data,
  key,
  onQuery,
  onState
}) => {
  function handleClick() {
    console.log(data);
    onQuery(data);
    onState(true);
  }
  return /* @__PURE__ */ React.createElement("div", { style: { paddingBottom: "10px", cursor: "pointer" }, onClick: handleClick }, /* @__PURE__ */ React.createElement(
    InfoCard,
    {
      title: data.title,
      subheader: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chip, { label: "Chip Filled", color: "primary" }), /* @__PURE__ */ React.createElement(Chip, { label: "Chip Filled", color: "primary" }))
    },
    /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, data.body.substring(0, 120) + "...")
  ));
};

const json$2 = [
  {
    id: 0,
    title: "Pull Request 1",
    body: 'This pull request is focused on implementing a new feature in the Passenger Experience Enhancement App, specifically the "Seat Selection" feature. The goal is to provide passengers with an improved and seamless seat selection process, enhancing their overall experience when booking flights with our airline.',
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
  state,
  onState
}) => {
  console.log("OKAY", query);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    onState(open);
  };
  return query ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, { anchor: "right", open: state, onClose: toggleDrawer(false) }, /* @__PURE__ */ React.createElement(Box, { sx: { width: 250 } }, /* @__PURE__ */ React.createElement(Typography, { variant: "h5" }, query.title), /* @__PURE__ */ React.createElement("div", null, query.body), /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, "Assignees"), query.assignees.map((item) => /* @__PURE__ */ React.createElement("div", null, item.login)), /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, "Requested Reviewers"), query.requested_reviewers.map((item) => /* @__PURE__ */ React.createElement("div", null, item.login))))) : /* @__PURE__ */ React.createElement(React.Fragment, null);
};

const KanbanComponent = () => {
  const [query, setQuery] = useState();
  const [state, setState] = useState(false);
  return /* @__PURE__ */ React.createElement(Page, { themeId: "documentation" }, /* @__PURE__ */ React.createElement(Header, { title: "Welcome to tamu-fall-2023-frontend!", subtitle: "Optional subtitle" }, /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Owner", value: "Team X" }), /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Lifecycle", value: "Alpha" })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(ContentHeader, { title: "Plugin title" }, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "row" }, /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json$2.map((item) => /* @__PURE__ */ React.createElement(
    CardComponent,
    {
      data: item,
      key: item.id,
      onQuery: setQuery,
      onState: setState
    }
  )))), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json$1.map((item) => /* @__PURE__ */ React.createElement(
    CardComponent,
    {
      data: item,
      key: item.id,
      onQuery: setQuery,
      onState: setState
    }
  )))), /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 4 }, /* @__PURE__ */ React.createElement(Container, null, json.map((item) => /* @__PURE__ */ React.createElement(
    CardComponent,
    {
      data: item,
      key: item.id,
      onQuery: setQuery,
      onState: setState
    }
  ))))), /* @__PURE__ */ React.createElement(Container, { maxWidth: "sm" }, /* @__PURE__ */ React.createElement(PreviewComponent, { query, state, onState: setState }))));
};

export { KanbanComponent };
//# sourceMappingURL=index-c16e1eca.esm.js.map
