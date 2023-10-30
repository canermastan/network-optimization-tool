import logo from './logo.svg';
import './App.css';
import Computer from './Computer';
import Network from './Network';
import { useState } from 'react';
import { ActionIcon, AppShell, Burger, Group, MantineProvider, Text, Header, Navbar, MediaQuery } from '@mantine/core';
import { createStyles, useMantineTheme } from '@mantine/styles'
import { Sun, Moon, Home as HomeIcon, Wifi, Monitor, Clock } from 'react-feather';
import { MemoryRouter, NavLink, Route, Routes } from 'react-router-dom';
import '@fontsource/open-sans';
import Home from './Home';
import Ping from './Ping';

function App() {
  const views = [{
    path: '/',
    name: 'Anasayfa',
    exact: true,
    component: Home
  }, {
    path: 'network',
    name: 'İnternet',
    component: Network
  },
  {
    path: 'ping',
    name: 'Ping',
    component: Ping
  }]


  // mobile nav
  const [opened, setOpened] = useState(false);
  const defaultColorScheme = 'dark';
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  const toggleColorScheme = value => {
    const newValue = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(newValue);
  }

  const useStyles = createStyles((theme) => ({
    navLink: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      TextDecoration: 'none',

      '&:hover': {
        backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
      }
    },
    navLinkActive: {
      backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }
  }));

  function getIcon(name) {
    if (name === "Anasayfa") return <HomeIcon />
    else if (name === "İnternet") return <Wifi />
    else if (name === "Ping") return <Clock />
  }

  const { classes } = useStyles();

  return (
    <MantineProvider theme={{ colorScheme: colorScheme, fontFamily: 'Open Sans, sans-serif' }} withGlobalStyles >
      <MemoryRouter>
        <AppShell padding="md" navbarOffsetBreakpoint="sm" fixed
          navbar={
            <Navbar width={{ sm: 200 }} padding="xs" hidden={!opened} hiddenBreakpoint="sm">
              {
                views.map((view, index) =>
                  <NavLink align="left" to={view.path} key={index} onClick={() => setOpened(false)} className={({ isActive }) => classes.navLink + ' ' + (isActive ? classes.navLinkActive : '')}>
                    <Group>
                      {
                        getIcon(view.name)
                      }
                      <Text>{view.name}</Text>
                    </Group>
                  </NavLink>
                )
              }
            </Navbar>
          }
          header={
            <Header height={70} padding="md">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={useMantineTheme().colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <Text>Optimizasyon Aracı</Text>
                <div style={{ marginLeft: "auto" }}>
                  <ActionIcon variant='default' onClick={() => toggleColorScheme()} size={30}>
                    {colorScheme === 'dark' ? <Sun /> : <Moon />}
                  </ActionIcon>
                </div>
              </div>

            </Header>
          }
          styles={theme => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
          })}
        >
          <Routes>
            {
              views.map((view, index) => <Route key={index} exact={view.exact} path={view.path} element={<view.component />} />)
            }
          </Routes>
        </AppShell>
      </MemoryRouter>
    </MantineProvider>
  )
}
export default App;
