import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
  Modal,
  Button,
} from '@mantine/core';
import {
  IconRepeat,
  IconReceipt,
  IconBrandPowershell,
  IconAccessPoint,
} from '@tabler/icons-react';
import classes from './css/Network.module.css';
import { useState } from 'react';

const mockdata = [
  { title: 'DNS', icon: IconRepeat, color: 'violet' },
  { title: 'Nagle Algorithm', icon: IconRepeat, color: 'indigo' },
  { title: 'Windows Services', icon: IconRepeat, color: 'blue' },
  { title: 'Regedit 1', icon: IconReceipt, color: 'green' },
  { title: 'Regedit 2', icon: IconReceipt, color: 'teal' },
  { title: 'Regedit 3', icon: IconReceipt, color: 'cyan' },
  { title: 'Network Shell 1', icon: IconAccessPoint, color: 'pink' },
  { title: 'Network Shell 2', icon: IconAccessPoint, color: 'red' },
  { title: 'PowerShell Command', icon: IconBrandPowershell, color: 'orange' },
];

export default function Network() {
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item} style={{ margin: 10 }} onClick={() => setOpened(true)}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Onay Penceresi"
      >
        Bu işlemi onaylıyor musunuz?
        <Group justify="space-between" position='right'>
          <Button>Evet</Button>
          <Button variant="outline" color="gray" onClick={() => setOpened(false)}>Hayır</Button>
        </Group>
      </Modal>

      <Card withBorder radius="md" className={classes.card}>
        <Group justify="space-between">
          <Text className={classes.title}>Servisler</Text>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </>
  );
}